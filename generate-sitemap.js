const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/home.html', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://dofuspouriesnoobs.com/' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('Sitemap created successfully.'))
  .catch(err => console.error('Error creating sitemap:', err));
