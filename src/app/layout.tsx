import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'llmprice.app',
  description: 'A simple price calculator for llm models',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
