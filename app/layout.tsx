import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Simple Architect",
  description: "Simple laws for sustainable architectures.",
  keywords: ["architecture", "software design", "best practices", "simplicity"],
  authors: [{ name: "The Simple Architect" }],
  openGraph: {
    title: "The Simple Architect",
    description: "Simple laws for sustainable architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
