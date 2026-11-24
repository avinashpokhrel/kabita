import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabita's World of Her Own",
  description:
    "Meet Kabita: her little corner of the internet, full of pink, nature, and Minecraft worlds.",
  icons: {
    icon: "/alex.png",
    apple: "/alex.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
