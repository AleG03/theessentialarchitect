import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Simple Architect",
  description: "Simple laws for sustainable architectures.",
  keywords: ["architecture", "software design", "best practices", "simplicity", "laws", "principles"],
  authors: [{ name: "The Simple Architect" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
