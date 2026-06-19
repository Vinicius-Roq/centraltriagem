import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const setorValues = ["RH", "financeiro", "comercial", "suporte-tecnico", "administrativo"] as const;
const prioridadeValues = ["baixa", "media", "alta"] as const;

const demandSchema = z.object({
  nome: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  setor: z.enum(setorValues),
  prioridade: z.enum(prioridadeValues),
  descricao: z.string().trim().min(10).max(2000),
});

export const submitDemand = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => demandSchema.parse(data))
  .handler(async ({ data }) => {
    const { MAKE_WEBHOOK_URL } = await import("./demand.server");

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Falha ao encaminhar a solicitação.");
    }

    return { success: true as const };
  });
