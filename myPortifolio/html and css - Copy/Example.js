/* ========= Config ========= */
const STORAGE_PREFIX = 'edot90_';
const HOURS_PER_DAY = 24;
const STREAK_MIN_HOURS = 2;

/* ========= Helpers ========= */
const qs  = (s, el=document) => el.querySelector(s);
const qsa = (s, el=document) => Array.from(el.querySelectorAll(s));
const save = (k,v) => localStorage.setItem(STORAGE_PREFIX + k, v);
const load = (k,d=null) => localStorage.getItem(STORAGE_PREFIX + k) ?? d;
const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const days = Array.from({length:90}, (_,i)=> {
  const d = new Date(startDate);
  d.setDate(startDate.getDate()+i);
  return d;
});
const fmtISO = d => d.toISOString().slice(0,10);
const pad2 = n => String(n).padStart(2,'0');
const percent = (part,total) => (total ? Math.round((part/total)*100) : 0);

/* ========= Navigation (show one section) ========= */
function activateSection(id){
  qsa('.section').forEach(sec => sec.classList.remove('active'));
  qs(id).classList.add('active');
}
function wireNav(){
  qsa('.nav-link,[data-target]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const target = btn.dataset.target;
      if(target){ e.preventDefault(); activateSection(target); }
    });
  });
}

/* ========= Dark mode ========= */
function applyTheme(theme){
  document.documentElement.classList.toggle('dark', theme === 'dark');
  save('theme', theme);
}
function toggleDark(){
  const cur = load('theme','light');
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}

/* ========= Build calendar (90 days) ========= */
function buildCalendar(){
  const cal = qs('#calendar'); cal.innerHTML='';
  days.forEach((d, idx)=>{
    const iso = fmtISO(d);
    const openToday = iso === fmtISO(today) ? 'open' : '';
    const day = document.createElement('details');
    day.className = 'day';
    day.setAttribute('data-iso', iso);
    if (openToday) day.open = true;

    day.innerHTML = `
      <summary>
        <div><b>Day ${idx+1}</b> <span class="muted">• ${d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</span></div>
        <span class="muted" id="pct-${iso}">0%</span>
      </summary>
      <div class="day-body">
        <div class="hours" id="hours-${iso}"></div>
        <div class="pbar"><span id="bar-${iso}"></span></div>
        <div class="totals">
          <span id="count-${iso}">0 / 24 hours</span>
          <span id="streak-${iso}">Streak-ready: No</span>
        </div>
      </div>
    `;
    cal.appendChild(day);

    // 24 hours with notes
    const container = qs(`#hours-${iso}`, day);
    for(let h=0; h<24; h++){
      const key = `h_${iso}_${h}`;
      const noteKey = `note_${iso}_${h}`;
      const checked = load(key)==='1';
      const noteVal = load(noteKey,'') || '';

      const wrap = document.createElement('div');
      wrap.className = 'hour';
      wrap.innerHTML = `
        <label>
          <input type="checkbox" data-key="${key}" ${checked?'checked':''} />
          <span>${pad2(h)}:00</span>
        </label>
        <input type="text" class="note" data-key="${noteKey}" placeholder="📝 note" value="${escapeHtml(noteVal)}" />
      `;
      container.appendChild(wrap);
    }
  });

  // events
  qsa('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener('change', e=>{
      const key = e.target.dataset.key;
      save(key, e.target.checked?'1':'0');
      const iso = key.split('_')[1];
      refreshDay(iso);
      refreshOverall();
    });
  });
  qsa('input.note').forEach(inp=>{
    inp.addEventListener('input', e=>{
      save(e.target.dataset.key, e.target.value);
    });
  });

  // first refresh
  days.forEach(d=> refreshDay(fmtISO(d)));
  refreshOverall();
}

function refreshDay(iso){
  const cbs = qsa(`#hours-${iso} input[type="checkbox"]`);
  const checked = cbs.filter(c=>c.checked).length;
  const pct = percent(checked, HOURS_PER_DAY);
  qs(`#pct-${iso}`).textContent = `${pct}%`;
  qs(`#bar-${iso}`).style.width = `${pct}%`;
  qs(`#count-${iso}`).textContent = `${checked} / ${HOURS_PER_DAY} hours`;
  qs(`#streak-${iso}`).textContent = `Streak-ready: ${checked >= STREAK_MIN_HOURS ? 'Yes' : 'No'}`;
}

function refreshOverall(){
  const totals = days.map(d=>{
    const iso = fmtISO(d);
    const c = qsa(`#hours-${iso} input[type="checkbox"]`).filter(x=>x.checked).length;
    return { iso, c };
  });
  const allChecked = totals.reduce((a,t)=>a+t.c,0);
  const allPossible = days.length * HOURS_PER_DAY;
  const pct = percent(allChecked, allPossible);
  qs('#overallPct').textContent = `${pct}%`;
  qs('#overallBar').style.width = `${pct}%`;

  // streak from Day 1 consecutively
  let streak = 0;
  for(let i=0;i<totals.length;i++){
    if(totals[i].c >= STREAK_MIN_HOURS) streak++; else break;
  }
  qs('#streakDays').textContent = streak;
}

/* ========= Reset ========= */
function resetAll(){
  if(!confirm('Reset all saved progress & notes?')) return;
  Object.keys(localStorage).forEach(k=>{ if(k.startsWith(STORAGE_PREFIX)) localStorage.removeItem(k); });
  buildCalendar();
}

/* ========= Export CSV ========= */
function exportCsv(){
  const rows = [['Date','Hour','Checked','Note']];
  days.forEach(d=>{
    const iso = fmtISO(d);
    for(let h=0; h<24; h++){
      const key = `h_${iso}_${h}`;
      const noteKey = `note_${iso}_${h}`;
      const checked = load(key)==='1' ? '1' : '0';
      const note = (load(noteKey,'')||'').replace(/\r?\n/g,' ');
      rows.push([iso, pad2(h), checked, note]);
    }
  });
  const csv = rows.map(r => r.map(csvEscape).join(',')).join('\n');
  downloadFile(`EDOT_90day_${fmtISO(new Date())}.csv`, 'text/csv', csv);
}
function csvEscape(v){
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s;
}
function downloadFile(name, mime, content){
  const blob = new Blob([content], {type:mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

/* ========= Utilities ========= */
function escapeHtml(s=''){
  return s.replaceAll('&','&amp;')
          .replaceAll('<','&lt;')
          .replaceAll('>','&gt;')
          .replaceAll('"','&quot;')
          .replaceAll("'","&#39;");
}

/* ========= Contact form (demo) ========= */
function wireContact(){
  const form = qs('#contactForm');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = qs('#name').value.trim();
    const email = qs('#email').value.trim();
    const msg = qs('#message').value.trim();
    const out = qs('#formStatus');

    if(!name || !email || !msg){
      out.textContent = 'Please fill all fields.';
      return;
    }
    out.textContent = '✅ Message sent (demo).';
    form.reset();
  });
}

/* ========= Init ========= */
document.addEventListener('DOMContentLoaded', ()=>{
  // year
  const y = new Date().getFullYear();
  const yEl = qs('#year'); if (yEl) yEl.textContent = y;

  // theme
  const theme = load('theme','light');
  applyTheme(theme);

  // nav
  wireNav();
  // buttons
  const darkBtn = qs('#darkToggle');
  darkBtn?.addEventListener('click', toggleDark);
  qs('#resetBtn')?.addEventListener('click', resetAll);
  qs('#exportCsvBtn')?.addEventListener('click', exportCsv);

  // calendar + contact
  buildCalendar();
  wireContact();
});

/* theme apply (after defined) */
function applyTheme(theme){
  document.documentElement.classList.toggle('dark', theme === 'dark');
  save('theme', theme);
}
