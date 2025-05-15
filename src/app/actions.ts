"use server";

import { getPersonalizedRecommendations, type PersonalizedRecommendationsInput, type PersonalizedRecommendationsOutput } from "@/ai/flows/personalized-recommendations";
import { z } from "zod";

const RecommendationsFormSchema = z.object({
  age: z.coerce.number().min(0, "Alter muss positiv sein.").max(18, "Alter muss unter 18 sein."),
  listeningHistory: z.string().optional(),
  preferences: z.string().optional(),
});

export interface RecommendationsFormState {
  message: string | null;
  recommendations: PersonalizedRecommendationsOutput | null;
  errors?: {
    age?: string[];
    listeningHistory?: string[];
    preferences?: string[];
    server?: string[];
  };
}

export async function submitRecommendationsRequest(
  prevState: RecommendationsFormState,
  formData: FormData
): Promise<RecommendationsFormState> {
  const validatedFields = RecommendationsFormSchema.safeParse({
    age: formData.get("age"),
    listeningHistory: formData.get("listeningHistory"),
    preferences: formData.get("preferences"),
  });

  if (!validatedFields.success) {
    return {
      message: "Fehler bei der Validierung der Eingaben.",
      recommendations: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { age, listeningHistory, preferences } = validatedFields.data;

  const aiInput: PersonalizedRecommendationsInput = {
    age,
    listeningHistory: listeningHistory ? listeningHistory.split("\n").map(item => item.trim()).filter(item => item) : [],
    preferences: preferences || undefined,
  };

  try {
    const recommendations = await getPersonalizedRecommendations(aiInput);
    return {
      message: "Empfehlungen erfolgreich geladen!",
      recommendations,
      errors: {},
    };
  } catch (error) {
    console.error("Error getting personalized recommendations:", error);
    return {
      message: "Ein Fehler ist beim Abrufen der Empfehlungen aufgetreten.",
      recommendations: null,
      errors: { server: ["Serverfehler. Bitte versuche es später erneut."] },
    };
  }
}
