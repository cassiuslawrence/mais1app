export default function HelpCenterPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Central de Ajuda</h1>
          <p className="mt-4 text-gray-600">
            Encontre respostas para dúvidas comuns sobre aplicativos, compras,
            assinaturas e suporte.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como entro em contato sobre um app?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p>
                Se a sua dúvida estiver relacionada a um app específico, use a
                página de contato e informe o nome do aplicativo para facilitar
                o atendimento.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como recebo suporte?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p>
                O suporte pode ser solicitado pela página de contato. Sempre que
                possível, inclua o nome do app, o dispositivo utilizado e uma
                descrição breve do problema.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como funciona o cancelamento de assinatura?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                Se um app oferecer assinatura, o cancelamento normalmente é
                feito pela loja em que a compra foi realizada, e não diretamente
                no site.
              </p>
              <div>
                <p className="font-semibold text-gray-900">iPhone (Apple)</p>
                <p>
                  Vá em Ajustes &gt; seu nome &gt; Assinaturas, selecione o app
                  e faça o cancelamento.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Android (Google Play)
                </p>
                <p>
                  Abra a Play Store &gt; Perfil &gt; Pagamentos e assinaturas
                  &gt; Assinaturas, selecione o app e faça o cancelamento.
                </p>
              </div>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como funciona o reembolso?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                Quando a compra é feita pela App Store ou Google Play, pedidos
                de reembolso normalmente precisam ser tratados pela própria loja.
              </p>
              <div>
                <p className="font-semibold text-gray-900">iPhone (Apple)</p>
                <p>
                  Os pedidos costumam ser feitos pela plataforma de suporte da
                  Apple associada à sua compra.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Android (Google Play)
                </p>
                <p>
                  Os pedidos costumam ser feitos pela área de pedidos e compras
                  da sua conta Google Play.
                </p>
              </div>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como restaurar compras?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                Se um app oferecer compras ou assinatura, a restauração
                normalmente depende da conta usada na loja do dispositivo.
              </p>
              <p>
                Verifique se você está usando a mesma conta Apple ID ou Google
                da compra original e procure por uma opção como{" "}
                <span className="font-medium text-gray-900">
                  Restaurar compras
                </span>{" "}
                dentro do app, quando essa funcionalidade existir.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Como excluir minha conta?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                Se um app oferecer conta de utilizador, a exclusão pode estar
                disponível dentro do próprio aplicativo ou por solicitação via
                contato.
              </p>
              <p>
                Excluir a conta não cancela automaticamente uma eventual
                assinatura ativa. Se houver assinatura, ela deve ser cancelada
                separadamente pela loja.
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>Onde encontro a política de privacidade e os termos?</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                Você pode acessar essas informações pelas páginas de{" "}
                <a href="/privacy" className="underline hover:text-gray-900">
                  Privacidade
                </a>{" "}
                e{" "}
                <a href="/terms" className="underline hover:text-gray-900">
                  Termos
                </a>
                .
              </p>
            </div>
          </details>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">Ainda precisa de ajuda?</p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Contato
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}