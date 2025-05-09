import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { text } = await request.json();

    // Validate the input
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required and must be a string" },
        { status: 400 }
      );
    }

    // Set up the prompt for explanation with magical theme
    const prompt = `
    You are a magical genie who explains complex ideas to children.
    Please explain the following complex text in a way that a 5-year-old would understand.
    Keep your response under 150 words, avoid any jargon, and use magical analogies or stories if helpful.
    Make the explanation fun, simple, and engaging for a young child.
    
    Text to explain: "${text}"
    `;

    // Get the model
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
      generationConfig: {
        temperature: parseFloat(process.env.GEMINI_TEMPERATURE || "0.6"),
        maxOutputTokens: parseInt(process.env.GEMINI_MAX_OUTPUT_TOKENS || "250"),
      },
    });

    // Generate the simplified explanation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    // Return the explanation
    return NextResponse.json({ explanation });
  } catch (error) {
    // Handle any errors
    console.error("Error processing explanation request:", error);
    
    return NextResponse.json(
      { error: "Our magical genie is tired. Please try again later!" },
      { status: 500 }
    );
  }
} 