import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mais1App",
  description: "Coleção de apps simples e úteis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          
          {/* HEADER */}
          <header className="border-b border-gray-200">
            <div className="mx-auto max-w-6xl px-6 py-4">
              <Link href="/">
                <Image
                  src="/images/mais1app_logo.png"
                  alt="Mais1App"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </header>

          {/* CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t border-gray-200">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col items-center gap-4">
              
              <div className="flex gap-6 flex-wrap justify-center">
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacidade
                </Link>
                <Link href="/terms" className="hover:text-gray-900">
                  Termos
                </Link>
                <Link href="/help-center" className="hover:text-gray-900">
                  Ajuda
                </Link>
                <Link href="/contact" className="hover:text-gray-900">
                  Contato
                </Link>
              </div>

              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Mais1App
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}