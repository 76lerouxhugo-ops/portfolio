/* ==========================================================
   MAIN.JS
   Chaque fonctionnalité est un module indépendant, lancé
   depuis init() en bas du fichier.
   ========================================================== */
(function () {
  "use strict";

  const C = window.CONTENT;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (sel) => document.querySelector(sel);
  let lenis = null;

  /* Lit une valeur de CONTENT à partir d'un chemin "hero.tagline" */
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), C);
  /* Petit utilitaire pour générer du HTML à partir d'une liste */
  const list = (arr, fn) => arr.map(fn).join("");

  /* ======================================================
     RENDU DES TEXTES ET DES SECTIONS
     ====================================================== */
  function renderContent() {
    document.querySelectorAll("[data-content]").forEach((el) => {
      const value = get(el.dataset.content);
      if (typeof value === "string") el.textContent = value;
    });

    // Textes d'interface (accessibilité, langue)
    $("#skipLink").textContent = C.ui.skip;
    $("#modalClose").setAttribute("aria-label", C.ui.close);
    $("#simPrev").setAttribute("aria-label", C.ui.prev);
    $("#simNext").setAttribute("aria-label", C.ui.next);
    const lt = $("#langToggle");
    lt.textContent = C.ui.langSwitch;
    lt.setAttribute("aria-label", C.ui.langLabel);
    lt.setAttribute("lang", window.LANG === "fr" ? "en" : "fr");

    // Navigation
    $("#nav").innerHTML = list(C.nav, (l) => `<li><a href="${l.href}">${l.label}</a></li>`);

    // Boutons du hero
    [["#ctaPrimary", C.hero.ctaPrimary], ["#ctaSecondary", C.hero.ctaSecondary]].forEach(([id, cta]) => {
      const a = $(id);
      a.href = cta.href;
      a.querySelector("span").textContent = cta.label;
    });
    $("#rolesSr").textContent = C.hero.roles.join(", ");
    $("#typed").setAttribute("aria-hidden", "true");

    // 2. Chiffres clés
    $("#stats").innerHTML = list(C.stats, (s) => `
      <li class="stat card reveal">
        <span class="stat__num" data-count="${s.value}" data-prefix="${s.prefix}" data-suffix="${s.suffix}"
              aria-label="${s.prefix}${s.value}${s.suffix}">${s.prefix}0${s.suffix}</span>
        <span class="stat__label">${s.label}</span>
      </li>`);

    // 3. Mon rôle
    const r = C.role;
    $("#roleContent").innerHTML = `
      <div class="role__text reveal">
        <p class="kicker">${r.kicker}</p>
        <h2 id="role-title">${r.title}</h2>
        ${list(r.text, (p) => `<p>${p}</p>`)}
      </div>
      <div class="role__aside">
        <div class="card role__vision reveal"><h3>${r.vision.title}</h3><p>${r.vision.text}</p></div>
        <dl class="card role__list reveal">
          ${list(r.profile, (p) => `<div><dt>${p.label}</dt><dd>${p.value}</dd></div>`)}
        </dl>
      </div>`;

    // 4. Projets : filtres + cartes
    $("#filters").innerHTML = list(C.projectsSection.filters, (f, i) =>
      `<button type="button" class="filter" data-filter="${f}" aria-pressed="${i === 0}">${f}</button>`);
    $("#bento").innerHTML = list(C.projects, (p) => `
      <li class="bento__item ${p.size ? "bento__item--" + p.size : ""} reveal" data-tags="${p.tags.join(",")}">
        <button type="button" class="project card tilt" data-project="${p.id}" aria-haspopup="dialog">
          <span class="project__tags">${list(p.tags, (t) => `<span class="tag">${t}</span>`)}</span>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          ${p.size === "large" ? `<p class="project__value"><strong>${C.ui.modal.value} :</strong> ${p.value}</p>` : ""}
          <span class="project__foot">
            ${p.status ? `<span class="status">${p.status}</span>` : "<span></span>"}
            <span class="project__more">${C.projectsSection.more} →</span>
          </span>
        </button>
      </li>`);

    // 5. Méthode
    $("#method").innerHTML = list(C.method.steps, (s, i) => `
      <li class="method__step reveal" style="transition-delay:${i * 80}ms">
        <span class="method__num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${s.title}</h3><p>${s.text}</p>
      </li>`);

    // 6. Compétences
    $("#skills").innerHTML = list(C.skills.groups, (g, i) => `
      <div class="skill card reveal" style="transition-delay:${i * 80}ms">
        <h3>${g.title}</h3><ul>${list(g.items, (it) => `<li>${it}</li>`)}</ul>
      </div>`);
    $("#tools").innerHTML = list(C.skills.tools, (t) => `<li class="chip">${t}</li>`);

    // 7. Vibe coding
    $("#vibeSteps").innerHTML = list(C.vibe.steps, (s, i) => `
      <li class="vibe__step reveal" style="transition-delay:${i * 100}ms">
        <span>${i + 1}</span><div><h3>${s.title}</h3><p>${s.text}</p></div>
      </li>`);
    $("#promptCode").innerHTML = highlightPrompt(C.vibe.prompt);
    $("#built").innerHTML = list(C.vibe.tools, (t, i) => `
      <li class="reveal" style="transition-delay:${i * 70}ms"><div class="card tilt"><h4>${t.title}</h4><p>${t.text}</p></div></li>`);
    const sim = C.vibe.sim;
    $("#simServices").innerHTML = list(sim.services, (s, i) =>
      `<input type="radio" name="service" id="srv${i}" value="${i}" ${i === 0 ? "checked" : ""}><label for="srv${i}">${s}</label>`);
    $("#simPains").innerHTML = list(sim.pains, (p, i) =>
      `<input type="radio" name="pain" id="pain${i}" value="${i}" ${i === 0 ? "checked" : ""}><label for="pain${i}">${p.label}</label>`);

    // 8. International
    $("#intl").innerHTML = list(C.international.items, (it) => `
      <article class="card intl__card tilt reveal">
        <span class="intl__place" aria-hidden="true">${it.place}</span>
        <small>${it.place} · ${it.detail}</small>
        <h3>${it.theme}</h3><p>${it.value}</p>
      </article>`);

    // 9. Timeline
    $("#timeline").insertAdjacentHTML("beforeend", list(C.timeline.items, (t) => `
      <li class="tl-item reveal"><time>${t.date}</time><h3>${t.title}</h3><p>${t.text}</p></li>`));

    // 10. Retours
    $("#fbDomains").innerHTML = list(C.feedback.domains, (d) => `<li>${d}</li>`);
    $("#fbWords").innerHTML = list(C.feedback.keywords, (k, i) =>
      `<li class="reveal" style="transition-delay:${i * 90}ms">${k}</li>`);

    // 11. Valeur
    $("#value").innerHTML = list(C.value.items, (v, i) => `
      <li class="reveal" style="transition-delay:${i * 80}ms"><div class="card"><h3>${v.title}</h3><p>${v.text}</p></div></li>`);

    // 12. Contact
    $("#mailBtn").href = "mailto:" + C.meta.email;
    $("#mailBtn span").textContent = C.contact.emailLabel;
    $("#linkedinBtn").href = C.meta.linkedin;
    $("#linkedinBtn span").textContent = C.contact.linkedinLabel;
    $("#mailText").textContent = C.meta.email;
  }

  /* Coloration simple du prompt (titres et numéros) */
  function highlightPrompt(text) {
    const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    return esc.split("\n").map((line) => {
      if (line.startsWith("#")) return `<span class="c-head">${line}</span>`;
      return line.replace(/^(\d+\.)/, '<span class="c-num">$1</span>');
    }).join("\n");
  }

  /* ======================================================
     HERO
     ====================================================== */
  function typewriter() {
    const el = $("#typed");
    const roles = C.hero.roles;
    if (reduceMotion) { el.textContent = roles[0]; return; }

    let r = 0, i = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = deleting ? 45 : 85;
      if (!deleting && i === word.length) { delay = 1800; deleting = true; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ======================================================
     NAVIGATION, THÈME, SCROLL
     ====================================================== */
  function toggleTheme() {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncThemeButton();
  }
  function syncThemeButton() {
    const btn = $("#themeToggle");
    const dark = document.documentElement.dataset.theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? C.ui.themeToLight : C.ui.themeToDark);
  }
  function themeToggle() {
    syncThemeButton();
    $("#themeToggle").addEventListener("click", toggleTheme);
  }

  function mobileMenu() {
    const burger = $("#burger");
    const nav = $("#headerNav");
    const close = () => { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", C.ui.menuOpen); };
    burger.setAttribute("aria-label", C.ui.menuOpen);
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? C.ui.menuClose : C.ui.menuOpen);
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  function smoothScroll() {
    // Liens d'ancre : scroll fluide avec décalage du header
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute("href").length < 2) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -72 });
      else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });

    if (reduceMotion || typeof window.Lenis === "undefined") return;
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* Barre de progression, header, parallax et remplissage de la timeline */
  function scrollUi() {
    const bar = $(".progress__bar");
    const header = $("#header");
    const blobs = document.querySelectorAll("[data-parallax]");
    const tl = $("#timeline");
    const fill = $(".timeline__fill");
    let ticking = false;

    const update = () => {
      const y = scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      header.classList.toggle("is-scrolled", y > 10);

      if (!reduceMotion) {
        if (y < innerHeight * 1.2) blobs.forEach((b) => (b.style.translate = `0 ${y * b.dataset.parallax}px`));
        const r = tl.getBoundingClientRect();
        const p = Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1);
        fill.style.transform = `scaleY(${p})`;
      }
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ======================================================
     ANIMATIONS AU SCROLL
     ====================================================== */
  function reveals() {
    const items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  }

  function counters() {
    const nums = document.querySelectorAll("[data-count]");
    const write = (el, v) => (el.textContent = el.dataset.prefix + v + el.dataset.suffix);
    const run = (el) => {
      const target = +el.dataset.count;
      if (reduceMotion) return write(el, target);
      const start = performance.now(), dur = 1600;
      const step = (now) => {
        const t = Math.min((now - start) / dur, 1);
        write(el, Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) return nums.forEach(run);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
  }

  /* ======================================================
     MICRO-INTERACTIONS
     ====================================================== */
  function customCursor() {
    if (!finePointer || reduceMotion) return;
    document.body.classList.add("has-cursor");
    const cursor = $(".cursor");
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;

    addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    });
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("mouseover", (e) => {
      cursor.classList.toggle("is-hover", !!e.target.closest("a, button, label, .chip"));
    });
  }

  function magnetic() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll(".magnetic").forEach((el) => {
      const label = el.querySelector("span");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
        if (label) label.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
        el.style.transform = "";
        if (label) label.style.transform = "";
        setTimeout(() => (el.style.transition = ""), 500);
      });
    });
  }

  /* Cartes en tilt 3D */
  function tilt() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll(".tilt").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `rotateX(${-py * 7}deg) rotateY(${px * 9}deg) translateZ(0)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ======================================================
     PROJETS : FILTRES + MODALE
     ====================================================== */
  function projectFilters() {
    const buttons = document.querySelectorAll(".filter");
    const items = document.querySelectorAll(".bento__item");
    buttons.forEach((btn) => btn.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      const f = btn.dataset.filter;
      const all = f === C.projectsSection.filters[0];
      items.forEach((it) => {
        const show = all || it.dataset.tags.split(",").includes(f);
        it.classList.toggle("is-hidden", !show);
        if (show) it.classList.add("is-in");
      });
    }));
  }

  function projectModal() {
    const modal = $("#modal");
    const body = $("#modalBody");
    let lastFocus = null;

    document.addEventListener("click", (e) => {
      const card = e.target.closest("[data-project]");
      if (!card) return;
      const p = C.projects.find((x) => x.id === card.dataset.project);
      const M = C.ui.modal;
      lastFocus = card;
      body.innerHTML = `
        <span class="project__tags">${list(p.tags, (t) => `<span class="tag">${t}</span>`)}</span>
        <h2 id="modalTitle">${p.title}</h2>
        ${p.status ? `<span class="status">${p.status}</span>` : ""}
        <h3>${M.context}</h3><p>${p.context}</p>
        <h3>${M.role}</h3><p>${p.role}</p>
        <h3>${M.actions}</h3><ul>${list(p.actions, (a) => `<li>${a}</li>`)}</ul>
        <h3>${M.deliverables}</h3><ul>${list(p.deliverables, (d) => `<li>${d}</li>`)}</ul>
        <p class="modal__value"><strong>${M.value} : </strong>${p.value}</p>`;
      modal.showModal();
      if (lenis) lenis.stop();
    });

    const close = () => modal.close();
    $("#modalClose").addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); }); // clic sur le fond
    modal.addEventListener("close", () => { if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); });
  }

  /* ======================================================
     SIMULATEUR « DU BESOIN À LA SOLUTION »
     Mise à jour en direct + étapes cliquables + lecture auto
     ====================================================== */
  function simulator() {
    const S = C.vibe.sim;
    const form = $("#simForm");
    const card = $("#simCard");
    const tabs = $("#simTabs");
    const panel = $("#simPanel");
    const fill = $("#simFill");
    const playBtn = $("#simPlay");
    const playLabel = $("#simPlayLabel");
    let current = 0, timer = null, service, pain;

    const fillText = (t) => t.replace(/\{service\}/g, service).replace(/\{pain\}/g, pain.label).replace(/\{solution\}/g, pain.solution);

    // Onglets des 5 étapes
    tabs.innerHTML = list(S.steps, (st, i) => `
      <li role="presentation"><button type="button" role="tab" class="sim__tab" data-step="${i}" aria-selected="false">
        <span class="sim__tab-num">${i + 1}</span><span class="sim__tab-label">${st.title}</span>
      </button></li>`);

    function renderCard() {
      const F = S.fields;
      card.innerHTML = `
        <header class="sim__card-head"><span>${S.cardTitle}</span><span class="sim__pill">${service}</span></header>
        <dl class="sim__fields">
          <div><dt>${F.pain}</dt><dd>${pain.label}</dd></div>
          <div class="sim__field--wide"><dt>${F.solution}</dt><dd>${pain.solution.charAt(0).toUpperCase() + pain.solution.slice(1)}</dd></div>
          <div><dt>${F.tools}</dt><dd class="sim__tools">${list(pain.tools, (t) => `<span>${t}</span>`)}</dd></div>
          <div><dt>${F.benefit}</dt><dd>${pain.benefit}</dd></div>
        </dl>`;
      card.classList.remove("is-flash"); void card.offsetWidth; card.classList.add("is-flash");
    }

    function goTo(i) {
      current = (i + S.steps.length) % S.steps.length;
      const st = S.steps[current];
      tabs.querySelectorAll(".sim__tab").forEach((b, k) => {
        b.setAttribute("aria-selected", String(k === current));
        b.classList.toggle("is-done", k < current);
      });
      fill.style.transform = `scaleX(${current / (S.steps.length - 1)})`;
      panel.innerHTML = `
        <div class="sim__panel-inner">
          <p class="sim__panel-step">${C.ui.stepOf.replace("{n}", current + 1).replace("{total}", S.steps.length)}</p>
          <h4>${st.title}</h4>
          <p>${fillText(st.text)}</p>
          <div class="sim__meta">
            <span><b>${S.deliverableLabel} :</b> ${st.deliverable}</span>
            <span><b>${S.actorsLabel} :</b> ${fillText(st.actors)}</span>
          </div>
        </div>`;
    }

    function update() {
      const fd = new FormData(form);
      service = S.services[+fd.get("service")];
      pain = S.pains[+fd.get("pain")];
      renderCard();
      goTo(0);
    }

    function setPlaying(on) {
      clearInterval(timer); timer = null;
      if (on) timer = setInterval(() => goTo(current + 1), 2600);
      playLabel.textContent = on ? "❚❚ " + S.pause : "▶ " + S.play;
      playBtn.setAttribute("aria-pressed", String(on));
    }

    form.addEventListener("change", () => { update(); setPlaying(!reduceMotion); });
    tabs.addEventListener("click", (e) => {
      const b = e.target.closest("[data-step]");
      if (b) { setPlaying(false); goTo(+b.dataset.step); }
    });
    $("#simPrev").addEventListener("click", () => { setPlaying(false); goTo(current - 1); });
    $("#simNext").addEventListener("click", () => { setPlaying(false); goTo(current + 1); });
    playBtn.addEventListener("click", () => setPlaying(!timer));

    update();
    setPlaying(false);

    // Lecture auto au premier passage à l'écran
    if (!reduceMotion && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((en) => {
        if (en[0].isIntersecting) { setPlaying(true); io.disconnect(); }
      }, { threshold: 0.5 });
      io.observe($("#sim"));
    }
  }

  /* ======================================================
     EASTER EGG : TERMINAL
     ====================================================== */
  function terminal() {
    const T = C.terminal;
    const dlg = $("#terminal");
    const out = $("#termOut");
    const input = $("#termInput");
    const print = (html) => { out.insertAdjacentHTML("beforeend", html + "\n"); out.scrollTop = out.scrollHeight; };

    const open = () => {
      if (dlg.open) return;
      out.innerHTML = "";
      print(T.welcome);
      dlg.showModal();
      if (lenis) lenis.stop();
      input.focus();
    };
    $("#termOpen").addEventListener("click", open);
    // Raccourci clavier : touche ² ou ` (hors champ de saisie)
    document.addEventListener("keydown", (e) => {
      if ((e.key === "²" || e.key === "`") && !e.target.closest("input, textarea")) { e.preventDefault(); open(); }
    });
    dlg.addEventListener("close", () => { if (lenis) lenis.start(); });

    const commands = {
      help: () => print(T.help.join("\n")),
      projets: () => print(list(C.projects, (p, i) => `${String(i + 1).padStart(2, "0")}  ${p.title}${p.status ? "  [" + p.status + "]" : ""}\n`).trimEnd()),
      contact: () => print(`mail      <a href="mailto:${C.meta.email}">${C.meta.email}</a>\nlinkedin  <a href="${C.meta.linkedin}" target="_blank" rel="noopener">${C.meta.linkedin}</a>`),
      theme: () => { toggleTheme(); print(C.ui.themeIs + document.documentElement.dataset.theme); },
      clear: () => (out.innerHTML = ""),
      exit: () => dlg.close()
    };

    $("#termForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const cmd = input.value.trim().toLowerCase();
      input.value = "";
      if (!cmd) return;
      print(`<span class="t-cmd">$ ${cmd.replace(/</g, "&lt;")}</span>`);
      (commands[cmd] || (() => print(T.unknown)))();
    });
  }

  /* ======================================================
     LANGUE : FR / EN (le choix est mémorisé)
     ====================================================== */
  function langToggle() {
    $("#langToggle").addEventListener("click", () => {
      try { localStorage.setItem("lang", window.LANG === "fr" ? "en" : "fr"); } catch (e) {}
      try { sessionStorage.setItem("scrollY", String(scrollY)); } catch (e) {}
      location.reload();
    });
    // Revenir au même endroit après le changement de langue
    try {
      const y = sessionStorage.getItem("scrollY");
      if (y) { sessionStorage.removeItem("scrollY"); requestAnimationFrame(() => scrollTo(0, +y)); }
    } catch (e) {}
  }

  /* ======================================================
     LANCEMENT
     ====================================================== */
  function init() {
    renderContent();
    langToggle();
    themeToggle();
    mobileMenu();
    typewriter();
    smoothScroll();
    scrollUi();
    reveals();
    counters();
    customCursor();
    magnetic();
    tilt();
    projectFilters();
    projectModal();
    simulator();
    terminal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
