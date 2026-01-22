import "./globals.css"
import { Inter, Merriweather, JetBrains_Mono } from "next/font/google"
import { THEME } from "../constants"

const primaryFont = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
})

const secondaryFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-secondary",
})

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const buildThemeBlock = (selector, themeValues) => {
  const lines = Object.entries(themeValues).map(([key, value]) => {
    return `  --${key}: ${value};`
  })

  return `${selector} {\n${lines.join("\n")}\n}\n`
}

const buildThemeCss = (theme) => {
  let cssText = ""

  Object.entries(theme).forEach(([name, values]) => {
    let selector = ":root"
    if (name !== "light") {
      selector = `[data-theme="${name}"]`
    }

    cssText = `${cssText}${buildThemeBlock(selector, values)}`
  })

  return cssText
}

const themeCss = buildThemeCss(THEME)

const themeScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem("theme")
    var theme = storedTheme
    if (!theme) {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        theme = "dark"
      } else {
        theme = "light"
      }
    }
    document.documentElement.setAttribute("data-theme", theme)
  } catch (error) {
    document.documentElement.setAttribute("data-theme", "light")
  }
})()
`

export const metadata = {
  title: "Emboiko",
  description: "Portfolio and project overview.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} ${monoFont.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
