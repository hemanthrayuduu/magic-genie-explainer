"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form schema using zod
const formSchema = z.object({
  text: z.string().min(1, "Please enter some text to explain"),
});

export function ExplainerForm() {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: values.text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get explanation");
      }

      setExplanation(data.explanation);
    } catch (err) {
      console.error("Error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold glow-text title-animation appear appear-1">
          Explain Like I'm 5
        </h2>
      </div>
      
      <Card className="mb-8 shadow-lg card-glow input-card appear appear-2">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Magic Genie Explainer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Enter complex text to simplify:
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your complex paragraph here..."
                        className="min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative">
                <div className="sparkle absolute -top-10 -right-10"></div>
                <div className="sparkle absolute -bottom-10 -left-10"></div>
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-bold rounded-xl magic-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Casting Spell..." : "Magic Button"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-8 error-card shadow-md appear appear-3">
          <CardContent className="pt-6">
            <p className="error-text">{error}</p>
          </CardContent>
        </Card>
      )}

      {explanation && (
        <Card className="shadow-lg result-card appear appear-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-4xl genie-emoji">🧞‍♂️</span>
              <span>Simple Explanation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{explanation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 