import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, appName, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Preencha nome, email e mensagem." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return Response.json(
        { error: "Configuração de email incompleta no servidor." },
        { status: 500 }
      );
    }

    const subject = appName
      ? `[Mais1App] Contato sobre: ${appName}`
      : "[Mais1App] Novo contato pelo site";

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">Novo contato pelo site Mais1App</h2>

        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>App:</strong> ${escapeHtml(appName || "Não informado")}</p>

        <div style="margin-top: 24px;">
          <p><strong>Mensagem:</strong></p>
          <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </div>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    console.log("Resend result:", result);

    if (result.error) {
      return Response.json(
        { error: result.error.message || "Falha ao enviar email." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      emailId: result.data?.id ?? null,
    });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);

    return Response.json(
      { error: "Não foi possível enviar sua mensagem agora." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}