import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export default function RootLayout({
  children,
  fullWidth = false
}: Readonly<{
  children: React.ReactNode;
  fullWidth?: boolean;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-geist-sans: ${geistSans.variable};
            --font-geist-mono: ${geistMono.variable};
          }
        `}</style>
      </head>
      <body className="antialiased">
        <Navbar />
        <main className={fullWidth ? '' : 'container mx-auto'}>{children}</main>
      </body>
    </html>
  );
}
