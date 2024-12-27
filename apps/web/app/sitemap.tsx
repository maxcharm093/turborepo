const sitemap = async () => {
  const routes = [''].map((route) => ({
    url: `https://localhost:8080/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
};

export default sitemap;
