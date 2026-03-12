import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { TemplateProvider } from "@/components/template-provider"
import { TemplateSwitcher } from "@/components/template-switcher"

export const metadata: Metadata = {
  title: "Template Playground",
  description: "Explore ready-to-ship Next.js marketing templates with multiple versions and verticals.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <TemplateProvider>
            <Header />
            {children}
            <TemplateSwitcher />
            <Footer />
          </TemplateProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
