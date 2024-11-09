export default async function sitemap() {
  const routes = [''].map((route) => ({
    url: `https://localhost:8080/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
