// ====================================
// PAID PEDIA - Admin Panel Script
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
  admin: { username: 'admin', password: 'admin123' },
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

// ===== STORAGE =====
function loadData() {
  const stored = localStorage.getItem('paidpedia_data');
  if (stored) {
    try {
      const data = JSON.parse(stored);
      if (!data.admin) data.admin = { username: 'admin', password: 'admin123' };
      return data;
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }
  localStorage.setItem('paidpedia_data', JSON.stringify(DEFAULT_DATA));
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData(data) {
  localStorage.setItem('paidpedia_data', JSON.stringify(data));
}

let appData = loadData();

// ===== IMAGE HANDLER HELPER =====
function handleModalImage(input, previewId) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 1 * 1024 * 1024) {
    alert('Ukuran gambar terlalu besar! Maksimal 1MB.');
    input.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById(previewId).src = e.target.result;
    document.getElementById(previewId).style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function getImageData(previewId) {
  const img = document.getElementById(previewId);
  if (img && img.style.display !== 'none' && img.src.startsWith('data:image')) {
    return img.src;
  }
  return '';
}

// ===== LOGIN =====
function checkLogin() {
  const loggedIn = sessionStorage.getItem('paidpedia_admin') === 'true';
  if (loggedIn) {
    document.getElementById('loginWrapper').style.display = 'none';
    document.getElementById('adminDashboard').classList.add('active');
    initAdmin();
  }
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');
  
  if (username === appData.admin.username && password === appData.admin.password) {
    sessionStorage.setItem('paidpedia_admin', 'true');
    document.getElementById('loginWrapper').style.display = 'none';
    document.getElementById('adminDashboard').classList.add('active');
    errorEl.classList.remove('show');
    initAdmin();
  } else {
    errorEl.classList.add('show');
    document.getElementById('loginPassword').value = '';
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  if (confirm('Yakin ingin logout?')) {
    sessionStorage.removeItem('paidpedia_admin');
    location.reload();
  }
});

// ===== TAB NAVIGATION =====
document.querySelectorAll('.sidebar-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tab = link.dataset.tab;
    document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
  });
});

// ===== INIT ADMIN =====
function initAdmin() {
  loadGeneralSettings();
  renderServices();
  renderPricelist();
  renderTestimonials();
  renderPortfolio();
  renderSections();
  loadThemeSettings();
  loadPresets();
  updateStats();
}

// ===== STATS =====
function updateStats() {
  document.getElementById('statServices').textContent = appData.services.length;
  document.getElementById('statPricelist').textContent = appData.pricelist.length;
  document.getElementById('statTestimonials').textContent = appData.testimonials.length;
  document.getElementById('statPortfolio').textContent = appData.portfolio.length;
}

// ===== GENERAL SETTINGS =====
function loadGeneralSettings() {
  document.getElementById('cfgSiteName').value = appData.config.siteName;
  document.getElementById('cfgTagline').value = appData.config.tagline;
  document.getElementById('cfgWhatsapp').value = appData.config.whatsapp;
  document.getElementById('cfgInstagram').value = appData.config.instagram;
  
  if (appData.config.heroBanner) {
    document.getElementById('bannerPreview').src = appData.config.heroBanner;
    document.getElementById('bannerPreview').style.display = 'block';
    document.getElementById('removeBanner').style.display = 'inline-flex';
  }
}

document.getElementById('cfgBanner').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    alert('Ukuran gambar terlalu besar. Maksimal 2MB.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('bannerPreview').src = ev.target.result;
    document.getElementById('bannerPreview').style.display = 'block';
    document.getElementById('removeBanner').style.display = 'inline-flex';
    appData.config.heroBanner = ev.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById('removeBanner').addEventListener('click', () => {
  appData.config.heroBanner = '';
  document.getElementById('bannerPreview').style.display = 'none';
  document.getElementById('removeBanner').style.display = 'none';
  document.getElementById('cfgBanner').value = '';
});

document.getElementById('saveGeneral').addEventListener('click', () => {
  appData.config.siteName = document.getElementById('cfgSiteName').value.trim() || 'PAID PEDIA';
  appData.config.tagline = document.getElementById('cfgTagline').value.trim() || 'Joki MLBB Cepat, Aman, dan Terpercaya';
  appData.config.whatsapp = document.getElementById('cfgWhatsapp').value.trim() || '081389976472';
  appData.config.instagram = document.getElementById('cfgInstagram').value.trim() || 'wannnnnn2805';
  saveData(appData);
  showToast('Pengaturan berhasil disimpan!');
});

// ===== SERVICES =====
function renderServices() {
  const list = document.getElementById('servicesList');
  if (appData.services.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Belum ada layanan.</p>';
    return;
  }
  list.innerHTML = appData.services.map(s => `
    <div class="admin-item-card">
      <h4><i class="fas ${s.icon}"></i> ${s.title}</h4>
      <div class="item-price">Rp ${s.price.toLocaleString('id-ID')}</div>
      <div class="item-desc">${s.desc}</div>
      <div class="admin-item-actions">
        <button class="icon-btn" onclick="editService(${s.id})"><i class="fas fa-edit"></i></button>
        <button class="icon-btn danger" onclick="deleteService(${s.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addService').addEventListener('click', () => openServiceModal());

function openServiceModal(service = null) {
  const isEdit = !!service;
  const s = service || { title: '', category: 'rank', icon: 'fa-trophy', image: '', desc: '', price: 0, originalPrice: 0, features: [], badge: '' };
  
  document.getElementById('modalTitle').textContent = isEdit ? 'Edit Layanan' : 'Tambah Layanan';
  document.getElementById('modalBody').innerHTML = `
    <div class="form-group">
      <label>Nama Layanan</label>
      <input type="text" class="form-input" id="svcTitle" value="${s.title}" placeholder="Joki Rank Mythic">
    </div>
    <div class="form-group">
      <label>Kategori</label>
      <select class="form-input" id="svcCategory">
        <option value="rank" ${s.category==='rank'?'selected':''}>Rank</option>
        <option value="classic" ${s.category==='classic'?'selected':''}>Classic</option>
        <option value="winrate" ${s.category==='winrate'?'selected':''}>Win Rate</option>
      </select>
    </div>
    <div class="form-group">
      <label>Icon (Font Awesome)</label>
      <input type="text" class="form-input" id="svcIcon" value="${s.icon}" placeholder="fa-trophy">
      <small style="color:var(--text-muted)">Contoh: fa-trophy, fa-crown</small>
    </div>
    <div class="form-group">
      <label>Gambar Layanan (Opsional)</label>
      <div class="file-upload">
        <label class="file-upload-label">
          <i class="fas fa-upload"></i> Pilih Gambar
          <input type="file" id="svcImageFile" accept="image/*" onchange="handleModalImage(this, 'svcImagePreview')">
        </label>
      </div>
      <img id="svcImagePreview" class="preview-img" style="display:${s.image?'block':'none'}; width:100px; height:100px; border-radius:12px; object-fit:cover; margin-top:10px;" src="${s.image || ''}">
      <small style="color:var(--text-muted)">Jika ada gambar, icon di atas akan disembunyikan. Maks 1MB.</small>
    </div>
    <div class="form-group">
      <label>Deskripsi</label>
      <textarea class="form-input" id="svcDesc" placeholder="Deskripsi layanan">${s.desc}</textarea>
    </div>
    <div class="form-group">
      <label>Harga (Rp)</label>
      <input type="number" class="form-input" id="svcPrice" value="${s.price}" placeholder="35000">
    </div>
    <div class="form-group">
      <label>Harga Coret (Rp) - Opsional</label>
      <input type="number" class="form-input" id="svcOriginalPrice" value="${s.originalPrice || 0}" placeholder="0">
    </div>
    <div class="form-group">
      <label>Badge (Opsional)</label>
      <input type="text" class="form-input" id="svcBadge" value="${s.badge || ''}" placeholder="PROMO / HOT">
    </div>
    <div class="form-group">
      <label>Fitur (pisahkan dengan baris)</label>
      <textarea class="form-input" id="svcFeatures" placeholder="Fast Process&#10;Aman 100%&#10;Garansi Win">${(s.features || []).join('\n')}</textarea>
    </div>
  `;
  const btnId = isEdit ? s.id : 0;
  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-secondary" onclick="closeModal()">Batal</button>
    <button class="btn-save" onclick="saveService(${btnId})">Simpan</button>
  `;
  openModal();
}

function saveService(id) {
  const title = document.getElementById('svcTitle').value.trim();
  if (!title) { alert('Nama layanan wajib diisi!'); return; }
  
  const featuresText = document.getElementById('svcFeatures').value.trim();
  const features = featuresText ? featuresText.split('\n').map(f => f.trim()).filter(f => f) : [];
  
  const data = {
    id: id || Date.now(),
    title: title,
    category: document.getElementById('svcCategory').value,
    icon: document.getElementById('svcIcon').value.trim() || 'fa-trophy',
    image: getImageData('svcImagePreview'),
    desc: document.getElementById('svcDesc').value.trim(),
    price: parseInt(document.getElementById('svcPrice').value) || 0,
    originalPrice: parseInt(document.getElementById('svcOriginalPrice').value) || 0,
    badge: document.getElementById('svcBadge').value.trim(),
    features: features
  };
  
  if (id) {
    const index = appData.services.findIndex(s => s.id === id);
    if (index !== -1) appData.services[index] = data;
  } else {
    appData.services.push(data);
  }
  
  saveData(appData);
  renderServices();
  updateStats();
  closeModal();
  showToast('Layanan berhasil disimpan!');
}

function editService(id) {
  const service = appData.services.find(s => s.id === id);
  if (service) openServiceModal(service);
}

function deleteService(id) {
  if (confirm('Yakin ingin menghapus layanan ini?')) {
    appData.services = appData.services.filter(s => s.id !== id);
    saveData(appData);
    renderServices();
    updateStats();
    showToast('Layanan berhasil dihapus!');
  }
}

// ===== PRICELIST =====
function renderPricelist() {
  const list = document.getElementById('pricelistList');
  if (appData.pricelist.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Belum ada pricelist.</p>';
    return;
  }
  list.innerHTML = appData.pricelist.map(p => `
    <div class="admin-item-card">
      <h4>${p.title}</h4>
      <div class="item-price">Rp ${p.price.toLocaleString('id-ID')}</div>
      <div class="item-desc">${p.unit || ''} ${p.badge ? '• ' + p.badge : ''}</div>
      <div class="admin-item-actions">
        <button class="icon-btn" onclick="editPricelist(${p.id})"><i class="fas fa-edit"></i></button>
        <button class="icon-btn danger" onclick="deletePricelist(${p.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addPricelist').addEventListener('click', () => openPricelistModal());

function openPricelistModal(item = null) {
  const isEdit = !!item;
  const p = item || { title: '', image: '', price: 0, unit: '', features: [], badge: '', badgeType: '' };
  
  document.getElementById('modalTitle').textContent = isEdit ? 'Edit Pricelist' : 'Tambah Pricelist';
  document.getElementById('modalBody').innerHTML = `
    <div class="form-group">
      <label>Gambar Pricelist (Opsional)</label>
      <div class="file-upload">
        <label class="file-upload-label">
          <i class="fas fa-upload"></i> Pilih Gambar
          <input type="file" id="plImageFile" accept="image/*" onchange="handleModalImage(this, 'plImagePreview')">
        </label>
      </div>
      <img id="plImagePreview" class="preview-img" style="display:${p.image?'block':'none'}; width:100%; max-height:150px; object-fit:cover; border-radius:10px; margin-top:10px;" src="${p.image || ''}">
    </div>
    <div class="form-group">
      <label>Judul Pricelist</label>
      <input type="text" class="form-input" id="plTitle" value="${p.title}" placeholder="Epic -> Legend">
    </div>
    <div class="form-group">
      <label>Harga (Rp)</label>
      <input type="number" class="form-input" id="plPrice" value="${p.price}" placeholder="15000">
    </div>
    <div class="form-group">
      <label>Satuan/Unit</label>
      <input type="text" class="form-input" id="plUnit" value="${p.unit || ''}" placeholder="/ full rank">
    </div>
    <div class="form-group">
      <label>Badge Text (Opsional)</label>
      <input type="text" class="form-input" id="plBadge" value="${p.badge || ''}" placeholder="PROMO / HOT">
    </div>
    <div class="form-group">
      <label>Tipe Badge</label>
      <select class="form-input" id="plBadgeType">
        <option value="" ${p.badgeType===''?'selected':''}>Normal</option>
        <option value="hot" ${p.badgeType==='hot'?'selected':''}>Hot (Pink)</option>
        <option value="new" ${p.badgeType==='new'?'selected':''}>New (Cyan)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Fitur (pisahkan dengan baris)</label>
      <textarea class="form-input" id="plFeatures" placeholder="Garansi Naik&#10;1-2 Hari Selesai">${(p.features || []).join('\n')}</textarea>
    </div>
  `;
  const btnId = isEdit ? p.id : 0;
  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-secondary" onclick="closeModal()">Batal</button>
    <button class="btn-save" onclick="savePricelist(${btnId})">Simpan</button>
  `;
  openModal();
}

function savePricelist(id) {
  const title = document.getElementById('plTitle').value.trim();
  if (!title) { alert('Judul pricelist wajib diisi!'); return; }
  
  const featuresText = document.getElementById('plFeatures').value.trim();
  const features = featuresText ? featuresText.split('\n').map(f => f.trim()).filter(f => f) : [];
  
  const data = {
    id: id || Date.now(),
    title: title,
    image: getImageData('plImagePreview'),
    price: parseInt(document.getElementById('plPrice').value) || 0,
    unit: document.getElementById('plUnit').value.trim(),
    badge: document.getElementById('plBadge').value.trim(),
    badgeType: document.getElementById('plBadgeType').value,
    features: features
  };
  
  if (id) {
    const index = appData.pricelist.findIndex(p => p.id === id);
    if (index !== -1) appData.pricelist[index] = data;
  } else {
    appData.pricelist.push(data);
  }
  
  saveData(appData);
  renderPricelist();
  updateStats();
  closeModal();
  showToast('Pricelist berhasil disimpan!');
}

function editPricelist(id) {
  const item = appData.pricelist.find(p => p.id === id);
  if (item) openPricelistModal(item);
}

function deletePricelist(id) {
  if (confirm('Yakin ingin menghapus item ini?')) {
    appData.pricelist = appData.pricelist.filter(p => p.id !== id);
    saveData(appData);
    renderPricelist();
    updateStats();
    showToast('Pricelist berhasil dihapus!');
  }
}

// ===== TESTIMONIALS =====
function renderTestimonials() {
  const list = document.getElementById('testimonialsList');
  if (appData.testimonials.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Belum ada testimoni.</p>';
    return;
  }
  list.innerHTML = appData.testimonials.map(t => `
    <div class="admin-item-card">
      <h4>${t.name}</h4>
      <div class="item-desc">Rating: ${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
      <div class="item-desc" style="margin-bottom:10px;">"${t.text.substring(0, 50)}..."</div>
      <div class="admin-item-actions">
        <button class="icon-btn" onclick="editTestimonial(${t.id})"><i class="fas fa-edit"></i></button>
        <button class="icon-btn danger" onclick="deleteTestimonial(${t.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addTestimonial').addEventListener('click', () => openTestimonialModal());

function openTestimonialModal(item = null) {
  const isEdit = !!item;
  const t = item || { name: '', role: 'Customer', text: '', rating: 5, avatar: '' };
  
  document.getElementById('modalTitle').textContent = isEdit ? 'Edit Testimoni' : 'Tambah Testimoni';
  document.getElementById('modalBody').innerHTML = `
    <div class="form-group">
      <label>Nama Customer</label>
      <input type="text" class="form-input" id="tsName" value="${t.name}" placeholder="Andi Pratama">
    </div>
    <div class="form-group">
      <label>Role</label>
      <input type="text" class="form-input" id="tsRole" value="${t.role}" placeholder="Customer">
    </div>
    <div class="form-group">
      <label>Rating (1-5)</label>
      <input type="number" class="form-input" id="tsRating" value="${t.rating}" min="1" max="5">
    </div>
    <div class="form-group">
      <label>Foto Customer (Opsional)</label>
      <div class="file-upload">
        <label class="file-upload-label">
          <i class="fas fa-upload"></i> Pilih Foto
          <input type="file" id="tsAvatarFile" accept="image/*" onchange="handleModalImage(this, 'tsAvatarPreview')">
        </label>
      </div>
      <img id="tsAvatarPreview" class="preview-img" style="display:${t.avatar?'block':'none'}; width:80px; height:80px; border-radius:50%; object-fit:cover; margin-top:10px;" src="${t.avatar || ''}">
    </div>
    <div class="form-group">
      <label>Testimoni</label>
      <textarea class="form-input" id="tsText" placeholder="Isi testimoni">${t.text}</textarea>
    </div>
  `;
  const btnId = isEdit ? t.id : 0;
  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-secondary" onclick="closeModal()">Batal</button>
    <button class="btn-save" onclick="saveTestimonial(${btnId})">Simpan</button>
  `;
  openModal();
}

function saveTestimonial(id) {
  const name = document.getElementById('tsName').value.trim();
  if (!name) { alert('Nama customer wajib diisi!'); return; }
  
  const data = {
    id: id || Date.now(),
    name: name,
    role: document.getElementById('tsRole').value.trim() || 'Customer',
    rating: Math.max(1, Math.min(5, parseInt(document.getElementById('tsRating').value) || 5)),
    text: document.getElementById('tsText').value.trim(),
    avatar: getImageData('tsAvatarPreview')
  };
  
  if (id) {
    const index = appData.testimonials.findIndex(t => t.id === id);
    if (index !== -1) appData.testimonials[index] = data;
  } else {
    appData.testimonials.push(data);
  }
  
  saveData(appData);
  renderTestimonials();
  updateStats();
  closeModal();
  showToast('Testimoni berhasil disimpan!');
}

function editTestimonial(id) {
  const item = appData.testimonials.find(t => t.id === id);
  if (item) openTestimonialModal(item);
}

function deleteTestimonial(id) {
  if (confirm('Yakin ingin menghapus testimoni ini?')) {
    appData.testimonials = appData.testimonials.filter(t => t.id !== id);
    saveData(appData);
    renderTestimonials();
    updateStats();
    showToast('Testimoni berhasil dihapus!');
  }
}

// ===== PORTFOLIO =====
function renderPortfolio() {
  const list = document.getElementById('portfolioList');
  if (appData.portfolio.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">Belum ada portfolio.</p>';
    return;
  }
  list.innerHTML = appData.portfolio.map(p => `
    <div class="admin-item-card">
      <h4>${p.title}</h4>
      <div class="item-desc">${p.desc || ''} • Rank: ${p.rank || '-'}</div>
      <div class="admin-item-actions">
        <button class="icon-btn" onclick="editPortfolio(${p.id})"><i class="fas fa-edit"></i></button>
        <button class="icon-btn danger" onclick="deletePortfolio(${p.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addPortfolio').addEventListener('click', () => openPortfolioModal());

function openPortfolioModal(item = null) {
  const isEdit = !!item;
  const p = item || { title: '', desc: '', rank: '', img: '' };
  
  document.getElementById('modalTitle').textContent = isEdit ? 'Edit Portfolio' : 'Tambah Portfolio';
  document.getElementById('modalBody').innerHTML = `
    <div class="form-group">
      <label>Gambar Portfolio (Opsional)</label>
      <div class="file-upload">
        <label class="file-upload-label">
          <i class="fas fa-upload"></i> Pilih Gambar
          <input type="file" id="pfImageFile" accept="image/*" onchange="handleModalImage(this, 'pfImagePreview')">
        </label>
      </div>
      <img id="pfImagePreview" class="preview-img" style="display:${p.img?'block':'none'}; width:100%; max-height:150px; object-fit:cover; border-radius:10px; margin-top:10px;" src="${p.img || ''}">
    </div>
    <div class="form-group">
      <label>Judul Portfolio</label>
      <input type="text" class="form-input" id="pfTitle" value="${p.title}" placeholder="Mythic Immortal">
    </div>
    <div class="form-group">
      <label>Deskripsi Singkat</label>
      <input type="text" class="form-input" id="pfDesc" value="${p.desc || ''}" placeholder="Boost dari Legend">
    </div>
    <div class="form-group">
      <label>Rank</label>
      <input type="text" class="form-input" id="pfRank" value="${p.rank || ''}" placeholder="Immortal">
    </div>
  `;
  const btnId = isEdit ? p.id : 0;
  document.getElementById('modalFooter').innerHTML = `
    <button class="btn-secondary" onclick="closeModal()">Batal</button>
    <button class="btn-save" onclick="savePortfolio(${btnId})">Simpan</button>
  `;
  openModal();
}

function savePortfolio(id) {
  const title = document.getElementById('pfTitle').value.trim();
  if (!title) { alert('Judul portfolio wajib diisi!'); return; }
  
  const data = {
    id: id || Date.now(),
    title: title,
    desc: document.getElementById('pfDesc').value.trim(),
    rank: document.getElementById('pfRank').value.trim(),
    img: getImageData('pfImagePreview')
  };
  
  if (id) {
    const index = appData.portfolio.findIndex(p => p.id === id);
    if (index !== -1) appData.portfolio[index] = data;
  } else {
    appData.portfolio.push(data);
  }
  
  saveData(appData);
  renderPortfolio();
  updateStats();
  closeModal();
  showToast('Portfolio berhasil disimpan!');
}

function editPortfolio(id) {
  const item = appData.portfolio.find(p => p.id === id);
  if (item) openPortfolioModal(item);
}

function deletePortfolio(id) {
  if (confirm('Yakin ingin menghapus portfolio ini?')) {
    appData.portfolio = appData.portfolio.filter(p => p.id !== id);
    saveData(appData);
    renderPortfolio();
    updateStats();
    showToast('Portfolio berhasil dihapus!');
  }
}

// ===== SECTIONS =====
function renderSections() {
  const list = document.getElementById('sectionsList');
  const sections = appData.sections.slice().sort((a, b) => a.order - b.order);
  
  list.innerHTML = sections.map(s => `
    <div class="section-toggle" data-id="${s.id}" draggable="true">
      <div class="section-toggle-info">
        <i class="fas fa-grip-vertical"></i>
        <span>${s.id}</span>
      </div>
      <label class="switch">
        <input type="checkbox" ${s.visible ? 'checked' : ''} onchange="toggleSection('${s.id}')">
        <span class="slider-toggle"></span>
      </label>
    </div>
  `).join('');
  initDragAndDrop();
}

function toggleSection(id) {
  const section = appData.sections.find(s => s.id === id);
  if (section) {
    section.visible = !section.visible;
    saveData(appData);
    showToast('Section ' + id + ' ' + (section.visible ? 'ditampilkan' : 'disembunyikan'));
  }
}

function initDragAndDrop() {
  const items = document.querySelectorAll('.section-toggle');
  let draggedItem = null;
  
  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = item;
      setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      const newOrder = [];
      document.querySelectorAll('.section-toggle').forEach(el => {
        const id = el.dataset.id;
        newOrder.push(appData.sections.find(s => s.id === id));
      });
      appData.sections = newOrder.map((s, i) => ({ ...s, order: i }));
      saveData(appData);
      showToast('Urutan section diperbarui!');
    });
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingItem = document.querySelector('.dragging');
      if (item !== draggedItem) {
        const rect = item.getBoundingClientRect();
        const after = e.clientY > rect.top + rect.height / 2;
        if (after) {
          item.parentNode.insertBefore(draggedItem, item.nextSibling);
        } else {
          item.parentNode.insertBefore(draggedItem, item);
        }
      }
    });
  });
}

// ===== THEME =====
function loadThemeSettings() {
  document.getElementById('themePurple').value = appData.config.theme.purple;
  document.getElementById('themeBlue').value = appData.config.theme.blue;
}

document.getElementById('saveTheme').addEventListener('click', () => {
  appData.config.theme.purple = document.getElementById('themePurple').value;
  appData.config.theme.blue = document.getElementById('themeBlue').value;
  saveData(appData);
  showToast('Tema berhasil disimpan!');
});

function loadPresets() {
  const presets = [
    { name: 'Default', purple: '#a855f7', blue: '#3b82f6' },
    { name: 'Sunset', purple: '#ec4899', blue: '#f59e0b' },
    { name: 'Ocean', purple: '#06b6d4', blue: '#3b82f6' },
    { name: 'Forest', purple: '#10b981', blue: '#84cc16' },
    { name: 'Royal', purple: '#8b5cf6', blue: '#6366f1' },
    { name: 'Cyber', purple: '#d946ef', blue: '#06b6d4' }
  ];
  const container = document.getElementById('presetThemes');
  container.innerHTML = presets.map(p => `
    <div class="preset-theme" style="background: linear-gradient(135deg, ${p.purple}, ${p.blue});" onclick="applyPreset('${p.purple}', '${p.blue}')">
      ${p.name}
    </div>
  `).join('');
}

function applyPreset(purple, blue) {
  document.getElementById('themePurple').value = purple;
  document.getElementById('themeBlue').value = blue;
  appData.config.theme.purple = purple;
  appData.config.theme.blue = blue;
  saveData(appData);
  showToast('Preset tema diterapkan!');
}

// ===== ACCOUNT =====
document.getElementById('saveAccount').addEventListener('click', () => {
  const newUsername = document.getElementById('newUsername').value.trim();
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (!newUsername || !newPassword) { alert('Username dan password wajib diisi!'); return; }
  if (newPassword !== confirmPassword) { alert('Konfirmasi password tidak cocok!'); return; }
  
  appData.admin.username = newUsername;
  appData.admin.password = newPassword;
  saveData(appData);
  document.getElementById('newUsername').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  showToast('Akun admin berhasil diperbarui!');
});

document.getElementById('resetData').addEventListener('click', () => {
  if (confirm('PERINGATAN! Semua data akan dihapus dan dikembalikan ke default. Lanjutkan?')) {
    localStorage.removeItem('paidpedia_data');
    location.reload();
  }
});

// ===== MODAL & TOAST =====
function openModal() { document.getElementById('modalOverlay').classList.add('active'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('active'); }

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 30px; left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--gradient-main); color: white;
      padding: 14px 24px; border-radius: 10px;
      font-weight: 600; font-size: 0.9rem;
      box-shadow: 0 5px 20px var(--purple-glow);
      z-index: 9999; opacity: 0; transition: all 0.4s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 3000);
}

checkLogin();