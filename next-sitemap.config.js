let exclude = ['/gaeste', '/gaeste/*', '/making-of', '/photos/20*', '/photos/all']

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://havel-alm.de',
  changefreq: 'daily',
  exclude: exclude.concat(['/photos/*']),
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
