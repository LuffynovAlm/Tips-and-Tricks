#!/usr/bin/env node
// Generates styled HTML cheat sheets in Visuals/ from the Markdown tables in Command/ and Shortcut/.
// Markdown is the source of truth: never edit Visuals/*.html by hand, re-run this script.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const OUT = path.join(ROOT, 'Visuals');
const KINDS = [
  { dir: 'Command', label: 'Commands', kind: 'command' },
  { dir: 'Shortcut', label: 'Shortcuts', kind: 'shortcut' },
];
const ACCENTS = { Bmad: '#8b5cf6', Claude: '#d97757', ClaudeCode: '#d97757', GithubCopilot: '#2f81f7', VsCode: '#0ea5e9', Devflow: '#10b981' };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function inline(md) {
  return esc(md)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

// "Ctrl+Shift+P", "Esc, Esc", "Alt+] / Alt+[" -> <kbd> chips
function keys(md) {
  const raw = md.replace(/^`(.+)`$/, '$1');
  const alt = raw.split(/\s+\/\s+/);
  return alt.map((variant) => variant.split(/,\s*/).map((chord) => {
    const parts = chord.trim() === '+' ? ['+'] : chord.trim().split(/(?<=\S)\+(?=\S)/);
    return parts.map((k) => `<kbd>${esc(k.trim())}</kbd>`).join('<span class="plus">+</span>');
  }).join('<span class="then">then</span>')).join('<span class="or">or</span>');
}

function splitRow(line) {
  const cells = [];
  let cur = '';
  const body = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  for (let i = 0; i < body.length; i++) {
    if (body[i] === '\\' && body[i + 1] === '|') { cur += '|'; i++; }
    else if (body[i] === '|') { cells.push(cur.trim()); cur = ''; }
    else cur += body[i];
  }
  cells.push(cur.trim());
  return cells;
}

function parse(file) {
  const lines = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').split(/\r?\n/);
  const doc = { title: '', intro: [], sections: [] };
  let section = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^#\s/.test(l)) { doc.title = l.replace(/^#\s+/, '').trim(); continue; }
    if (/^##\s/.test(l)) { section = { name: l.replace(/^##\s+/, '').trim(), rows: [], notes: [] }; doc.sections.push(section); continue; }
    if (/^\s*\|/.test(l)) {
      if (/^\s*\|[\s:|-]+\|\s*$/.test(l)) continue;
      const cells = splitRow(l);
      if (/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] || '')) continue; // header row
      if (!section) { section = { name: '', rows: [], notes: [] }; doc.sections.push(section); }
      section.rows.push(cells);
      continue;
    }
    if (l.trim() && !/^```/.test(l)) (section ? section.notes : doc.intro).push(l.trim());
  }
  return doc;
}

function collect() {
  const tools = [];
  for (const k of KINDS) {
    const base = path.join(ROOT, k.dir);
    if (!fs.existsSync(base)) continue;
    for (const tool of fs.readdirSync(base)) {
      const dir = path.join(base, tool);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
        const doc = parse(path.join(dir, f));
        const count = doc.sections.reduce((n, s) => n + s.rows.length, 0);
        tools.push({ ...k, tool, doc, count, src: `${k.dir}/${tool}/${f}`, id: `${slug(k.dir)}-${slug(tool)}`,
          accent: ACCENTS[tool] || '#64748b' });
      }
    }
  }
  return tools;
}

const CSS = `
:root{--bg:#f7f7f8;--panel:#fff;--ink:#16181d;--muted:#5d6472;--line:#e4e6ea;--chip:#f1f2f5;--kbd:#fff;--kbd-edge:#c9cdd4;--shadow:0 1px 2px rgba(16,24,40,.06),0 4px 16px rgba(16,24,40,.05)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0e1014;--panel:#161920;--ink:#e8eaee;--muted:#9aa2b1;--line:#262a33;--chip:#1f232c;--kbd:#232833;--kbd-edge:#3a404d;--shadow:0 1px 2px rgba(0,0,0,.4)}}
:root[data-theme="dark"]{--bg:#0e1014;--panel:#161920;--ink:#e8eaee;--muted:#9aa2b1;--line:#262a33;--chip:#1f232c;--kbd:#232833;--kbd-edge:#3a404d;--shadow:0 1px 2px rgba(0,0,0,.4)}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
a{color:inherit}
.wrap{max-width:1100px;margin:0 auto;padding:32px 16px 64px}
header.top{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin-bottom:24px}
h1{font-size:28px;margin:0;letter-spacing:-.02em}
.sub{color:var(--muted);margin:4px 0 0}
.tools{display:flex;gap:8px;align-items:center}
input[type=search]{width:280px;max-width:100%;padding:10px 14px;border-radius:10px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:inherit}
button.theme{border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:10px;padding:9px 12px;cursor:pointer;font:inherit}
nav.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 24px}
nav.tabs a{text-decoration:none;padding:7px 12px;border-radius:999px;background:var(--panel);border:1px solid var(--line);font-size:14px;display:inline-flex;gap:8px;align-items:center}
nav.tabs a .dot{width:8px;height:8px;border-radius:50%;background:var(--accent)}
nav.tabs a .n{color:var(--muted);font-variant-numeric:tabular-nums}
section.tool{background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow);margin:0 0 28px;overflow:hidden;border-top:4px solid var(--accent)}
section.tool>header{padding:18px 20px 6px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:baseline;justify-content:space-between}
section.tool h2{margin:0;font-size:20px}
.kind{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);font-weight:600}
.src{font-size:12px;color:var(--muted)}
.intro{padding:0 20px;color:var(--muted);font-size:14px}
.cat{padding:8px 20px 4px}
.cat h3{font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:14px 0 6px}
.grid{display:grid;grid-template-columns:minmax(0,1fr);gap:0}
.row{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);gap:16px;padding:10px 0;border-top:1px solid var(--line);align-items:center}
.row:first-child{border-top:0}
.row .k{min-width:0;overflow-wrap:anywhere}
.row .d{color:var(--ink);min-width:0;overflow-wrap:anywhere}
.row .d code{font-size:12.5px}
code{font-family:ui-monospace,"Cascadia Code",Consolas,monospace;background:var(--chip);padding:2px 6px;border-radius:6px;font-size:13px}
.k>code:first-child{color:var(--accent);font-weight:600}
kbd{display:inline-block;min-width:26px;text-align:center;font:600 12.5px/1 ui-monospace,"Cascadia Code",Consolas,monospace;padding:6px 8px;border-radius:7px;background:var(--kbd);border:1px solid var(--kbd-edge);border-bottom-width:3px;color:var(--ink)}
.plus,.then,.or{color:var(--muted);font-size:12px;margin:0 4px}
.then,.or{font-style:italic}
.tag{display:inline-block;font:600 11px/1 ui-monospace,Consolas,monospace;padding:4px 6px;border-radius:6px;background:var(--accent);color:#fff;margin-right:6px;vertical-align:1px}
.hide{display:none!important}
.empty{color:var(--muted);padding:12px 20px 20px;font-style:italic}
footer{color:var(--muted);font-size:12px;text-align:center;margin-top:32px}
@media (max-width:640px){.row{grid-template-columns:minmax(0,1fr);gap:6px}input[type=search]{width:100%}.tools{width:100%}h1{font-size:23px}}
`;

const JS = `
const q=document.getElementById('q');
q&&q.addEventListener('input',()=>{const t=q.value.trim().toLowerCase();
document.querySelectorAll('.row').forEach(r=>r.classList.toggle('hide',t&&!r.textContent.toLowerCase().includes(t)));
document.querySelectorAll('.cat').forEach(c=>c.classList.toggle('hide',!c.querySelector('.row:not(.hide)')));
document.querySelectorAll('section.tool').forEach(s=>s.classList.toggle('hide',!s.querySelector('.row:not(.hide)')));});
const b=document.querySelector('button.theme');let th;try{th=localStorage.getItem('tt-theme')}catch(e){}
if(th)document.documentElement.dataset.theme=th;
b&&b.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme?document.documentElement.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
const n=dark?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('tt-theme',n)}catch(e){}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==q){e.preventDefault();q&&q.focus()}});
`;

function renderTool(t) {
  const cats = t.doc.sections.map((s) => {
    const rows = s.rows.map(([a = '', b = '']) => {
      const left = t.kind === 'shortcut' ? keys(a) : inline(a);
      const right = inline(b).replace(/^\[([A-Z]{1,6})\]\s*/, '<span class="tag">$1</span>');
      return `<div class="row"><div class="k">${left}</div><div class="d">${right}</div></div>`;
    }).join('');
    return `<div class="cat">${s.name ? `<h3>${inline(s.name)}</h3>` : ''}<div class="grid">${rows || '<div class="empty">No entries yet.</div>'}</div></div>`;
  }).join('');
  const intro = t.doc.intro.length ? `<p class="intro">${inline(t.doc.intro.join(' '))}</p>` : '';
  return `<section class="tool" id="${t.id}" style="--accent:${t.accent}">
<header><div><div class="kind">${t.label}</div><h2>${inline(t.doc.title || t.tool)}</h2></div><span class="src">${esc(t.src)} · ${t.count} entries</span></header>
${intro}${cats || '<div class="empty">No entries yet.</div>'}<div style="height:12px"></div></section>`;
}

function page(title, subtitle, tools, navTools) {
  const nav = navTools.map((t) => `<a href="${t.href}" style="--accent:${t.accent}"><span class="dot"></span>${esc(t.tool)} · ${t.label}<span class="n">${t.count}</span></a>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><style>${CSS}</style></head><body><div class="wrap">
<header class="top"><div><h1>${esc(title)}</h1><p class="sub">${subtitle}</p></div>
<div class="tools"><input id="q" type="search" placeholder="Filter…  ( / )" aria-label="Filter"><button class="theme" type="button" aria-label="Toggle theme">◐</button></div></header>
<nav class="tabs">${nav}</nav>
${tools.map(renderTool).join('\n')}
<footer>Generated from the Markdown tables by <code>.claude/skills/tips-visuals/build.mjs</code> — edit the .md files, not this page.</footer>
</div><script>${JS}</script></body></html>`;
}

// --hook: called from a PostToolUse hook; only rebuild when the edited file is a Command/ or Shortcut/ table.
if (process.argv.includes('--hook')) {
  let input = {};
  try { input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch {}
  const rel = path.relative(ROOT, path.resolve(input.tool_input?.file_path || '')).replace(/\\/g, '/');
  if (!/^(Command|Shortcut)\/.+\.md$/i.test(rel)) process.exit(0);
}

const tools = collect();
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (f.endsWith('.html')) fs.unlinkSync(path.join(OUT, f));

const total = tools.reduce((n, t) => n + t.count, 0);
fs.writeFileSync(path.join(OUT, 'index.html'),
  page('Tips & Tricks', `${total} commands and shortcuts across ${tools.length} cheat sheets`, tools,
    tools.map((t) => ({ ...t, href: `#${t.id}` }))));
for (const t of tools) {
  fs.writeFileSync(path.join(OUT, `${t.id}.html`),
    page(`${t.tool} ${t.label}`, `<a href="index.html">← All cheat sheets</a>`, [t],
      tools.map((o) => ({ ...o, href: `${o.id}.html` }))));
}
console.log(`tips-visuals: ${tools.length} sheets, ${total} entries → ${path.relative(ROOT, OUT)}/`);
