import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Homework Checker",
  description: "AI-assisted homework checking for English teachers",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <div className="min-h-dvh w-full bg-[var(--color-bg)]">
          <div className="mx-auto min-h-dvh w-full max-w-md bg-[var(--color-bg)] shadow-[0_0_40px_rgba(16,24,40,0.06)] md:max-w-2xl md:py-4">
            <div className="min-h-dvh w-full overflow-hidden bg-[var(--color-bg)] md:min-h-0 md:rounded-[32px] md:border md:border-[var(--color-border)]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
