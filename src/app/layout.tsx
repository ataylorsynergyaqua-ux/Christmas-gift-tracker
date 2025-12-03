import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerProvider } from "./Components/ServiceWorkerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christmas Gift Tracker",
  description: "Track Christmas gifts, budgets, spending, and hiding spots.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServiceWorkerProvider />
        {children}
      </body>
    </html>
  );
}
