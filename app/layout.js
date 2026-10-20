import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { media } from "@/lib/media";
import "./globals.css";

const description =
  "Velocity Motors is a fictional Lagos house for curated luxury and performance vehicles. This demonstration presents an edited catalogue, not live stock.";

export const metadata = {
  title: {
    default: "Velocity Motors — Engineered to move you",
    template: "%s — Velocity Motors",
  },
  description,
  openGraph: {
    title: "Velocity Motors — Engineered to move you",
    description: "Exceptional machines. Carefully selected. A demonstration experience for a luxury automotive house.",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: media.hero.src,
        alt: media.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Motors — Engineered to move you",
    description: "Exceptional machines. Carefully selected.",
    images: [media.hero.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-obsidian font-sans text-ivory">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-ivory focus:px-4 focus:py-3 focus:text-obsidian"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
