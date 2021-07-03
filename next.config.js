module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about-us": { page: "/about-us" },
      "/contact-us": { page: "/contact-us" },
      "/kit": { page: "/kit" },
      "/cart": { page: "/cart" },
      "/login": { page: "/login" },
      "/signup": { page: "/signup" },
      "/orders": { page: "/orders" },
      "/profile": { page: "/profile" },
      //   "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      //   "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      //   "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
    };
  },
  trailingSlash: true,
};
