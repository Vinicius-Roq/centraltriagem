import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Building2,
  Flag,
  FileText,
} from "lucide-react";

const formSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  setor: z.string().min(1, "Selecione um setor"),
  prioridade: z.string().min(1, "Selecione uma prioridade"),
  descricao: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(2000, "Descrição deve ter no máximo 2000 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const setores = [
  { value: "RH", label: "RH" },
  { value: "financeiro", label: "Financeiro" },
  { value: "comercial", label: "Comercial" },
  { value: "suporte-tecnico", label: "Suporte Técnico" },
  { value: "administrativo", label: "Administrativo" },
];

const prioridades = [
  { value: "baixa", label: "Baixa" },
  { value: "media", label: "Média" },
  { value: "alta", label: "Alta" },
];

const inputClasses =
  "flex h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground transition-colors duration-150 placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/15";

const textareaClasses =
  "flex min-h-[6rem] w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground transition-colors duration-150 resize-y placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/15";

const btnClasses =
  "inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed w-full";

export default function DemandForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    try {
      const response = await fetch(
        "https://hook.us2.make.com/pmm8o211erg28ga3ynnh5xc6rq3fw4l8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: data.nome,
            email: data.email,
            setor: data.setor,
            prioridade: data.prioridade,
            descricao: data.descricao,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-10 w-10 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Solicitação Enviada!</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Sua demanda foi registrada com sucesso. Nossa equipe analisará e retornará em breve.
        </p>
        <button onClick={() => setStatus("idle")} className={btnClasses}>
          Enviar Nova Solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="nome" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <User className="h-4 w-4 text-primary" />
            Nome
          </label>
          <input id="nome" type="text" placeholder="Seu nome completo" className={inputClasses} {...register("nome")} />
          {errors.nome && (
            <p className="flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.nome.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Mail className="h-4 w-4 text-primary" />
            E-mail
          </label>
          <input id="email" type="email" placeholder="seu@email.com" className={inputClasses} {...register("email")} />
          {errors.email && (
            <p className="flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="setor" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Building2 className="h-4 w-4 text-primary" />
            Setor
          </label>
          <select id="setor" className={`${inputClasses} appearance-none cursor-pointer`} {...register("setor")}>
            <option value="">Selecione um setor</option>
            {setores.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {errors.setor && (
            <p className="flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.setor.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="prioridade" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Flag className="h-4 w-4 text-primary" />
            Prioridade
          </label>
          <select id="prioridade" className={`${inputClasses} appearance-none cursor-pointer`} {...register("prioridade")}>
            <option value="">Selecione a prioridade</option>
            {prioridades.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          {errors.prioridade && (
            <p className="flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.prioridade.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="descricao" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <FileText className="h-4 w-4 text-primary" />
          Descrição da Demanda
        </label>
        <textarea
          id="descricao"
          placeholder="Descreva sua demanda com o máximo de detalhes possível..."
          rows={5}
          className={textareaClasses}
          {...register("descricao")}
        />
        {errors.descricao && (
          <p className="flex items-center gap-1.5 text-xs text-destructive">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.descricao.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>Erro ao enviar a solicitação. Tente novamente mais tarde.</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className={btnClasses}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar Solicitação
          </>
        )}
      </button>
    </form>
  );
}
