import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Иванов Никита Станиславович — SRE / DevOps Инженер",
  description:
    "Персональный сайт-визитка Иванова Никиты Станиславовича. SRE/DevOps-инженер с 5+ лет опыта.",
  keywords: [
    "SRE",
    "DevOps",
    "Иванов Никита",
    "системный администратор",
    "резюме",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
