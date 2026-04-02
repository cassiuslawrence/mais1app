export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Termos de Uso
        </h1>

        <p className="mb-8 text-gray-600">Data de vigência: 29/03/2026</p>

        <div className="space-y-6 text-gray-700 leading-8">
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do site da
            Mais1App e dos aplicativos publicados sob esta marca. Ao utilizar o
            site ou qualquer aplicativo da Mais1App, você concorda com estes
            termos.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              1. Sobre a Mais1App
            </h2>
            <p>
              A Mais1App reúne aplicativos independentes que podem variar em
              finalidade, recursos e modelo de funcionamento. Alguns apps podem
              ser extremamente simples, enquanto outros podem incluir conta,
              compras, assinaturas, armazenamento remoto ou integrações com
              serviços de terceiros.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              2. Uso permitido
            </h2>
            <p>
              Você concorda em utilizar o site e os aplicativos apenas para fins
              legais, de acordo com estes termos e com as regras aplicáveis da
              plataforma em que o app for distribuído.
            </p>
            <p>Não é permitido, por exemplo:</p>
            <ul className="list-disc pl-6">
              <li>usar os serviços para fins ilícitos ou fraudulentos;</li>
              <li>tentar contornar restrições técnicas ou de acesso;</li>
              <li>interferir no funcionamento do site ou dos aplicativos;</li>
              <li>copiar, distribuir ou explorar o conteúdo de forma indevida;</li>
              <li>utilizar os apps de modo que cause abuso ou prejuízo ao serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              3. Disponibilidade e alterações
            </h2>
            <p>
              A Mais1App pode modificar, suspender, atualizar ou descontinuar o
              site, funcionalidades ou aplicativos a qualquer momento, com ou
              sem aviso prévio, especialmente por razões técnicas, comerciais,
              legais ou operacionais.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              4. Contas de utilizador
            </h2>
            <p>
              Alguns aplicativos podem funcionar sem conta. Outros podem exigir
              criação de conta para acesso a certas funcionalidades. Quando
              houver conta, você é responsável por manter a confidencialidade
              das credenciais e por atividades realizadas com esse acesso.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              5. Compras, assinaturas e cobranças
            </h2>
            <p>
              Quando um aplicativo oferecer recursos pagos, compras únicas ou
              assinaturas, o processamento poderá ser realizado pela App Store,
              Google Play ou outro provedor aplicável. Nesses casos, condições
              como cobrança, renovação, cancelamento e reembolso podem depender
              também das regras da plataforma usada na compra.
            </p>
            <p>
              A Mais1App não controla integralmente os processos de pagamento
              das lojas e não substitui as políticas da Apple, Google ou do
              provedor responsável pela transação.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              6. Propriedade intelectual
            </h2>
            <p>
              Salvo indicação em contrário, o site, os aplicativos, a marca
              Mais1App, elementos visuais, textos, identidade e demais conteúdos
              relacionados são protegidos por direitos aplicáveis e não podem
              ser reproduzidos, redistribuídos ou explorados sem autorização.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              7. Serviços de terceiros
            </h2>
            <p>
              O site ou os aplicativos podem depender de serviços de terceiros,
              como hospedagem, autenticação, analytics, pagamentos, notificações
              ou recursos externos. A disponibilidade e o funcionamento dessas
              integrações podem variar e também estão sujeitos aos termos dos
              respectivos fornecedores.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              8. Limitação de responsabilidade
            </h2>
            <p>
              O site e os aplicativos são disponibilizados conforme disponíveis,
              dentro de limites técnicos e operacionais razoáveis. A Mais1App
              não garante funcionamento ininterrupto, ausência total de erros ou
              compatibilidade com todos os dispositivos, sistemas ou contextos
              de uso.
            </p>
            <p>
              Na máxima medida permitida pela legislação aplicável, a Mais1App
              não será responsável por perdas indiretas, incidentais, especiais
              ou consequenciais decorrentes do uso ou da impossibilidade de uso
              do site ou dos aplicativos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              9. Privacidade
            </h2>
            <p>
              O tratamento de informações relacionadas ao uso do site e dos
              aplicativos está descrito na{" "}
              <a href="/privacy" className="underline hover:text-gray-900">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              10. Alterações destes termos
            </h2>
            <p>
              Estes Termos de Uso podem ser atualizados periodicamente para
              refletir mudanças no site, nos aplicativos, em exigências legais
              ou em práticas operacionais. A versão mais recente estará sempre
              disponível nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              11. Contato
            </h2>
            <p>
              Se tiver dúvidas sobre estes Termos de Uso, utilize a página de{" "}
              <a href="/contact" className="underline hover:text-gray-900">
                contato
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}