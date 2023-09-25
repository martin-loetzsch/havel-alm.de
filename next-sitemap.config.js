let exclude = ['/gaeste', '/making-of']

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://havel-alm.de',
  changefreq: 'daily',
  exclude: exclude,
  priority: 0.7,
  sitemapSize: 20000,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [,
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: exclude,
      },
    ],
  },
}
