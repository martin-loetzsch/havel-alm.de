/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://havel-alm.de',
  changefreq: 'daily',
  exclude: ['/gaeste'],
  priority: 0.7,
  sitemapSize: 20000,
  generateIndexSitemap: false,
  generateRobotsTxt: true
}
