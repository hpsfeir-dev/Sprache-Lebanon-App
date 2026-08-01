document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .hero-main.scenic{position:relative;overflow:hidden;min-height:520px;display:flex;flex-direction:column;justify-content:flex-end;background-image:linear-gradient(180deg,rgba(2,25,45,.06) 12%,rgba(3,28,25,.88) 90%),url("harissa-jounieh.png");background-size:cover;background-position:center;color:#fff}
    .hero-main.scenic .eyebrow{color:#ffd36e}.hero-main.scenic .lede{color:#eaf7f4}.hero-main.scenic .primary{background:#fff;color:#123a32}.hero-main.scenic .secondary{background:#f07862;color:#fff}
    .regional-photo{width:calc(100% + 48px);height:180px;margin:-24px -24px 20px;object-fit:cover;border-radius:27px 27px 14px 14px;border-bottom:1px solid var(--line)}
    .culture-banner{display:grid;grid-template-columns:1fr 1.2fr;align-items:center;gap:28px;margin-top:38px;padding:28px;overflow:hidden}
    .culture-banner img{width:100%;max-height:260px;object-fit:contain;filter:drop-shadow(0 14px 24px #0002)}
    .lesson-photo{width:100%;height:270px;object-fit:cover;border-radius:20px;margin:0 0 24px;box-shadow:var(--shadow)}
    .photo-label{display:inline-flex;gap:8px;align-items:center;margin-bottom:8px;padding:5px 10px;border-radius:999px;background:var(--mint);font-size:.74rem;font-weight:850}
    @media(max-width:650px){.hero-main.scenic{min-height:570px;background-position:62% center}.culture-banner{grid-template-columns:1fr}.regional-photo{height:150px}.lesson-photo{height:220px}}
  `;
  document.head.appendChild(style);

  const hero = document.querySelector(".hero-main");
  if (hero) hero.classList.add("scenic");

  const decorateRegions = () => {
    document.querySelectorAll("#regionGrid .region-card").forEach(card => {
      if (card.querySelector(".regional-photo")) return;
      const title = card.querySelector("h3")?.textContent || "";
      let src = "";
      let alt = "";
      if (title.includes("Teleferique")) { src = "harissa-view.png"; alt = "Harissa mit Blick auf die Küste"; }
      if (title.includes("Jeita")) { src = "jeita-grotto.png"; alt = "Felsformationen und Wasser in der Jeita-Grotte"; }
      if (!src) return;
      const img = document.createElement("img");
      img.className = "regional-photo";
      img.src = src;
      img.alt = alt;
      card.prepend(img);
    });
  };

  const region = document.querySelector("#region");
  if (region && !region.querySelector(".culture-banner")) {
    const banner = document.createElement("article");
    banner.className = "panel culture-banner";
    banner.innerHTML = `<div><span class="eyebrow">KULTUR LESEN LERNEN</span><h2>Symbole, Musik, Kaffee und Gastfreundschaft</h2><p>Die Bildsprache hilft dir, typische Wörter und Gesprächsanlässe schneller mit dem Libanon zu verbinden.</p><button class="primary" data-go="coach">Darüber sprechen →</button></div><img src="lebanon-culture.png" alt="Illustrationen libanesischer Kultur, Flagge, Musik, Kaffee und Kleidung">`;
    region.insertBefore(banner, region.querySelector(".sources"));
  }

  const lessonTitle = document.querySelector("#lessonTitle");
  const decorateLesson = () => {
    const body = document.querySelector(".lesson-body");
    const old = body?.querySelector(".lesson-photo-wrap");
    if (old) old.remove();
    const title = lessonTitle?.textContent || "";
    let src = "";
    let label = "";
    if (title.includes("Harissa")) { src = "harissa-jounieh.png"; label = "Harissa über der Bucht von Jounieh"; }
    if (title.includes("Jeita")) { src = "jeita-grotto.png"; label = "Jeita-Grotte"; }
    if (!src || !body) return;
    const wrap = document.createElement("div");
    wrap.className = "lesson-photo-wrap";
    wrap.innerHTML = `<span class="photo-label">⌖ ${label}</span><img class="lesson-photo" src="${src}" alt="${label}">`;
    body.insertBefore(wrap, document.querySelector("#phraseList"));
  };

  if (lessonTitle) new MutationObserver(decorateLesson).observe(lessonTitle, {childList:true,subtree:true});
  decorateRegions();
  new MutationObserver(decorateRegions).observe(document.querySelector("#regionGrid"), {childList:true});
});
