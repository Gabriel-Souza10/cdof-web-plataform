import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ciência do Futebol",
    template: "%s | Ciência do Futebol",
  },
  description:
    "Preparação física, avaliações e treinos individualizados para alto rendimento.",
  applicationName: "Ciência do Futebol",
  metadataBase: new URL("https://cdof-web-plataform.vercel.app"),
  openGraph: {
    title: "Ciência do Futebol",
    description:
      "Preparação física, avaliações e treinos individualizados para alto rendimento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
