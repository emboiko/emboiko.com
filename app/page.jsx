import TableOfContents from "../components/TableOfContents"
import {
  NAV_ITEMS,
  INTRO_PARAGRAPHS,
  BALLAST_PROJECT,
  OTHER_PROJECTS,
  HOW_I_BUILD_SOFTWARE,
} from "../constants"

const renderParagraphs = (paragraphs, keyPrefix) => {
  return paragraphs.map((paragraph, index) => {
    return <p key={`${keyPrefix}-${index}`}>{paragraph}</p>
  })
}

const renderProjectLinks = (project) => {
  const links = []

  if (project.githubUrls) {
    project.githubUrls.forEach((url, index) => {
      let linkLabel = "GitHub"
      if (url.label) {
        linkLabel = `GitHub (${url.label})`
      }
      links.push({ href: url.url, label: linkLabel })
    })
  }

  if (project.liveUrls) {
    project.liveUrls.forEach((url, index) => {
      let linkLabel = url.url
      if (url.label) {
        linkLabel = `Live site (${url.label})`
      }
      links.push({ href: url.url, label: linkLabel })
    })
  }

  if (links.length === 0) {
    return null
  }

  return (
    <div className="project-links">
      {links.map((link, index) => {
        return (
          <a
            key={`${project.title}-${index}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        )
      })}
    </div>
  )
}

const renderProjectDescriptions = (project) => {
  if (!project.mainDescriptions || project.mainDescriptions.length === 0) {
    return null
  }

  return (
    <div className="project-body">
      {project.mainDescriptions.map((description, index) => {
        return <p key={`${project.title}-detail-${index}`}>{description}</p>
      })}
    </div>
  )
}

const renderInstallCommands = (project) => {
  if (!project.installCommands || project.installCommands.length === 0) {
    return null
  }

  return (
    <div className="project-installs">
      <div className="muted">Install:</div>
      <div className="install-list">
        {project.installCommands.map((command, index) => {
          return (
            <div key={`${project.title}-install-${index}`} className="install-item">
              <code>{command}</code>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const renderPersonalNote = (project) => {
  if (!project.personalNote) {
    return null
  }

  return <p className="project-note">{project.personalNote}</p>
}

export default function HomePage() {
  return (
    <div className="page">
      <div className="toc-shell">
        <TableOfContents items={NAV_ITEMS} />
      </div>
      <main>
        <section id="intro" className="section section--intro section--text">
          <h2 className="section-title intro-title">Intro</h2>
          <div className="plaintext-section">
            {renderParagraphs(INTRO_PARAGRAPHS, "intro")}
          </div>
        </section>

        <section id="ballast" className="section section--ballast">
          <div className="ballast-header">
            <p className="muted">Flagship project</p>
            <span className="status-pill">In active development</span>
          </div>
          <h2 className="section-title">{BALLAST_PROJECT.title}</h2>
          <p className="muted">{BALLAST_PROJECT.description}</p>
          {renderProjectLinks(BALLAST_PROJECT)}
          {renderProjectDescriptions(BALLAST_PROJECT)}
          {renderPersonalNote(BALLAST_PROJECT)}
        </section>

        <section id="other-projects" className="section">
          <h2 className="section-title">Other Projects</h2>
          <div className="project-list">
            {OTHER_PROJECTS.map((project) => {
              return (
                <article key={project.title} className="project-card">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {renderProjectLinks(project)}
                  </div>
                  <p className="muted">{project.description}</p>
                  {renderProjectDescriptions(project)}
                  {renderInstallCommands(project)}
                  {renderPersonalNote(project)}
                </article>
              )
            })}
          </div>
        </section>

        <section
          id="how-i-build-software"
          className="section section--text section--closing"
        >
          <h2 className="section-title">How I Build Software</h2>
          <div className="plaintext-section">
            {renderParagraphs(HOW_I_BUILD_SOFTWARE, "how-i-build")}
          </div>
        </section>
        <div className="page-footer">
          <p>
            If this aligns with how your team builds software, I’m reachable at{" "}
            <a href="mailto:ed@emboiko.com">ed@emboiko.com</a>.
          </p>
        </div>
      </main>
    </div>
  )
}
