import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Awari Hospital – Leaders in Precision Medicine & Compassionate Care',
  description: 'Discover Awari Hospital, a trusted leader in precision medicine since 2015, combining innovative technology, expert doctors, and compassionate care for every patient.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

