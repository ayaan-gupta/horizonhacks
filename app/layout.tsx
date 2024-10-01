import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HorizonHacks",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex flex-col lg:flex-row items-center gap-1 text-lg my-3"
                href="mailto:stemfortomorrowofficial@gmail.com"
              >
                <div className="flex">
                  <span className="text-default-600">Interested in Sponsoring Us? </span>
                  <p className="text-default-600"> Email us at </p>
                </div>
                <p className="text-primary">stemfortomorrowofficial@gmail.com</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
