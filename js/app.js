
const TEAMS = window.__TEAMS__ || [];
const PAGE_SIZE = 10;

const $list = document.getElementById('team-list');
const $pager = document.getElementById('pager');
const $search = document.getElementById('search');
const $first = document.getElementById('firstBtn');
const $last = document.getElementById('lastBtn');

// Sidebar elements
const $cardName = document.getElementById('cardName');
const $cardLogo = document.getElementById('cardLogo');

let page = 1;
let query = '';

function filterTeams(){
  const q = query.trim().toLowerCase();
  return q ? TEAMS.filter(t => t.name.toLowerCase().includes(q)) : TEAMS.slice();
}

function renderList(items){
  $list.innerHTML = '';
  items.forEach((t, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="logo"><div class="logo-s"><img src="${t.logo}" alt=""></div></div>
      <div class="team"><div class="team-name">${t.name}</div></div>
    `;
    li.addEventListener('click', () => selectTeam(t));
    $list.appendChild(li);
  });
}

function selectTeam(team){
  $cardName.textContent = team.name;
  $cardLogo.src = team.logo;
  $cardLogo.alt = team.name + " logo";
}

function renderPager(total){
  $pager.innerHTML = '';
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  $first.disabled = page === 1;
  $last.disabled = page === totalPages;

  const count = Math.min(5, totalPages);
  for(let i=1;i<=count;i++){
    const b = document.createElement('button');
    b.className = 'num' + (i===page ? ' is-active' : '');
    b.textContent = i;
    b.onclick = () => { page = i; update(); };
    $pager.appendChild(b);
  }
}

function update(){
  const all = filterTeams();
  const start = (page-1)*PAGE_SIZE;
  const slice = all.slice(start, start + PAGE_SIZE);
  renderList(slice);
  renderPager(all.length);
  if(slice[0]) selectTeam(slice[0]);
}

$search.addEventListener('input', (e)=>{ query = e.target.value; page = 1; update(); });
$first.addEventListener('click', ()=>{ page = 1; update(); });
$last.addEventListener('click', ()=>{
  const totalPages = Math.max(1, Math.ceil(filterTeams().length / PAGE_SIZE));
  page = totalPages; update();
});

update();
