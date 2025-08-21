/* ========= design tokens ========= */
const TOKENS = {
  maxw: 1160,
  gutter: 28,
  sideWidth: 420,
  sidePad: 18,
  cardBg: '#0b4d52',
  cardInk: '#ebf8f9',
  divider: 'rgba(255,255,255,0.22)',
  brand: '#0a0a0a',
  pageInk: '#0b0b0b',
  line: '#e8e8e8',
  muted: '#6b6f76',
  heroBg: '#151515'
};

/* ========= CSS injected from JS ========= */
const style = document.createElement('style');
style.textContent = `
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;height:100%}
img{display:block;max-width:100%}
a{text-decoration:none;color:inherit}
button,input{font:inherit;color:inherit}

:root{
  --maxw:${TOKENS.maxw}px;
  --gutter:${TOKENS.gutter}px;
  --sidew:${TOKENS.sideWidth}px;
  --brand:${TOKENS.brand};
  --ink:${TOKENS.pageInk};
  --line:${TOKENS.line};
  --muted:${TOKENS.muted};
  --hero:${TOKENS.heroBg};
  --card:${TOKENS.cardBg};
  --card-ink:${TOKENS.cardInk};
  --card-div:${TOKENS.divider};
}

/* global */
body{font-family:system-ui,-apple-system,Segoe UI,Inter,Roboto,Arial,sans-serif;color:var(--ink);background:#fff}

/* containers */
.container{width:min(100% - 2*24px, var(--maxw));margin-inline:auto}

/* nav */
.nav{background:var(--brand);color:#fff}
.nav .bar{display:flex;align-items:center;gap:28px;padding:14px 0}
.nav .logo{width:132px;height:42px;background:#cfcfcf;border-radius:4px}
.nav .links{display:flex;gap:28px}
.nav .auth{margin-left:auto;display:flex;gap:12px}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:8px;border:1px solid #2b2b2b;background:#111;color:#fff}

/* hero */
.hero{background:var(--hero);color:#fff}
.hero .container{padding:48px 0}
.hero h1{margin:0;font-size:54px;line-height:1.05;font-weight:800;letter-spacing:.2px}

/* main grid */
.main{padding:28px 0 56px}
.grid{display:grid;grid-template-columns:1fr var(--sidew);gap:var(--gutter)}

/* left side (search + list) */
.search{border:1px solid var(--line);background:#efefef;border-radius:6px;display:flex;align-items:center;gap:10px;padding:12px 14px}
.search input{border:0;outline:0;background:transparent;width:100%}
.table{margin-top:18px;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.thead,.row{display:grid;grid-template-columns:84px 1fr;align-items:center}
.thead{background:#fff;border-bottom:1px solid var(--line);color:var(--muted);font-size:13px}
.thead div{padding:12px 16px}
.row{background:#fff;border-bottom:1px solid var(--line)}
.cell{padding:16px}

/* logo cell with real images */
.logo-sq{
  width:36px;height:36px;border-radius:4px;overflow:hidden;
  background:#f1f1f1;display:grid;place-items:center
}
.logo-sq img{width:100%;height:100%;object-fit:cover}

/* RIGHT: teal side card */
.side{background:var(--card);color:var(--card-ink);border-radius:6px;padding:${TOKENS.sidePad}px}
.side .top{display:flex;gap:16px;align-items:flex-start}
.side .avatar{width:72px;height:72px;background:#0f2b2f;border-radius:6px}
.side .title{margin:0 0 4px 0;font-weight:800;font-size:22px;line-height:1.2;letter-spacing:.2px}
.side .kicker{margin:0 0 10px 0;font-size:11px;letter-spacing:.25em;text-transform:uppercase;opacity:.9}
.side .rule{height:1px;background:var(--card-div);margin:12px 0 10px}
.side .cols{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:6px}
.side .hdr{margin:0 0 6px 0;font-size:12px;font-weight:800;letter-spacing:.02em;text-transform:uppercase}
.side ul{list-style:none;margin:0;padding:0;display:grid;gap:6px;font-size:13px}
.side .join{display:grid;grid-template-columns:1fr 160px;gap:12px;margin-top:16px}
.side input{border:0;border-radius:4px;padding:12px 12px;background:#eaeaea;color:#222}
.side button{border:0;border-radius:4px;padding:12px 12px;background:#ffffff;color:#0a0a0a;font-weight:700;cursor:pointer}

/* pagination + footer */
.pager{display:flex;justify-content:center;gap:8px;margin:28px 0}
.pager .btn-s{padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:#fff;font-size:12px}
footer{border-top:1px solid var(--line)}
.footer{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:28px;padding:32px 0}
.foot-logo{width:150px;height:48px;background:#cfcfcf;border-radius:6px}
.foot-note{color:var(--muted);font-size:12px}

/* responsive */
@media (max-width: 900px){ .footer{grid-template-columns:1fr 1fr} }
@media (max-width: 560px){ .footer{grid-template-columns:1fr} }
@media (max-width: 1000px){ .grid{grid-template-columns:1fr} }
`;
document.head.appendChild(style);

/* ========= build static structure ========= */
document.body.innerHTML = `
  <nav class="nav">
    <div class="container bar">
      <div class="logo" aria-label="Logo"></div>
      <div class="links">
        <a href="#">Tournaments</a>
        <a href="#">Rulebook</a>
        <a href="#">Partners</a>
        <a href="#" aria-current="page">Teams</a>
        <a href="#">Your Teams</a>
        <a href="#">Prizes</a>
      </div>
      <div class="auth">
        <a class="btn" href="#">Log in</a>
        <a class="btn" style="background:#fff;color:#111;border-color:#d9d9d9" href="#">Sign up</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <h1>All Teams</h1>
    </div>
  </section>

  <main class="main">
    <div class="container grid">
      <!-- LEFT COLUMN -->
      <section>
        <label class="search" aria-label="Enter team name">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 21l-4.3-4.3" stroke="#6b7280" stroke-width="2" stroke-linecap="round"></path>
            <circle cx="11" cy="11" r="7" stroke="#6b7280" stroke-width="2"></circle>
          </svg>
          <input id="search" type="text" placeholder="Enter team name" />
        </label>

        <div class="table" id="table">
          <div class="thead"><div class="cell">LOGO</div><div class="cell">TEAM</div></div>
          <!-- rows via JS -->
        </div>

        <div class="pager" id="pager"></div>
      </section>

      <!-- RIGHT COLUMN: CARD -->
      <aside>
        <div class="side" id="sideCard">
          <div class="top">
            <div class="avatar" aria-hidden="true"></div>
            <div>
              <h2 class="title">Go back to<br>the Lobby</h2>
              <div class="kicker">SQUAD</div>
            </div>
          </div>

          <div class="rule"></div>

          <div class="cols">
            <div>
              <div class="hdr">Members</div>
              <ul>
                <li>Gideon</li>
                <li>Benni</li>
                <li>Trauni</li>
                <li>Cassali</li>
              </ul>
            </div>
            <div>
              <div class="hdr">Stand-in</div>
              <ul>
                <li>EiNsZeHn</li>
                <li>förbi</li>
              </ul>
            </div>
          </div>

          <div class="join">
            <input type="password" placeholder="Password" aria-label="Password">
            <button>Join</button>
          </div>
        </div>
      </aside>
    </div>
  </main>

  <footer>
    <div class="container footer">
      <div>
        <div class="foot-logo"></div>
        <div class="foot-note">Far away, behind the word mountains, live the blind texts in peace.</div>
      </div>
      <div>
        <h5 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;color:#444">Menu</h5>
        <div>Tournaments<br>Rulebook<br>Partners<br>Teams<br>Your Teams</div>
      </div>
      <div>
        <h5 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;color:#444">Social Media</h5>
        <div>Twitch<br>Facebook<br>Twitter<br>Discord</div>
      </div>
      <div>
        <h5 style="margin:0 0 10px 0;font-size:12px;text-transform:uppercase;color:#444">Contact</h5>
        <div>Do you have general questions? <a href="#">Discord server</a><br>Do you have a business inquiry? <a href="#">Contact</a></div>
      </div>
    </div>
  </footer>
`;

/* ========= data with logos =========
   Put your images in ./img/ and update the paths below.
   A built-in SVG placeholder will show if a file is missing.
*/
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
       <rect width="36" height="36" rx="4" fill="#1b1b1b"/>
     </svg>`
  );

const TEAMS = [
  { name: 'Team Gideon',   logo: 'img/images.jpeg' },
  { name: 'beingesports',  logo: 'img/a729b2f1-74c4-479f-835c-f3b1e2df373b-profile_banner-480.png' },   
  { name: 'Austrian Force',   logo: 'img/images.png' },
  { name: 'Go back to the lobby', logo: 'img/4.jpg' },
  { name: 'Final Gaming',     logo: 'img/5.jpeg' },
  { name: 'Night Drift',      logo: 'img/Night-Drift.avif' },
  { name: 'Black Orbit',     logo: 'img/6.jpeg' },
  { name: 'Quantum Link',   logo: 'img/7.png' },
  { name: 'Neon Protocol', logo: 'img/8.jpeg' },
  { name: 'Zero Latency',     logo: 'img/9.jpg' },
  { name: 'Frost bound',      logo: 'img/11.jpeg' },
  { name: 'Obsidian Keep',     logo: 'img/12.jpeg' },
  { name: 'Final Verdict',   logo: 'img/13.jpeg' },
  { name: 'Hard Reset', logo: 'img/14.jpg' },
  { name: 'Ironclad',     logo: 'img/15.jpg' }
];

/* ========= list logic ========= */
const perPage = 10;
let page = 1;
let query = '';

const $table = document.getElementById('table');
const $pager = document.getElementById('pager');
const $search = document.getElementById('search');

const rowHTML = (team) => `
  <div class="row">
    <div class="cell">
      <div class="logo-sq">
        <img src="${team.logo}" alt="${team.name} logo"
             onerror="this.src='${PLACEHOLDER}'">
      </div>
    </div>
    <div class="cell">${team.name}</div>
  </div>
`;

function renderList(){
  const filtered = TEAMS.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  if(page > totalPages) page = totalPages;
  const start = (page-1)*perPage;
  const slice = filtered.slice(start, start+perPage);

  // remove old
  $table.querySelectorAll('.row').forEach(n => n.remove());
  // add rows
  slice.forEach(team => $table.insertAdjacentHTML('beforeend', rowHTML(team)));

  // pagination
  $pager.innerHTML = '';
  const first = Object.assign(document.createElement('button'), { className:'btn-s', textContent:'‹ First page' });
  first.disabled = page===1; first.onclick=()=>{page=1; renderList();};
  $pager.appendChild(first);

  for(let i=1;i<=Math.min(totalPages,5);i++){
    const b = Object.assign(document.createElement('button'), { className:'btn-s', textContent:String(i) });
    if(i===page){ b.style.background='#0b0b0b'; b.style.color='#fff'; b.style.borderColor='#0b0b0b'; }
    b.onclick=()=>{page=i; renderList();};
    $pager.appendChild(b);
  }

  const last = Object.assign(document.createElement('button'), { className:'btn-s', textContent:'Last page ›' });
  last.disabled = page===totalPages; last.onclick=()=>{page=totalPages; renderList();};
  $pager.appendChild(last);
}

$search.addEventListener('input', e => { query = e.target.value; page = 1; renderList(); });
renderList();
