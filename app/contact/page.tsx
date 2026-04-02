"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [appName, setAppName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          appName,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setFeedback("Mensagem enviada com sucesso.");

      setName("");
      setEmail("");
      setAppName("");
      setMessage("");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem.";

      setStatus("error");
      setFeedback(message);
    }
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Contato</h1>
          <p className="mt-4 text-gray-600">
            Se tiver dúvidas sobre um aplicativo, suporte técnico, compras,
            conta ou qualquer outro assunto, envie sua mensagem.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8">
          <div className="mb-8 space-y-4 text-gray-700">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                Antes de enviar sua mensagem
              </h2>
              <p>
                Se a sua dúvida for sobre um app específico, informe o nome do
                aplicativo, o dispositivo utilizado e uma breve descrição do
                problema. Isso ajuda a tornar o atendimento mais rápido e mais
                claro.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="appName"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                App
              </label>
              <input
                id="appName"
                type="text"
                value={appName}
                onChange={(event) => setAppName(event.target.value)}
                placeholder="Ex.: Jogo da Velha Clássico"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={6}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-gray-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </button>

              {feedback ? (
                <p
                  className={
                    status === "success"
                      ? "text-sm text-green-600"
                      : "text-sm text-red-600"
                  }
                >
                  {feedback}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}