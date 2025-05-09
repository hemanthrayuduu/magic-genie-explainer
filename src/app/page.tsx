import { ExplainerForm } from "@/components/ExplainerForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center glow-text title-animation">
        Magic Genie Explainer
      </h1>
      <div className="mb-8 text-center max-w-2xl appear appear-1">
        <p className="text-xl text-white">
          Paste a complex sentence or paragraph below and our magical genie will
          explain it in a way that a 5-year-old would understand!
        </p>
      </div>
      <div className="appear appear-2 w-full">
        <ExplainerForm />
      </div>
    </main>
  );
}
