import { createFileRoute } from "@tanstack/react-router";
import DemandForm from "@/components/DemandForm";
import heroIllustration from "@/assets/hero-illustration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Triagem de Demandas" },
      { name: "description", content: "Registre e acompanhe suas demandas corporativas de forma rápida e organizada." },
      { property: "og:title", content: "Central Triagem de Demandas" },
      { property: "og:description", content: "Registre e acompanhe suas demandas corporativas de forma rápida e organizada." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Central Triagem
            </span>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-12 pb-10 sm:pt-20 sm:pb-14">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Sistema de Gestão de Demandas
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Central Triagem de{" "}
                  <span className="text-primary">Demandas</span>
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Registre suas demandas de forma rápida e organizada. Nossa equipe
                  analisa, prioriza e encaminha para o setor responsável.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    RH
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-info" />
                    Financeiro
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-warning" />
                    Comercial
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    <span className="h-2 w-2 rounded-full bg-chart-3" />
                    Suporte
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:justify-end">
                <img
                  src={heroIllustration}
                  alt="Ilustração de gestão de demandas"
                  className="h-auto w-full max-w-md rounded-2xl object-cover"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="flex-1 px-6 pb-16 pt-2">
          <div className="mx-auto max-w-2xl">
            <div className="card-surface p-6 sm:p-10">
              <div className="mb-8 space-y-2 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Nova Solicitação
                </h2>
                <p className="text-sm text-muted-foreground">
                  Preencha todos os campos abaixo para registrar sua demanda
                </p>
              </div>
              <DemandForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-6">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          Central Triagem de Demandas — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
