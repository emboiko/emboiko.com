"use client"

import { useEffect, useState } from "react"

const getLabelText = (theme) => {
  let labelText = "Light"
  if (theme === "dark") {
    labelText = "Dark"
  }
  return labelText
}

const ThemeToggle = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    if (currentTheme) {
      setTheme(currentTheme)
    }
    setHasMounted(true)
  }, [])

  const handleToggle = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    let nextTheme = "light"
    if (currentTheme === "light") {
      nextTheme = "dark"
    }

    document.documentElement.setAttribute("data-theme", nextTheme)
    localStorage.setItem("theme", nextTheme)
    setTheme(nextTheme)
  }

  let labelText = "Theme"
  if (hasMounted) {
    labelText = `Theme: ${getLabelText(theme)}`
  }

  return (
    <button className="theme-toggle" type="button" onClick={handleToggle}>
      {labelText}
    </button>
  )
}

export default ThemeToggle
