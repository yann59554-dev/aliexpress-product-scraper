import scrape from 'aliexpress-product-scraper';
import fs from 'fs/promises';

const productId = process.env.PRODUCT_ID || '1005007429636284';

const data = await scrape(productId, {
  reviewsCount: 20,
  timeout: 120000,
  puppeteerOptions: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

await fs.writeFile('product.json', JSON.stringify(data, null, 2));
console.log('✅ Scraping terminé');
