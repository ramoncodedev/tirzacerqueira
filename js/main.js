/* Tirza Cerqueira | Psicóloga — Link bio
   Animação de entrada dos elementos (.reveal) ao rolar a página */

(function() {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(e) {
      e.classList.add('in')
    });
    return;
  }
  var io = new IntersectionObserver(function(en) {
    en.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    })
  }, {
    threshold: .12
  });
  els.forEach(function(e) {
    io.observe(e)
  });
})();
