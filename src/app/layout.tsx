import type { Metadata } from 'next';
import './globals.css';
import Providers from './Provider';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Header/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'EaseHire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
