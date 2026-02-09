import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroRicôrtes",
  description: "Soluções agrícolas",
  // Adicionando o favicon conforme solicitado
  icons: {
    icon: "/images/favicon.png",
    // Caso tenha outros formatos, você pode adicionar aqui também, por exemplo:
    // apple: "/images/apple-icon.png",
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
