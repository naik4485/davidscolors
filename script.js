document.querySelectorAll('[data-gal]').forEach(function(g){
  var n = g.dataset.gal === 'all' ? PROJETS.length : parseInt(g.dataset.gal, 10);
  PROJETS.slice(0, n).forEach(function(p){
    var f = document.createElement('figure'), i = document.createElement('img'), c = document.createElement('figcaption');
    i.src = 'photos/projets/' + p.fichier; i.alt = p.legende; i.loading = 'lazy';
    c.textContent = p.legende; f.appendChild(i); f.appendChild(c); g.appendChild(f);
  });
});
function route(){
  var h = (location.hash || '#accueil').slice(1);
  if (!document.getElementById(h)) h = 'accueil';
  document.querySelectorAll('.page').forEach(function(p){ p.classList.toggle('on', p.id === h); });
  document.querySelectorAll('nav a').forEach(function(a){
    if (a.getAttribute('href') === '#' + h) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route); route();
document.getElementById('f').addEventListener('submit', function(e){
  e.preventDefault();
  var d = new FormData(this);
  var b = 'Nom : ' + d.get('nom') + '\nTéléphone : ' + d.get('tel') + '\n\n' + d.get('msg');
  location.href = 'mailto:davidcolors44@gmail.com?subject=' + encodeURIComponent('Demande de devis – site internet') + '&body=' + encodeURIComponent(b);
  document.getElementById('ok').textContent = 'Votre messagerie s’ouvre : envoyez le message pour finaliser la demande.';
});
