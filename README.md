# Magic Genie Explainer

A beautiful web application that explains complex text in simple, child-friendly language.

## 🧞‍♂️ About

Magic Genie Explainer is a Next.js application that uses Google Gemini to transform complex sentences or paragraphs into simple explanations a 5-year-old could understand. Simply paste your text, click the "Magic Button," and watch the magic happen!

## ✨ Features

- Simple, intuitive interface built with Next.js and shadcn/ui
- Beautiful UI with Aladdin Genie-inspired color scheme
- Mobile-friendly and responsive design
- Google Gemini API integration for intelligent simplification
- Child-friendly explanations that avoid jargon
- Concise responses under 150 words
- Helpful analogies when appropriate

## 🚀 Tech Stack

- Next.js (app router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Google Gemini API
- Responsive design

## 🛠️ Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file based on the `.env.local.example` file and add your Google API key
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Google Gemini API Key
GOOGLE_API_KEY=your_google_api_key_here

# Model Configuration
GEMINI_MODEL=gemini-2.0-flash

# Optional: Temperature (0.0 to 1.0)
GEMINI_TEMPERATURE=0.6

# Optional: Maximum tokens in response
GEMINI_MAX_OUTPUT_TOKENS=250
```

## 📝 License

MIT
