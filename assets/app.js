const state = {
  reports: [],
  filtered: [],
  query: '',
  category: 'all',
  language: 'all',
  sharingOnly: false,
};

const dimensionLabels = {
  capability: 'Capability',
  usability: 'Usability',
  performance: 'Performance',
  code_quality: 'Code quality',
  documentation: 'Documentation',
  community: 'Community',
  maturity: 'Maturity',
  extensibility: 'Extensibility',
  security: 'Security',
  recommendation: 'Recommendation',
};

const els = {
  count: document.querySelector('#metric-count'),
  score: document.querySelector('#metric-score'),
  stars: document.querySelector('#metric-stars'),
  search: document.querySelector('#search-input'),
  category: document.querySelector('#category-filter'),
  language: document.querySelector('#language-filter'),
  sharing: document.querySelector('#sharing-filter'),
  resultCount: document.querySelector('#result-count'),
  grid: document.querySelector('#card-grid'),
  dimensions: document.querySelector('#dimension-list'),
  categories: document.querySelector('#category-list'),
  reportView: document.querySelector('#report-view'),
  reportMeta: document.querySelector('#report-meta'),
  reportBody: document.querySelector('#report-body'),
  back: document.querySelector('#back-button'),
  theme: document.querySelector('#theme-toggle'),
  navSearch: document.querySelector('#nav-search'),
  navRoll: document.querySelector('#nav-roll'),
  canvas: document.querySelector('#bg-canvas'),
};

function formatNumber(value) {
  if (!Number.isFinite(value)) return '-';
  return new Intl.NumberFormat('en', { notation: value >= 10000 ? 'compact' : 'standard' }).format(value);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function excerpt(report) {
  return report.summary || report.description || report.title || '';
}

function makeSearchText(report) {
  return [
    report.title,
    report.repo_url,
    report.category,
    report.primary_language,
    report.status,
    ...(report.tags ?? []),
    excerpt(report),
  ].join(' ').toLowerCase();
}

function applyFilters() {
  const query = state.query.trim().toLowerCase();
  state.filtered = state.reports.filter((report) => {
    if (state.category !== 'all' && report.category !== state.category) return false;
    if (state.language !== 'all' && report.primary_language !== state.language) return false;
    if (state.sharingOnly && !report.sharing_candidate) return false;
    if (query && !makeSearchText(report).includes(query)) return false;
    return true;
  });
  renderLibrary();
}

function renderOptions() {
  const categories = [...new Set(state.reports.map((item) => item.category).filter(Boolean))].sort();
  const languages = [...new Set(state.reports.map((item) => item.primary_language).filter(Boolean))].sort();

  els.category.innerHTML = [
    '<option value="all">All categories</option>',
    ...categories.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`),
  ].join('');

  els.language.innerHTML = [
    '<option value="all">All languages</option>',
    ...languages.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`),
  ].join('');
}

function renderMetrics() {
  const reports = state.reports;
  const totalScore = reports.reduce((sum, item) => sum + (Number(item.overall_score) || 0), 0);
  const totalStars = reports.reduce((sum, item) => sum + (Number(item.stars) || 0), 0);

  els.count.textContent = formatNumber(reports.length);
  els.score.textContent = reports.length ? (totalScore / reports.length).toFixed(1) : '-';
  els.stars.textContent = formatNumber(totalStars);
}

function renderDimensions() {
  const totals = new Map();
  const counts = new Map();
  for (const report of state.reports) {
    for (const [key, value] of Object.entries(report.ratings ?? {})) {
      if (!Number.isFinite(Number(value))) continue;
      totals.set(key, (totals.get(key) ?? 0) + Number(value));
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  els.dimensions.innerHTML = Object.keys(dimensionLabels).map((key) => {
    const avg = counts.has(key) ? totals.get(key) / counts.get(key) : 0;
    return `
      <div class="dimension-row">
        <header><span>${dimensionLabels[key]}</span><span>${avg ? avg.toFixed(1) : '-'}</span></header>
        <div class="bar"><span style="width:${Math.max(0, Math.min(100, avg * 20))}%"></span></div>
      </div>
    `;
  }).join('');
}

function renderCategories() {
  const counts = new Map();
  for (const report of state.reports) {
    counts.set(report.category || 'uncategorized', (counts.get(report.category || 'uncategorized') ?? 0) + 1);
  }
  els.categories.innerHTML = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => `<div class="category-pill"><span>${escapeHtml(name)}</span><span>${count}</span></div>`)
    .join('');
}

function renderLibrary() {
  els.resultCount.textContent = `${state.filtered.length} items`;
  els.grid.innerHTML = state.filtered.map((report) => {
    const tags = (report.tags ?? []).slice(0, 4).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('');
    return `
      <article class="repo-card" tabindex="0" role="link" data-slug="${escapeHtml(report.slug)}">
        <div class="score-row">
          <span class="score">${Number(report.overall_score || 0).toFixed(1)}/5</span>
          <span class="chip">${escapeHtml(report.status || 'unknown')}</span>
          ${report.sharing_candidate ? '<span class="chip">sharing</span>' : ''}
        </div>
        <h3>${escapeHtml(report.title)}</h3>
        <p>${escapeHtml(excerpt(report))}</p>
        <div class="meta-line">
          <span class="chip">${escapeHtml(report.primary_language || 'mixed')}</span>
          <span class="chip">${escapeHtml(report.category || 'uncategorized')}</span>
          <span class="chip">★ ${formatNumber(Number(report.stars) || 0)}</span>
        </div>
        <div class="tag-row">${tags}</div>
      </article>
    `;
  }).join('');

  for (const card of document.querySelectorAll('.repo-card')) {
    const open = () => {
      location.hash = `#/report/${card.dataset.slug}`;
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') open();
    });
  }
}

async function openReport(slug) {
  const report = state.reports.find((item) => item.slug === slug);
  if (!report) {
    location.hash = '';
    return;
  }

  const response = await fetch(report.path);
  const markdown = stripFrontmatter(await response.text());
  const html = window.marked
    ? window.marked.parse(markdown, { gfm: true, breaks: false })
    : `<pre>${escapeHtml(markdown)}</pre>`;

  els.reportMeta.innerHTML = `
    <h1>${escapeHtml(report.title)}</h1>
    <div class="meta-line">
      <a class="chip" href="${escapeHtml(report.repo_url)}" target="_blank" rel="noreferrer">GitHub</a>
      <span class="chip">${escapeHtml(report.category || 'uncategorized')}</span>
      <span class="chip">${escapeHtml(report.primary_language || 'mixed')}</span>
      <span class="chip">Score ${Number(report.overall_score || 0).toFixed(1)}/5</span>
      <span class="chip">Checked ${escapeHtml(report.last_checked || report.updated || '')}</span>
    </div>
  `;
  els.reportBody.innerHTML = html;
  document.body.classList.add('detail-mode');
  els.reportView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeReport() {
  document.body.classList.remove('detail-mode');
  els.reportView.hidden = true;
}

function focusSearch() {
  if (location.hash.startsWith('#/report/')) location.hash = '#library';
  document.querySelector('#library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => els.search.focus(), 180);
}

function openRandomReport() {
  if (state.reports.length === 0) return;
  const report = state.reports[Math.floor(Math.random() * state.reports.length)];
  location.hash = `#/report/${report.slug}`;
}

function handleRoute() {
  const match = location.hash.match(/^#\/report\/(.+)$/);
  if (match) {
    openReport(decodeURIComponent(match[1]));
  } else {
    closeReport();
  }
}

function setupTheme() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', stored ? stored === 'dark' : prefersDark);
  els.theme.addEventListener('click', () => {
    const dark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
}

function setupBackground() {
  const ctx = els.canvas.getContext('2d');
  const connectDist = 160;
  const speedFactor = 0.35;
  const symbols = [
    '¬', '∧', '∨', '→', '↔',
    '∀', '∃', '⊢', '⊨', '⇔', '⇒', '⊥', '∴', '∵', '∎',
    '∅', '∈', '⊂', '∪', '∩', 'ℵ',
    'ℝ', 'ℂ', 'ℤ', 'ℕ', 'ℚ',
    '∫', '∂', '∇', '∑', '∏', '∞', 'Ω', 'π',
  ];
  let points = [];
  let raf = 0;

  function getConvexHull(input) {
    const sorted = input.slice().sort((a, b) => a.x - b.x || a.y - b.y);
    const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    const lower = [];
    for (const point of sorted) {
      while (lower.length >= 2 && cross(lower.at(-2), lower.at(-1), point) <= 0) lower.pop();
      lower.push(point);
    }
    const upper = [];
    for (let i = sorted.length - 1; i >= 0; i -= 1) {
      const point = sorted[i];
      while (upper.length >= 2 && cross(upper.at(-2), upper.at(-1), point) <= 0) upper.pop();
      upper.push(point);
    }
    upper.pop();
    lower.pop();
    return lower.concat(upper);
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    els.canvas.width = window.innerWidth * dpr;
    els.canvas.height = window.innerHeight * dpr;
    els.canvas.style.width = `${window.innerWidth}px`;
    els.canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = window.innerWidth < 768 ? 10 : 40;
    points = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speedFactor,
      vy: (Math.random() - 0.5) * speedFactor,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));
  }

  function draw() {
    const dark = document.documentElement.classList.contains('dark');
    const symbolColor = dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
    const lineColor = dark ? 'rgba(120,220,255,0.25)' : 'rgba(0,50,100,0.03)';
    const triangleColor = dark ? 'rgba(120,220,255,0.05)' : 'rgba(0,50,100,0.005)';
    const hullColor = dark ? 'rgba(100, 220, 255, 0.05)' : 'rgba(0, 160, 200, 0.01)';

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.font = '14px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (const point of points) {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0) {
        point.x = 0;
        point.vx *= -1;
      } else if (point.x > window.innerWidth) {
        point.x = window.innerWidth;
        point.vx *= -1;
      }
      if (point.y < 0) {
        point.y = 0;
        point.vy *= -1;
      } else if (point.y > window.innerHeight) {
        point.y = window.innerHeight;
        point.vy *= -1;
      }
    }

    const hull = getConvexHull(points);
    if (hull.length > 0) {
      ctx.beginPath();
      ctx.moveTo(hull[0].x, hull[0].y);
      for (let i = 1; i < hull.length; i += 1) ctx.lineTo(hull[i].x, hull[i].y);
      ctx.closePath();
      ctx.fillStyle = dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
      ctx.fill();
      ctx.strokeStyle = hullColor;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    for (let i = 0; i < points.length; i += 1) {
      const p1 = points[i];
      ctx.fillStyle = symbolColor;
      ctx.fillText(p1.symbol, p1.x, p1.y);

      for (let j = i + 1; j < points.length; j += 1) {
        const p2 = points[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectDist * connectDist) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          for (let k = j + 1; k < points.length; k += 1) {
            const p3 = points[k];
            const d2 = (p1.x - p3.x) ** 2 + (p1.y - p3.y) ** 2;
            const d3 = (p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2;

            if (d2 < connectDist ** 2 && d3 < connectDist ** 2) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.closePath();
              ctx.fillStyle = triangleColor;
              ctx.fill();

              const cx = (p1.x + p2.x + p3.x) / 3;
              const cy = (p1.y + p2.y + p3.y) / 3;
              ctx.beginPath();
              ctx.moveTo((p1.x + cx) / 2, (p1.y + cy) / 2);
              ctx.lineTo((p2.x + cx) / 2, (p2.y + cy) / 2);
              ctx.lineTo((p3.x + cx) / 2, (p3.y + cy) / 2);
              ctx.closePath();
              ctx.strokeStyle = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
    }

    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
  window.addEventListener('beforeunload', () => cancelAnimationFrame(raf));
}

async function init() {
  setupTheme();
  setupBackground();
  const response = await fetch('data/reports.json');
  state.reports = (await response.json()).reports ?? [];
  state.filtered = [...state.reports];
  renderOptions();
  renderMetrics();
  renderDimensions();
  renderCategories();
  applyFilters();
  handleRoute();
}

els.search.addEventListener('input', (event) => {
  state.query = event.target.value;
  applyFilters();
});
els.category.addEventListener('change', (event) => {
  state.category = event.target.value;
  applyFilters();
});
els.language.addEventListener('change', (event) => {
  state.language = event.target.value;
  applyFilters();
});
els.sharing.addEventListener('change', (event) => {
  state.sharingOnly = event.target.checked;
  applyFilters();
});
els.back.addEventListener('click', () => {
  location.hash = '';
});
els.navSearch.addEventListener('click', focusSearch);
els.navRoll.addEventListener('click', openRandomReport);
window.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    focusSearch();
  }
});
window.addEventListener('hashchange', handleRoute);

init().catch((error) => {
  els.grid.innerHTML = `<p>Failed to load reports: ${escapeHtml(error.message)}</p>`;
});
