// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-inquire-js": () => import("../src/pages/inquire.js" /* webpackChunkName: "component---src-pages-inquire-js" */),
  "component---src-pages-portfolio-js": () => import("../src/pages/portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */),
  "component---src-pages-services-js": () => import("../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */)
}

