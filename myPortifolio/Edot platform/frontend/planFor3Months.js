/* ====== Config ====== */
const BRAND = '#7c109a';
const STORAGE_PREFIX = 'edot90_';
const HOURS_PER_DAY = 24;
const STREAK_MIN_HOURS = 2; // day counts only if >= 2 checked hours

/* ====== Helpers ====== */
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
const save = (k, v) => localStorage.setItem(STORAGE_PREFIX + k, v);
const load = (k, d = null) => localStorage.getItem(STORAGE_PREFIX + k) ?? d;
const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const days = Array.from({ length: 90 }, (_, i) => {
  const d = new Date(startDate);
  d.setDate(startDate.getDate() + i);
  return d;
});
const fmtISO = d => d.toISOString().slice(0, 10);
const pad2 = n => String(n).padStart(2, '0');
const percent = (part, total) => (total ? Math.round((part / total) * 100) : 0);

/* ====== Build UI ====== */
function buildCalendar() {
  const cal = qs('#calendar');
  cal.innerHTML = '';

  days.forEach((d) => {
    const iso = fmtISO(d);
    const dayEl = document.createElement('details');
    dayEl.className = 'day';
    // open today by default
    if (iso === fmtISO(today)) dayEl.open = true;

    dayEl.innerHTML = `
      <summary>
        <div class="day-head">
          <span>Day ${diffDays(startDate, d) + 1}</span>
          <span class="date">${d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
        </div>
        <span class="range" id="day-${iso}-pct">0%</span>
      </summary>
      <div class="day-body">
        <div class="hours" id="hours-${iso}"></div>
        <div class="pbar"><span id="bar-${iso}"></span></div>
        <div class="totals">
          <span id="count-${iso}">0 / 24 hours</span>
          <span id="streakflag-${iso}">Streak-ready: No</span>
        </div>
      </div>
    `;

    cal.appendChild(dayEl);

    // build 24 hours with note inputs
    const hoursWrap = qs(`#hours-${iso}`, dayEl);
    for (let h = 0; h < HOURS_PER_DAY; h++) {
      const key = `h_${iso}_${h}`;
      const noteKey = `note_${iso}_${h}`;
      const checked = load(key) === '1';
      const noteVal = load(noteKey, '');

      const hourDiv = document.createElement('div');
      hourDiv.className = 'hour';
      hourDiv.innerHTML = `
        <label>
          <input type="checkbox" data-key="${key}" ${checked ? 'checked' : ''} />
          <span>${pad2(h)}:00</span>
        </label>
        <input class="note" type="text" placeholder="📝 note" data-key="${noteKey}" value="${escapeHtml(noteVal)}" />
      `;
      hoursWrap.appendChild(hourDiv);
    }
  });

  // Wire events
  qsa('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const key = e.target.dataset.key;
      save(key, e.target.checked ? '1' : '0');
      refreshDayTotals(getIsoFromHourKey(key));
      refreshOverall();
    });
  });

  qsa('input.note').forEach(input => {
    input.addEventListener('input', (e) => {
      const key = e.target.dataset.key;
      save(key, e.target.value);
    });
  });

  // Initial totals
  days.forEach(d => refreshDayTotals(fmtISO(d)));
  refreshOverall();
}

function diffDays(a, b) {
  const A = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const B = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((B - A) / 86400000);
}

function getIsoFromHourKey(key) {
  // key format: h_YYYY-MM-DD_HH
  return key.split('_')[1];
}

function refreshDayTotals(iso) {
  const hourCbs = qsa(`#hours-${iso} input[type="checkbox"]`);
  const checked = hourCbs.filter(cb => cb.checked).length;
  const pct = percent(checked, HOURS_PER_DAY);

  qs(`#count-${iso}`).textContent = `${checked} / ${HOURS_PER_DAY} hours`;
  qs(`#day-${iso}-pct`).textContent = `${pct}%`;
  qs(`#bar-${iso}`).style.width = `${pct}%`;
  qs(`#streakflag-${iso}`).textContent = `Streak-ready: ${checked >= STREAK_MIN_HOURS ? 'Yes' : 'No'}`;
}

function refreshOverall() {
  const totals = days.map(d => {
    const iso = fmtISO(d);
    const checked = qsa(`#hours-${iso} input[type="checkbox"]`).filter(cb => cb.checked).length;
    return { iso, checked };
  });

  const allChecked = totals.reduce((acc, t) => acc + t.checked, 0);
  const allPossible = days.length * HOURS_PER_DAY;
  const pct = percent(allChecked, allPossible);

  qs('#overallPct').textContent = `${pct}%`;
  qs('#overallBar').style.width = `${pct}%`;

  // streak: from day 1, consecutive days with >= STREAK_MIN_HOURS
  let streak = 0;
  for (let i = 0; i < totals.length; i++) {
    if (totals[i].checked >= STREAK_MIN_HOURS) streak++;
    else break;
  }
  qs('#streakDays').textContent = streak;
}

function resetAll() {
  if (!confirm('Reset ALL saved progress and notes?')) return;
  Object.keys(localStorage).forEach(k => { if (k.startsWith(STORAGE_PREFIX)) localStorage.removeItem(k); });
  buildCalendar(); // rebuild fresh
}

/* ====== CSV Export ====== */
function exportCsv() {
  const rows = [];
  rows.push(['Date','Hour','Checked','Note']);

  days.forEach(d => {
    const iso = fmtISO(d);
    for (let h = 0; h < HOURS_PER_DAY; h++) {
      const key = `h_${iso}_${h}`;
      const noteKey = `note_${iso}_${h}`;
      const checked = load(key) === '1' ? '1' : '0';
      const noteTxt = (load(noteKey, '') || '').replace(/\r?\n/g, ' ');
      rows.push([iso, pad2(h), checked, noteTxt]);
    }
  });

  const csv = rows.map(r => r.map(csvEscape).join(',')).join('\n');
  downloadFile(`EDOT_90day_${fmtISO(today)}.csv`, 'text/csv', csv);
}

function csvEscape(v){
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g,'""') + '"';
  return s;
}

function downloadFile(filename, mime, content){
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ====== Utilities ====== */
function escapeHtml(str=''){
  return str
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

/* ====== Init ====== */
document.addEventListener('DOMContentLoaded', () => {
  buildCalendar();
  qs('#resetBtn').addEventListener('click', resetAll);
  qs('#exportCsvBtn').addEventListener('click', exportCsv);
});
