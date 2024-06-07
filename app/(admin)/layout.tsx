import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import Center from "@/components/Center";
import Wrapper from "@/components/Wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
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
            <Wrapper>{children}</Wrapper>
          </Center>
        </ThemeProvider>
      </body>
    </html>
  );
}
