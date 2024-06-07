import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import Center from "@/components/Center";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-my-white dark:bg-my-black scroll-smooth",
          GeistSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Center>
            <NextTopLoader showSpinner={false} color="#ffc300" />
            <Wrapper>
              <Navbar />
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </Wrapper>
          </Center>
        </ThemeProvider>
      </body>
    </html>
  );
}
