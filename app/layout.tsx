import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import BootSequence from '@/components/BootSequence';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAISON CRIMSON | Official Store',
  description: 'A museum-grade cinematic e-commerce experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[var(--color-bg)] text-[var(--color-fg)] antialiased overflow-x-hidden" suppressHydrationWarning>
        <BootSequence />
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
