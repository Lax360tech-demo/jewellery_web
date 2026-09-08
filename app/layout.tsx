import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lax360 | Luxury Jewellery & Haute Joaillerie",
  description: "Discover timeless luxury jewellery by Lax360, crafted with precision, brilliance and elegance.",
  keywords: ["luxury jewellery", "fine diamonds", "18k gold", "Lax360", "haute joaillerie", "luxury e-commerce"],
  authors: [{ name: "Lax360 Fine Jewellery" }],
  openGraph: {
    title: "Lax360 | Luxury Jewellery & Haute Joaillerie",
    description: "Discover timeless luxury jewellery by Lax360, crafted with precision, brilliance and elegance.",
    type: "website",
    locale: "en_US",
    siteName: "Lax360",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('aurelia-theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans bg-champagne-light text-neutral-900 dark:bg-jewellery-black dark:text-white overflow-x-hidden antialiased selection:bg-luxury-gold/30 selection:text-white transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}