/* ------------------------------------------------------------------
   BARRA DE NAVEGAÇÃO COMPARTILHADA
   Cole esta linha no <head> ou no fim do <body> de CADA portfólio:

   <script src="https://jfeelix-hub.vercel.app/portfolios.js"></script>
   <script src="https://jfeelix-hub.vercel.app/nav.js" defer></script>

   Ela cria uma barra fixa no topo com o link de volta ao hub e
   os atalhos para os outros portfólios. O portfólio atual é
   destacado automaticamente pelo endereço da página.
------------------------------------------------------------------- */
(function () {
  var lista = window.PORTFOLIOS || [];
  var hub = window.HUB_URL || "/";
  var aqui = location.href;

  var css = "\
  #hubnav{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;align-items:center;gap:6px;\
  padding:8px 16px;background:#1e1a16;color:#f3ece0;font:500 12px/1 'Space Mono',ui-monospace,monospace;\
  letter-spacing:.04em;overflow-x:auto;white-space:nowrap;scrollbar-width:none}\
  #hubnav::-webkit-scrollbar{display:none}\
  #hubnav a{color:inherit;text-decoration:none;padding:7px 10px;border-radius:999px;opacity:.72;transition:.2s}\
  #hubnav a:hover{opacity:1;background:rgba(243,236,224,.12)}\
  #hubnav a.home{opacity:1;font-weight:700;margin-right:6px;padding-left:0}\
  #hubnav a.home b{color:#d9805a}\
  #hubnav a.on{opacity:1;background:#b5532f}\
  #hubnav a.off{opacity:.35;pointer-events:none}\
  body{padding-top:40px!important}";

  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var nav = document.createElement("nav");
  nav.id = "hubnav";
  nav.setAttribute("aria-label", "Portfólios de João Felix");

  var html = '<a class="home" href="' + hub + '">← <b>jfeelix</b></a>';
  lista.forEach(function (p) {
    var ativo = p.status === "no-ar";
    var atual = ativo && aqui.indexOf(p.url.replace(/#.*$/, "")) === 0;
    html += '<a href="' + p.url + '" class="' + (atual ? "on" : "") + (ativo ? "" : " off") +
            '" title="' + (ativo ? p.sub : "Em breve") + '">' + p.titulo + "</a>";
  });
  nav.innerHTML = html;
  document.body.insertBefore(nav, document.body.firstChild);
})();
