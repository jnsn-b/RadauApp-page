'use server';

/**
 * @fileOverview Personalized content recommendations for the RadauApp.
 *
 * - getPersonalizedRecommendations - A function that retrieves personalized recommendations for music, podcasts, and radio stations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  age: z.number().describe('The age of the child.'),
  listeningHistory: z.array(z.string()).describe('The listening history of the child (list of song titles, podcast names, etc.).'),
  preferences: z.string().optional().describe('Optional preferences specified by the parent or child.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  musicRecommendations: z.array(z.string()).describe('Recommended music titles.'),
  podcastRecommendations: z.array(z.string()).describe('Recommended podcast names.'),
  radioStationRecommendations: z.array(z.string()).describe('Recommended radio station names.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const personalizedRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a content recommendation expert for children's media. Based on the child's age, listening history, and any parental preferences, provide personalized recommendations for music, podcasts, and radio stations.

Age: {{{age}}}
Listening History: {{#each listeningHistory}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Preferences: {{{preferences}}}

Provide recommendations that are age-appropriate and align with the child's interests.  Return the results as a JSON object.
`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedRecommendationsPrompt(input);
    return output!;
  }
);
