/* Builds the page from content.js — you normally don't need to edit this file. */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const PALETTE = ["green", "violet", "amber", "blue", "rose", "teal"];

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  $("theme").onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  };

  /* ---------- small icons ---------- */
  const ICONS = {
    twin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12c2.5-5 5-5 7.5 0s5 5 7.5 0 3.5-4 5-2"/><path d="M2 17c2.5-3 5-3 7.5 0s5 3 7.5 0" opacity=".5"/></svg>',
    pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2-5 4 10 2-5h8"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  };

  /* ---------- willow branches in the hero ---------- */
  (function willow() {
    const svg = $("willow"), NS = "http://www.w3.org/2000/svg";
    const W = 1400, H = 620; svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("preserveAspectRatio", "xMaxYMin slice");
    
    let seed = 7; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    const specs = [];
    for (let b = 0; b < 7; b++) specs.push([1235 + b * 30 + rnd() * 20, 300 + rnd() * 320]);       // long, far right
    for (let b = 0; b < 14; b++) specs.push([380 + b * 58 + rnd() * 30, 40 + rnd() * 45]);        // short canopy
    for (const [x0, len] of specs) {
      const bend = (rnd() - 0.4) * (len > 150 ? 80 : 20);
      const g = document.createElementNS(NS, "g"); g.setAttribute("class", "branch"); g.style.setProperty("--d", (7 + rnd() * 5).toFixed(1) + "s");
      g.style.animationDelay = (-rnd() * 6).toFixed(1) + "s";
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", `M${x0},-10 C${x0 + bend},${len * 0.35} ${x0 + bend * 0.6},${len * 0.7} ${x0 + bend * 0.2},${len}`);
      p.setAttribute("fill", "none");  p.setAttribute("stroke-width", "1.4");
      g.appendChild(p); svg.appendChild(g);
      const L = p.getTotalLength();
      for (let d = 30; d < L; d += 16 + rnd() * 10) {
        const pt = p.getPointAtLength(d), side = (Math.round(d / 20) % 2 ? 1 : -1);
        const leaf = document.createElementNS(NS, "ellipse");
        leaf.setAttribute("cx", pt.x + side * 6); leaf.setAttribute("cy", pt.y + 6);
        leaf.setAttribute("rx", 3 + rnd() * 1.5); leaf.setAttribute("ry", 10 + rnd() * 6);
        leaf.setAttribute("transform", `rotate(${side * (18 + rnd() * 20)} ${pt.x} ${pt.y})`);
        leaf.setAttribute("class", "l" + (1 + Math.floor(rnd() * 4)));
        leaf.setAttribute("opacity", (0.35 + rnd() * 0.5).toFixed(2));
        g.appendChild(leaf);
      }
    }
  })();

  /* ---------- hero ---------- */
  $("brand").textContent = S.name;
  $("hero").innerHTML = `
    <div class="portrait-wrap"><img class="portrait" src="${esc(S.photo)}" alt="Portrait of ${esc(S.name)}"></div>
    <div class="intro">
      <h1>${esc(S.name)}<span class="native" lang="zh">${esc(S.nameNative)}</span></h1>
      <p class="role">${esc(S.position)}<br>${esc(S.affiliation)}</p>
      ${S.bio.map((p) => `<p>${p}</p>`).join("")}
      <ul class="links">${S.links.filter((l) => l.url).map((l) =>
        `<li><a class="pill" href="${esc(l.url)}"${l.url.startsWith("mailto:") ? ' data-email="' + esc(l.url.slice(7)) + '"' : ' target="_blank" rel="noopener"'}>${l.url.startsWith("mailto:") ? ICONS.mail : ""}${esc(l.label)}</a></li>`).join("")}</ul>
    </div>`;

  const R = S.recruiting;
  if (R) $("recruit").innerHTML = `
    <div class="badge"><span>🌱</span></div>
    <div><h3>${esc(R.title)}</h3><p>${R.text}</p></div>
    ${R.link ? `<a class="cta" href="${esc(R.link)}">${esc(R.linkText || "Learn more")}</a>` : ""}`;
  else $("recruit").remove();

  /* ---------- news ---------- */
  const NEWS_COLORS = { "Paper": "green", "Talk": "violet", "Visit": "blue", "Visitor": "amber", "New member": "rose", "Award": "teal" };
  const fmt = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  const shown = S.newsShown || 6, list = $("news-list");
  list.innerHTML = S.news.map((n, i) => `
    <li${i >= shown ? " hidden" : ""}>
      <time datetime="${n.date}">${fmt(n.date)}</time>
      <span class="tag c-${NEWS_COLORS[n.type] || "teal"}">${esc(n.type || "News")}</span>
      <span>${n.text}</span>
    </li>`).join("");
  if (S.news.length > shown) {
    const b = document.createElement("button");
    const label = () => (open ? "Show fewer" : `Show all ${S.news.length} news items`);
    let open = false; b.className = "textbtn"; b.textContent = label(); b.setAttribute("aria-expanded", "false");
    b.onclick = () => {
      open = !open; b.setAttribute("aria-expanded", String(open)); b.textContent = label();
      [...list.children].forEach((li, i) => { if (i >= shown) li.hidden = !open; });
    };
    list.after(b);
  }

  /* ---------- research directions & projects ---------- */
  $("research-list").innerHTML = S.research.map((r) => `
    <div class="theme-card c-${esc(r.color)}">
      <div class="icon">${ICONS[r.icon] || ICONS.shield}</div>
      <h3>${esc(r.title)}</h3><p>${r.text}</p>
    </div>`).join("");

  const card = (p) => `<article class="project c-${esc(p.color)}${/seek/i.test(p.status) ? " seeking" : ""}">
      <span class="status">${esc(p.status)}</span><h3>${esc(p.name)}</h3><p>${p.summary}</p></article>`;
  const ongoing = S.projects.filter((p) => !/seek/i.test(p.status)), seeking = S.projects.filter((p) => /seek/i.test(p.status));
  $("project-list").innerHTML =
    (ongoing.length ? `<h3 class="sub">Ongoing</h3><div class="projects ongoing">${ongoing.map(card).join("")}</div>` : "") +
    (seeking.length ? `<h3 class="sub">Looking for collaborators</h3><div class="projects seeking-grid">${seeking.map(card).join("")}</div>` : "");

  /* ---------- publications ---------- */
  $("scholar-link").href = (S.links.find((l) => /scholar/i.test(l.label)) || {}).url || "#";
  const counts = {};
  S.papers.forEach((p) => (p.tags || []).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  const topics = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  const topicColor = Object.fromEntries(topics.map((t, i) => [t, PALETTE[i % PALETTE.length]]));
  const hi = S.highlightName;
  const authors = (a) => esc(a).split(hi).join(`<b>${esc(hi)}</b>`);
  const role = (p) => { const a = (p.authors || "").trim(); return a.startsWith(hi) ? "First author" : a.endsWith(hi) ? "Last author" : ""; };
  const VM = S.venueMonths || {};
  const venueBase = (v) => (v || "").replace(/,.*$/, "").replace(/\b(19|20)\d\d\b/g, "").replace(/Findings of|\((Main|Findings)\)|\bDemo\b|\bSRW\b|\bWorkshop\b|\bpreprint\b|IJCNLP-/g, "").trim();
  const month = (p) => { const b = venueBase(p.venue); const k = b + " " + p.year; return k in VM ? VM[k] : b in VM ? VM[b] : 0; };
  const track = (v) => /Findings/.test(v) ? 1 : /Demo|SRW|Workshop/.test(v) ? 2 : 0;
  const order = (x, z) => month(z) - month(x) || venueBase(x.venue).localeCompare(venueBase(z.venue)) ||
    track(x.venue) - track(z.venue) || (role(z) ? 1 : 0) - (role(x) ? 1 : 0);
  let current = "selected";

  $("filters").innerHTML =
    `<button data-key="selected"><i style="background:var(--amber)"></i>Selected <small>${S.papers.filter((p) => p.selected).length}</small></button>` +
    `<button data-key="all"><i></i>All <small>${S.papers.length}</small></button>` +
    topics.map((t) => `<button class="c-${topicColor[t]}" data-key="tag:${esc(t)}"><i></i>${esc(t)} <small>${counts[t]}</small></button>`).join("");
  $("filters").onclick = (e) => { const b = e.target.closest("button"); if (b) { current = b.dataset.key; renderPubs(); } };

  function renderPubs() {
    const items = S.papers.filter((p) => current === "all" || (current === "selected" ? p.selected : (p.tags || []).includes(current.slice(4))));
    const years = [...new Set(items.map((p) => p.year))];
    $("pub-list").innerHTML = years.map((y) => `
      <div class="year"><h3>${y}</h3><ul class="pubs">${items.filter((p) => p.year === y).sort(order).map((p) => {
        const c = p.tags && p.tags.length ? topicColor[p.tags[0]] : "";
        const title = p.link ? `<a href="${esc(p.link)}">${esc(p.title)}</a>` : esc(p.title);
        return `<li class="${c ? "c-" + c : ""}">
          <span class="title">${title}</span>
          <span class="authors">${authors(p.authors)}</span>
          <span class="meta"><span class="venue">${esc(p.venue)}</span>${(p.tags || []).map((t) => `<span class="tag c-${topicColor[t]}">${esc(t)}</span>`).join("")}</span>
        </li>`;
      }).join("")}</ul></div>`).join("") || `<p class="note">No papers match this filter yet.</p>`;
    $("filters").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.key === current)));
  }
  renderPubs();

  /* ---------- group ---------- */
  const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  $("group-list").innerHTML = S.people.map((g) => `
    <div class="people-group c-${esc(g.color)}">
      <h3>${esc(g.group)}</h3>
      <div class="people">${g.members.map((m) => `
        <div class="person">
          ${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">`
                    : `<img alt="" src="data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='62' font-size='36' text-anchor='middle' fill='%23888' font-family='sans-serif'>${initials(m.name)}</text></svg>`)}">`}
          ${m.url ? `<a class="name" href="${esc(m.url)}">${esc(m.name)}</a>` : `<span class="name">${esc(m.name)}</span>`}
          <div class="prole">${esc(m.role)}</div>
          <div class="interests">${(m.interests || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>`).join("")}
      </div>
    </div>`).join("");

  /* ---------- teaching & footer ---------- */
  $("teach-list").innerHTML = S.teaching.map((t, i) => `
    <div class="course c-${PALETTE[(i + 1) % PALETTE.length]}">
      <div class="code">${esc(t.code)}</div><p>${esc(t.what)}</p><div class="meta">${esc(t.where)}, ${esc(t.when)}</div>
    </div>`).join("");
  $("foot").innerHTML = `<p>${esc(S.name)} · ${esc(S.address)}</p><p>Last updated ${esc(S.lastUpdated)}</p>`;
})();
