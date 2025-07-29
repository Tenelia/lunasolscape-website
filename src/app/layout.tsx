import { ThemeProvider } from '@/components/ThemeProvider';
import { CartProvider } from '@/contexts/CartContext';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LunaSolscape - Celestial Jewelry & Accessories',
  description:
    'Premium celestial-inspired jewelry and accessories with unique color gradient sorting and immersive shopping experience.',
  keywords: [
    'jewelry',
    'accessories',
    'celestial',
    'moon',
    'sun',
    'luxury',
    'e-commerce',
  ],
  authors: [{ name: 'LunaSolscape' }],
  creator: 'LunaSolscape',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lunasolscape.com',
    title: 'LunaSolscape - Celestial Jewelry & Accessories',
    description:
      'Premium celestial-inspired jewelry and accessories with unique color gradient sorting and immersive shopping experience.',
    siteName: 'LunaSolscape',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LunaSolscape - Celestial Jewelry & Accessories',
    description:
      'Premium celestial-inspired jewelry and accessories with unique color gradient sorting and immersive shopping experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
