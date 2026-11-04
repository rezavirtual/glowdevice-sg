import fs from 'fs';

let content = fs.readFileSync('C:\\AI\\GlowDevice-SG\\src\\site-builder.js', 'utf-8');

// 1. CSS fixes for card-media-wrapper, card-media-link, and card-img
content = content.replace(
  /\.card-media-wrapper\s*\{[\s\S]*?\.ergo-card:hover \.card-img\s*\{[^}]*\}/,
  `.card-media-wrapper {
  position: relative;
  height: 270px;
  background: #ffffff;
  overflow: hidden;
  border-bottom: 1px solid var(--ergo-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-media-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 42px 18px 16px 18px;
  box-sizing: border-box;
  text-decoration: none;
}

.card-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: auto;
  display: block;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.ergo-card:hover .card-img {
  transform: scale(1.05);
}`
);

// 2. CSS fixes for detail-gallery and detail-img
content = content.replace(
  /\.detail-gallery\s*\{[\s\S]*?\.detail-img\s*\{[^}]*\}/,
  `.detail-gallery {
  background: #ffffff;
  border: 1px solid var(--ergo-border);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 340px;
  box-sizing: border-box;
}

.detail-img {
  max-width: 100%;
  max-height: 420px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}`
);

// 3. Responsive media queries
content = content.replace(
  /@media \(max-width: 860px\)\s*\{[\s\S]*?z-index: 999;\s*\}\s*\}/,
  `@media (max-width: 860px) {
  .product-detail-layout { grid-template-columns: 1fr; }
  .hero-title { font-size: 2.2rem; }
  .product-grid { grid-template-columns: 1fr; }
  .card-media-wrapper {
    height: 240px;
  }
  .card-media-link {
    padding: 38px 14px 12px 14px;
  }
  .card-img {
    max-height: 185px;
  }
  .detail-gallery {
    padding: 20px 14px;
    min-height: 260px;
  }
  .detail-img {
    max-height: 280px;
  }
  .mobile-sticky-cta {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(15px);
    border-top: 1px solid var(--ergo-border);
    padding: 12px 18px;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
  }
}

@media (max-width: 480px) {
  .card-media-wrapper {
    height: 220px;
  }
  .card-media-link {
    padding: 36px 10px 10px 10px;
  }
  .card-img {
    max-height: 170px;
  }
  .detail-gallery {
    min-height: 230px;
    padding: 16px 10px;
  }
  .detail-img {
    max-height: 230px;
  }
}`
);

// 4. renderProductCard link class
content = content.replace(
  /<a href="\$\{detailLink\}">\s*<img src="\$\{imgSrc\}"/,
  '<a href="${detailLink}" class="card-media-link">\n          <img src="${imgSrc}"'
);

fs.writeFileSync('C:\\AI\\GlowDevice-SG\\src\\site-builder.js', content, 'utf-8');
console.log('GlowDevice SG site-builder.js patched successfully!');
