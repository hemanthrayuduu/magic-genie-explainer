import { ExplainerForm } from "@/components/ExplainerForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Magic Genie Explainer
      </h1>
      <div className="mb-8 text-center max-w-2xl">
        <p className="text-lg">
          Paste a complex sentence or paragraph below and our magical genie will
          explain it in a way that a 5-year-old would understand!
        </p>
      </div>
      <ExplainerForm />
    </main>
  );
}
