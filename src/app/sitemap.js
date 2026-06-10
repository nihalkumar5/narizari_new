export default function sitemap() {
  const baseUrl = "https://narizari.com";

  // List of standard pages
  const pages = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/industries",
    "/growth-framework",
    "/contact",
    "/join",
    "/careers",
    "/demo"
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
