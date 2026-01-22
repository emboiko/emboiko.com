const baseUrl = "https://emboiko.com"

const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

export default robots
