export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Política de Privacidade
        </h1>

        <p className="mb-8 text-gray-600">Data de vigência: 29/03/2026</p>

        <div className="space-y-6 text-gray-700 leading-8">
          <p>
            A Mais1App valoriza a sua privacidade e busca tratar informações de
            forma clara, simples e responsável. Esta Política de Privacidade
            explica como informações podem ser tratadas ao utilizar o site da
            Mais1App e os aplicativos publicados sob esta marca.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              1. Informações que podem ser coletadas
            </h2>
            <p>
              A coleta de informações pode variar de acordo com o aplicativo.
              Alguns apps podem não coletar dados pessoais. Outros podem, quando
              necessário para seu funcionamento, tratar informações como dados
              técnicos do dispositivo, preferências de uso, informações
              fornecidas pelo próprio utilizador ou dados associados a compras,
              conta ou suporte.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              2. Informações do site
            </h2>
            <p>
              O site da Mais1App pode registrar informações técnicas básicas,
              como dados de navegação, tipo de dispositivo, navegador,
              localização aproximada, páginas visitadas e métricas de acesso.
              Isso pode ser feito para fins de funcionamento, segurança,
              melhoria da experiência e análise de desempenho do site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              3. Informações dos aplicativos
            </h2>
            <p>
              Cada aplicativo pode tratar informações diferentes, conforme sua
              finalidade. Aplicativos simples podem funcionar sem conta e sem
              coleta relevante de dados pessoais. Aplicativos mais avançados
              podem futuramente incluir funcionalidades como conta de
              utilizador, armazenamento em nuvem, compras, assinaturas,
              recursos com inteligência artificial ou suporte personalizado.
            </p>
            <p>
              Quando isso ocorrer, a Mais1App buscará limitar o tratamento ao
              que for necessário para o funcionamento do app e para a entrega da
              funcionalidade proposta.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              4. Como as informações podem ser usadas
            </h2>
            <p>As informações tratadas podem ser usadas para:</p>
            <ul className="list-disc pl-6">
              <li>operar e manter o site e os aplicativos;</li>
              <li>melhorar desempenho, estabilidade e experiência de uso;</li>
              <li>responder pedidos de suporte e contato;</li>
              <li>processar funcionalidades específicas do app;</li>
              <li>cumprir obrigações legais ou regulatórias;</li>
              <li>prevenir uso indevido, fraude ou abuso.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              5. Compras, assinaturas e cobranças
            </h2>
            <p>
              Quando um aplicativo oferecer compras, assinaturas ou conteúdos
              pagos, o processamento financeiro poderá ser feito pela App Store,
              Google Play ou outro provedor de pagamento aplicável. Nesses
              casos, a Mais1App normalmente não recebe nem armazena dados
              completos de cartão ou pagamento, apenas informações necessárias
              para confirmação da compra, suporte e funcionamento do serviço,
              quando disponibilizadas pela plataforma responsável.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              6. Serviços de terceiros
            </h2>
            <p>
              O site ou os aplicativos podem utilizar serviços de terceiros
              quando isso for necessário para funcionamento, hospedagem,
              análise, autenticação, processamento de compras, armazenamento,
              notificações ou outras funcionalidades. O uso desses serviços pode
              envolver tratamento de dados conforme as políticas próprias desses
              fornecedores.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              7. Retenção de dados
            </h2>
            <p>
              As informações podem ser mantidas apenas pelo tempo necessário
              para cumprir a finalidade do tratamento, atender obrigações legais,
              resolver disputas, prevenir fraude ou manter funcionalidades
              essenciais do serviço.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              8. Segurança
            </h2>
            <p>
              A Mais1App busca adotar medidas razoáveis para proteger as
              informações tratadas. Ainda assim, nenhum método de transmissão ou
              armazenamento é totalmente isento de risco, e não é possível
              garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              9. Direitos e solicitações
            </h2>
            <p>
              Se quiser esclarecer dúvidas sobre privacidade, solicitar correção
              ou exclusão de dados, ou entrar em contato sobre qualquer assunto
              relacionado a tratamento de informações, utilize a página de{" "}
              <a href="/contact" className="underline hover:text-gray-900">
                contato
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              10. Alterações nesta política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada ao longo do
              tempo para refletir mudanças no site, nos aplicativos, em
              exigências legais ou em práticas operacionais. A versão mais
              recente estará sempre disponível nesta página.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}