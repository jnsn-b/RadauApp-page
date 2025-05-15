"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitRecommendationsRequest, type RecommendationsFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Music, Mic, Radio } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: RecommendationsFormState = {
  message: null,
  recommendations: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Empfehlungen werden geladen..." : <> <Wand2 className="mr-2 h-5 w-5" /> Empfehlungen erhalten</>}
    </Button>
  );
}

export default function RecommendationsTool() {
  const [state, formAction] = useFormState(submitRecommendationsRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Fehler",
          description: state.message,
          variant: "destructive",
        });
      } else if (state.recommendations) {
         toast({
          title: "Erfolg",
          description: state.message,
        });
      }
    }
  }, [state, toast]);


  return (
    <section id="recommendations" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Wand2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Persönliche Empfehlungen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erzähl uns ein wenig über dein Kind und erhalte maßgeschneiderte Vorschläge für Musik, Podcasts und Radiosender.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Empfehlungs-Assistent</CardTitle>
              <CardDescription>Fülle die Felder aus, um passende Inhalte zu finden.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="age">Alter des Kindes</Label>
                <Input id="age" name="age" type="number" placeholder="z.B. 5" required />
                {state.errors?.age && <p className="text-sm text-destructive">{state.errors.age.join(", ")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="listeningHistory">Was hört dein Kind gerne? (Optional)</Label>
                <Textarea
                  id="listeningHistory"
                  name="listeningHistory"
                  placeholder="z.B. Die Sendung mit der Maus (Podcast)&#10;Rolf Zuckowski - In der Weihnachtsbäckerei&#10;Ein Lied pro Zeile"
                  rows={4}
                />
                 {state.errors?.listeningHistory && <p className="text-sm text-destructive">{state.errors.listeningHistory.join(", ")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferences">Weitere Vorlieben oder Wünsche (Optional)</Label>
                <Textarea
                  id="preferences"
                  name="preferences"
                  placeholder="z.B. ruhige Musik zum Einschlafen, Lerninhalte, keine Werbung"
                  rows={3}
                />
                {state.errors?.preferences && <p className="text-sm text-destructive">{state.errors.preferences.join(", ")}</p>}
              </div>
               {state.errors?.server && <p className="text-sm text-destructive text-center">{state.errors.server.join(", ")}</p>}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.recommendations && (
          <Card className="max-w-2xl mx-auto mt-12 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Deine persönlichen Empfehlungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {state.recommendations.musicRecommendations && state.recommendations.musicRecommendations.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center"><Music className="mr-2 h-5 w-5 text-secondary" />Musik</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {state.recommendations.musicRecommendations.map((item, index) => <li key={`music-${index}`}>{item}</li>)}
                  </ul>
                </div>
              )}
              {state.recommendations.podcastRecommendations && state.recommendations.podcastRecommendations.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center"><Mic className="mr-2 h-5 w-5 text-secondary" />Podcasts</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {state.recommendations.podcastRecommendations.map((item, index) => <li key={`podcast-${index}`}>{item}</li>)}
                  </ul>
                </div>
              )}
              {state.recommendations.radioStationRecommendations && state.recommendations.radioStationRecommendations.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center"><Radio className="mr-2 h-5 w-5 text-secondary" />Radiosender</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {state.recommendations.radioStationRecommendations.map((item, index) => <li key={`radio-${index}`}>{item}</li>)}
                  </ul>
                </div>
              )}
              {(state.recommendations.musicRecommendations?.length === 0 &&
                state.recommendations.podcastRecommendations?.length === 0 &&
                state.recommendations.radioStationRecommendations?.length === 0) && (
                  <p className="text-muted-foreground">Wir konnten keine spezifischen Empfehlungen basierend auf deinen Eingaben finden. Versuche es mit anderen Angaben!</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
