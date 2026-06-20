// ====================================
// PAID PEDIA - Customer Side Script
// ====================================

const DEFAULT_DATA = {
  config: {
    siteName: 'PAID PEDIA',
    tagline: 'Joki MLBB Cepat, Aman, dan Terpercaya',
    heroBanner: '',
    whatsapp: '081389976472',
    instagram: 'wannnnnn2805',
    theme: { purple: '#a855f7', blue: '#3b82f6' }
  },
  services: [
    { id: 1, title: 'Joki Rank Epic', category: 'rank', icon: 'fa-trophy', image: '', desc: 'Naik dari Epic ke Legend dengan cepat dan aman.', price: 15000, originalPrice: 20000, features: ['Fast Process', 'Aman 100%', 'Garansi Win'], badge: 'PROMO' },
    { id: 2, title: 'Joki Rank Legend', category: 'rank', icon: 'fa-medal', image: '', desc: 'Push rank dari Legend menuju Mythic.', price: 25000, originalPrice: 30000, features: ['Fast Process', 'Aman 100%', 'Garansi Win'], badge: 'POPULER' },
    { id: 3, title: 'Joki Rank Mythic', category: 'rank', icon: 'fa-crown', image: '', desc: 'Capai Mythic dengan player terbaik kami.', price: 35000, originalPrice: 0, features: ['Fast Process', 'Aman 100%', 'Garansi Win'], badge: '' },
    { id: 4, title: 'Joki Rank Honor', category: 'rank', icon: 'fa-star', image: '', desc: 'Push ke Mythical Honor dengan pro player.', price: 50000, originalPrice: 60000, features: ['Fast Process', 'Aman 100%', 'Pro Player'], badge: 'HOT' },
    { id: 5, title: 'Joki Rank Immortal', category: 'rank', icon: 'fa-fire', image: '', desc: 'Capai puncak Mythical Immortal.', price: 75000, originalPrice: 0, features: ['Fast Process', 'Aman 100%', 'Top Global Player'], badge: 'PREMIUM' },
    { id: 6, title: 'Joki Classic', category: 'classic', icon: 'fa-gamepad', image: '', desc: 'Main santai mode classic dengan joki.', price: 10000, originalPrice: 0, features: ['Fast Process', 'Aman 100%', 'Flexible Hero'], badge: '' },
    { id: 7, title: 'Joki Win Rate', category: 'winrate', icon: 'fa-chart-line', image: '', desc: 'Tingkatkan win rate akun MLBB kamu.', price: 20000, originalPrice: 25000, features: ['Fast Process', 'Aman 100%', 'WR Naik Drastis'], badge: 'PROMO' }
  ],
  pricelist: [
    { id: 1, title: 'Epic -> Legend', image: '', price: 15000, unit: '/ full rank', features: ['Garansi Naik', '1-2 Hari Selesai', 'Aman 100%'], badge: 'PROMO', badgeType: 'hot' },
    { id: 2, title: 'Legend -> Mythic', image: '', price: 25000, unit: '/ full rank', features: ['Garansi Naik', '2-3 Hari Selesai', 'Aman 100%'], badge: 'POPULER', badgeType: 'hot' },
    { id: 3, title: 'Mythic -> Honor', image: '', price: 50000, unit: '/ full rank', features: ['Pro Player', '3-5 Hari Selesai', 'Aman 100%'], badge: '', badgeType: '' },
    { id: 4, title: 'Honor -> Immortal', image: '', price: 75000, unit: '/ full rank', features: ['Top Global Player', '5-7 Hari Selesai', 'Aman 100%'], badge: 'PREMIUM', badgeType: 'new' },
    { id: 5, title: 'Classic Mode', image: '', price: 10000, unit: '/ 10 match', features: ['Flexible Hero', 'Fast Process', 'Aman 100%'], badge: '', badgeType: '' },
    { id: 6, title: 'Win Rate Boost', image: '', price: 20000, unit: '/ 20 match', features: ['WR Naik Drastis', 'Aman 100%', 'Garansi'], badge: 'PROMO', badgeType: 'hot' }
  ],
  testimonials: [
    { id: 1, name: 'Andi Pratama', role: 'Customer', text: 'Pelayanan cepat banget, rank aku naik dari Epic ke Mythic cuma 2 hari! Recommended pol.', rating: 5, avatar: '' },
    { id: 2, name: 'Rizky Maulana', role: 'Customer', text: 'Aman, no tipu-tipu. Adminnya fast response dan jokinya jago. Bakal langganan di sini.', rating: 5, avatar: '' },
    { id: 3, name: 'Budi Santoso', role: 'Customer', text: 'Murah meriah tapi kualitas gak murahan. Joki Mythic Honor aman sampai. Mantap!', rating: 5, avatar: '' },
    { id: 4, name: 'Dewi Lestari', role: 'Customer', text: 'Pertama kali coba joki online, ternyata PAID PEDIA bener-bener terpercaya. Top!', rating: 5, avatar: '' },
    { id: 5, name: 'Fajar Nugroho', role: 'Customer', text: 'Win rate ku naik drastis setelah pake joki win rate. Win streak terus. Keren!', rating: 5, avatar: '' }
  ],
  portfolio: [
    { id: 1, title: 'Mythic Immortal', desc: 'Boost dari Legend', rank: 'Immortal', img: '' },
    { id: 2, title: 'Mythic Honor', desc: 'Push rank cepat', rank: 'Honor', img: '' },
    { id: 3, title: 'Mythic Glory', desc: 'Win streak 20x', rank: 'Glory', img: '' },
    { id: 4, title: 'Mythic', desc: 'Dari Epic 3 hari', rank: 'Mythic', img: '' },
    { id: 5, title: 'Legend', desc: 'Boost santai', rank: 'Legend', img: '' },
    { id: 6, title: 'Win Rate 90%', desc: 'WR Boost service', rank: 'WR', img: '' },
    { id: 7, title: 'Top Global', desc: 'M5 Heroes', rank: 'Top Global', img: '' },
    { id: 8, title: 'Mythic Immortal', desc: 'Speed boost', rank: 'Immortal', img: '' }
  ],
  sections: [
    { id: 'hero', visible: true, order: 0 },
    { id: 'services', visible: true, order: 1 },
    { id: 'pricelist', visible: true, order: 2 },
    { id: 'testimonial', visible: true, order: 3 },
    { id: 'portfolio', visible: true, order: 4 },
    { id: 'contact', visible: true, order: 5 }
  ]
};

// ===== STORAGE HELPERS =====
function loadData() {
  const stored = localStorage.getItem('paidpedia_data');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  }
  localStorage.setItem('paidpedia_data', JSON.stringify(DEFAULT_DATA));
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData(data) {
  localStorage.setItem('paidpedia_data', JSON.stringify(data));
}

let appData = loadData();
let currentTestimonial = 0;
let testimonialInterval;

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => { document.getElementById('loader').classList.add('hidden'); }, 2000);
});

// ===== APPLY CONFIG =====
function applyConfig() {
  const config = appData.config;
  document.getElementById('navLogoText').textContent = config.siteName;
  document.getElementById('loaderText').textContent = config.siteName;
  document.getElementById('heroTitle').textContent = config.siteName;
  document.getElementById('footerLogoText').textContent = config.siteName;
  document.getElementById('footerCopyText').textContent = config.siteName;
  document.title = config.siteName + ' - ' + config.tagline;
  document.getElementById('heroTagline').textContent = config.tagline;
  
  if (config.heroBanner) {
    document.getElementById('heroBg').style.background = `url('${config.heroBanner}') center/cover no-repeat`;
  }
  
  if (config.theme) {
    document.documentElement.style.setProperty('--purple', config.theme.purple);
    document.documentElement.style.setProperty('--blue', config.theme.blue);
    document.documentElement.style.setProperty('--purple-glow', config.theme.purple + '80');
    document.documentElement.style.setProperty('--blue-glow', config.theme.blue + '80');
  }
  
  const waNumber = config.whatsapp.replace(/^0/, '62').replace(/[^0-9]/g, '');
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = `https://wa.me/${waNumber}?text=Halo%20${encodeURIComponent(config.siteName)},%20saya%20mau%20order%20joki`;
  });
  document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.href = `https://instagram.com/${config.instagram}`;
  });
}

// ===== APPLY SECTIONS =====
function applySections() {
  const mainContent = document.getElementById('mainContent');
  const sections = appData.sections.slice().sort((a, b) => a.order - b.order);
  sections.forEach(section => {
    const el = document.querySelector(`[data-section="${section.id}"]`);
    if (!el) return;
    if (section.visible) { el.classList.remove('hidden-section'); } else { el.classList.add('hidden-section'); }
    mainContent.appendChild(el);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    const target = link.dataset.target;
    const sec = appData.sections.find(s => s.id === target);
    if (sec && !sec.visible) { link.parentElement.style.display = 'none'; } else { link.parentElement.style.display = ''; }
  });
}

// ===== RENDER SERVICES =====
function renderServices(filter = 'all', search = '') {
  const grid = document.getElementById('servicesGrid');
  let services = appData.services;
  if (filter !== 'all') services = services.filter(s => s.category === filter);
  if (search) {
    const q = search.toLowerCase();
    services = services.filter(s => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
  }
  if (services.length === 0) {
    grid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>Tidak ada layanan ditemukan</h3><p>Coba kata kunci atau filter lain</p></div>`;
    return;
  }
  grid.innerHTML = services.map((s, i) => `
    <div class="service-card" style="animation-delay: ${i * 0.1}s">
      ${s.badge ? `<span class="service-badge">${s.badge}</span>` : ''}
      <div class="service-icon">
        ${s.image ? `<img src="${s.image}" alt="${s.title}" style="width:100%; height:100%; border-radius:16px; object-fit:cover;">` : `<i class="fas ${s.icon}"></i>`}
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <ul class="service-features">
        ${(s.features || []).map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
      </ul>
      <div class="service-footer">
        <div class="service-price">
          <span class="price-label">Mulai dari</span>
          <span class="price-value">Rp ${s.price.toLocaleString('id-ID')}</span>
          ${s.originalPrice && s.originalPrice > s.price ? `<span class="price-original">Rp ${s.originalPrice.toLocaleString('id-ID')}</span>` : ''}
        </div>
        <a href="https://wa.me/${appData.config.whatsapp.replace(/^0/, '62').replace(/[^0-9]/g,'')}?text=Halo,%20saya%20mau%20order%20${encodeURIComponent(s.title)}" target="_blank" class="btn-order">
          <i class="fab fa-whatsapp"></i> Order
        </a>
      </div>
    </div>
  `).join('');
}

// ===== RENDER PRICELIST =====
function renderPricelist() {
  const grid = document.getElementById('pricelistGrid');
  const items = appData.pricelist;
  if (items.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">Pricelist belum tersedia.</p>';
    return;
  }
  grid.innerHTML = items.map(p => `
    <div class="price-card">
      ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ''}
      <div class="price-card-header">
        <h3 class="price-card-title">${p.title}</h3>
        ${p.badge ? `<span class="price-card-badge ${p.badgeType}">${p.badge}</span>` : ''}
      </div>
      <div class="price-card-price">Rp ${p.price.toLocaleString('id-ID')}</div>
      <div class="price-card-unit">${p.unit || ''}</div>
      <ul class="price-card-features">
        ${(p.features || []).map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
      </ul>
      <a href="https://wa.me/${appData.config.whatsapp.replace(/^0/, '62').replace(/[^0-9]/g,'')}?text=Halo,%20saya%20mau%20order%20${encodeURIComponent(p.title)}" target="_blank" class="btn-order">
        <i class="fab fa-whatsapp"></i> Order Sekarang
      </a>
    </div>
  `).join('');
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.getElementById('sliderDots');
  const items = appData.testimonials;
  if (items.length === 0) {
    track.innerHTML = '<div class="testimonial-card"><p>Belum ada testimoni.</p></div>';
    dots.innerHTML = '';
    return;
  }
  track.innerHTML = items.map(t => {
    const initials = t.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const stars = Array(5).fill(0).map((_, i) => `<i class="fas fa-star" style="${i < t.rating ? '' : 'opacity:0.3'}"></i>`).join('');
    return `
      <div class="testimonial-card">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            ${t.avatar ? `<img src="${t.avatar}" alt="${t.name}">` : initials}
          </div>
          <div class="testimonial-info">
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role || 'Customer'}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  dots.innerHTML = items.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('');
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => goToTestimonial(parseInt(dot.dataset.index)));
  });
}

function goToTestimonial(index) {
  const items = appData.testimonials;
  if (items.length === 0) return;
  currentTestimonial = (index + items.length) % items.length;
  document.getElementById('testimonialTrack').style.transform = `translateX(-${currentTestimonial * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentTestimonial));
}

function startTestimonialAuto() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(() => goToTestimonial(currentTestimonial + 1), 5000);
}

// ===== RENDER PORTFOLIO =====
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const items = appData.portfolio;
  if (items.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">Portfolio belum tersedia.</p>';
    return;
  }
  const gradients = [
    'linear-gradient(135deg, #a855f7, #3b82f6)', 'linear-gradient(135deg, #ec4899, #a855f7)',
    'linear-gradient(135deg, #3b82f6, #06b6d4)', 'linear-gradient(135deg, #f59e0b, #ec4899)',
    'linear-gradient(135deg, #10b981, #3b82f6)', 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    'linear-gradient(135deg, #06b6d4, #8b5cf6)', 'linear-gradient(135deg, #f43f5e, #8b5cf6)'
  ];
  grid.innerHTML = items.map((p, i) => {
    const style = p.img ? '' : `style="background: ${gradients[i % gradients.length]}; display:flex; align-items:center; justify-content:center; font-size:3rem; color:white;"`;
    return `
      <div class="portfolio-item">
        ${p.img 
          ? `<img src="${p.img}" class="portfolio-img" alt="${p.title}">`
          : `<div class="portfolio-img" ${style}><i class="fas fa-trophy"></i></div>`
        }
        <div class="portfolio-overlay">
          <div class="portfolio-title">${p.title}</div>
          <div class="portfolio-desc">${p.desc || ''}</div>
          ${p.rank ? `<span class="portfolio-rank">${p.rank}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ===== HERO PARTICLES =====
function createParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.animationDuration = (10 + Math.random() * 10) + 's';
    p.style.background = Math.random() > 0.5 ? '#a855f7' : '#3b82f6';
    p.style.boxShadow = `0 0 10px ${Math.random() > 0.5 ? '#a855f7' : '#3b82f6'}`;
    container.appendChild(p);
  }
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const suffix = counter.dataset.suffix || '+';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    };
    update();
  });
}

// ===== NAVIGATION =====
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
    const sections = document.querySelectorAll('.section:not(.hidden-section)');
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.dataset.section;
    });
    links.forEach(link => link.classList.toggle('active', link.dataset.target === current));
  });
  
  navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      const el = document.getElementById(target === 'hero' ? 'home' : target);
      if (el && !el.classList.contains('hidden-section')) {
        const offset = el.offsetTop - 70;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
      navMenu.classList.remove('active');
    });
  });
}

// ===== SERVICES FILTER & SEARCH =====
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const search = document.getElementById('serviceSearch');
  let currentFilter = 'all', currentSearch = '';
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderServices(currentFilter, currentSearch);
    });
  });
  search.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderServices(currentFilter, currentSearch);
  });
}

// ===== TESTIMONIAL SLIDER =====
function initTestimonialSlider() {
  document.getElementById('prevTestimonial').addEventListener('click', () => { goToTestimonial(currentTestimonial - 1); startTestimonialAuto(); });
  document.getElementById('nextTestimonial').addEventListener('click', () => { goToTestimonial(currentTestimonial + 1); startTestimonialAuto(); });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section-header, .service-card, .price-card, .contact-card, .portfolio-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== INIT ALL =====
function init() {
  applyConfig();
  applySections();
  renderServices();
  renderPricelist();
  renderTestimonials();
  renderPortfolio();
  createParticles();
  initNavigation();
  initServiceFilters();
  initTestimonialSlider();
  startTestimonialAuto();
  setTimeout(() => { animateCounters(); initScrollReveal(); }, 2000);
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('storage', (e) => {
  if (e.key === 'paidpedia_data') {
    appData = loadData();
    applyConfig();
    applySections();
    renderServices();
    renderPricelist();
    renderTestimonials();
    renderPortfolio();
  }
});