import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dos locos y un colao | Podcast",
  description: "Tres locos del entertainment hablando claro sobre eventos, artistas y el backstage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}