// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/src/pages/404.js")),
  "component---src-pages-careers-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/src/pages/careers.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/src/pages/portfolio.js")),
  "component---src-pages-pricing-js": preferDefault(require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/src/pages/pricing.js"))
}

exports.json = {
  "layout-index.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/404.json"),
  "careers.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/careers.json"),
  "index.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/index.json"),
  "portfolio.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/portfolio.json"),
  "pricing.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/pricing.json"),
  "404-html.json": require("/Users/MaxGillespie/Documents/Work/Paisley Design Group/pdg.com/.cache/json/404-html.json")
}