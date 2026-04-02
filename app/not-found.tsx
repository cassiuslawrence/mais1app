export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Página não encontrada
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          O conteúdo que você tentou acessar não existe ou não está disponível.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            Voltar para o início
          </a>
        </div>
      </section>
    </main>
  );
}