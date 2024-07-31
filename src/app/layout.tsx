import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/Header/NavBar/NavBar';
import { SessionProvider } from 'next-auth/react';
export const metadata: Metadata = {
  title: 'Ease Hire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
