import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ripple AI",
  description: `AI chatbot with no sign up required,
  integrated with in built news section and file sharing`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
