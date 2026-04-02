import Image from "next/image";
import { apps } from "@/lib/apps";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex justify-center gap-6 flex-wrap">
          {apps.map((app) => {
            const icon = (
              <Image
                src={app.icon}
                alt={app.name}
                width={140}
                height={140}
                className="rounded-2xl shadow-sm"
              />
            );

            return app.href ? (
              <a
                key={app.slug}
                href={app.href}
                className="transition-transform duration-300 hover:scale-110 hover:z-10"
              >
                {icon}
              </a>
            ) : (
              <div key={app.slug}>{icon}</div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Entre em contato
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tem alguma dúvida ou quer falar sobre um dos apps?
          </p>

          <div className="mt-8">
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
