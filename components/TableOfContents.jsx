"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const getLinkClassName = (activeId, itemId) => {
  let className = "toc-link"
  if (activeId === itemId) {
    className = "toc-link toc-link--active"
  }
  return className
}

const TableOfContents = ({ items }) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const sections = items
      .map((item) => {
        return document.getElementById(item.id)
      })
      .filter(Boolean)

    if (sections.length === 0) {
      return
    }

    const TOP_OFFSET = 120
    let isTicking = false

    const getActiveSectionId = () => {
      let nextActiveId = sections[0].id
      let closestTop = -Infinity

      sections.forEach((section) => {
        const rectTop = section.getBoundingClientRect().top
        if (rectTop <= TOP_OFFSET && rectTop > closestTop) {
          closestTop = rectTop
          nextActiveId = section.id
        }
      })

      const scrollBottom = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      if (scrollBottom >= documentHeight - 4) {
        nextActiveId = sections[sections.length - 1].id
      }

      return nextActiveId
    }

    const updateActiveId = () => {
      const nextActiveId = getActiveSectionId()
      setActiveId(nextActiveId)
    }

    const handleScroll = () => {
      if (isTicking) {
        return
      }

      isTicking = true
      window.requestAnimationFrame(() => {
        updateActiveId()
        isTicking = false
      })
    }

    updateActiveId()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    const handleHashChange = () => {
      const hashId = window.location.hash.replace("#", "")
      if (hashId) {
        setActiveId(hashId)
      }
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [items])

  return (
    <aside className="toc">
      <div className="toc-profile">
        <div className="toc-name">Edward Boiko</div>
        <div className="toc-role">Software Engineer</div>
      </div>
      <div className="toc-divider" />
      <div className="toc-title">Contents</div>
      <nav className="toc-nav">
        <ul className="toc-list">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <a
                  className={getLinkClassName(activeId, item.id)}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <ThemeToggle />
    </aside>
  )
}

export default TableOfContents
