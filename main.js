/**
 * Eficaz Controle de Pragas — main.js v2.0
 * Animations: scroll reveal, counter, typing, 3D tilt, smooth scroll, menu
 */
(function () {
  'use strict';

  var WA = '5533984568403';

  /* ─── HEADER SCROLL ─────────────────────────────────── */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ─── MOBILE MENU ───────────────────────────────────── */
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ─── SMOOTH SCROLL ─────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
    });
  });

  /* ─── TYPING EFFECT ─────────────────────────────────── */
  var typedEl = document.getElementById('typed-text');
  if (typedEl) {
    var words = ['pragas urbanas', 'baratas e ratos', 'mosquitos e cupins', 'cupins e brocas'];
    var wi = 0, ci = 0, deleting = false;
    function type() {
      var word = words[wi];
      typedEl.textContent = deleting ? word.slice(0, ci - 1) : word.slice(0, ci + 1);
      if (deleting) ci--; else ci++;
      if (!deleting && ci === word.length) { setTimeout(function () { deleting = true; type(); }, 2200); return; }
      if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      setTimeout(type, deleting ? 45 : 90);
    }
    setTimeout(type, 1000);
  }

  /* ─── SCROLL REVEAL ─────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('[data-reveal], [data-reveal-dir]');
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('revealed'); }, delay);
        revealObs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal],[data-reveal-dir]').forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ─── COUNTER ANIMATION ─────────────────────────────── */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 1600;
        var start = performance.now();
        function update(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        countObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { countObs.observe(el); });
  }

  /* ─── 3D CARD TILT ──────────────────────────────────── */
  document.querySelectorAll('.service-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r   = card.getBoundingClientRect();
      var x   = (e.clientX - r.left) / r.width  - 0.5;
      var y   = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = 'perspective(700px) rotateX(' + (-y * 8) + 'deg) rotateY(' + (x * 8) + 'deg) translateY(-6px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });

  /* ─── AUDIENCE CARD TILT ────────────────────────────── */
  document.querySelectorAll('.audience-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width  - 0.5;
      var y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = 'perspective(900px) rotateX(' + (-y * 5) + 'deg) rotateY(' + (x * 5) + 'deg) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });

  /* ─── ACTIVE NAV ON SCROLL ───────────────────────────── */
  var sections = document.querySelectorAll('section[id], div[id]');
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  window.addEventListener('scroll', function () {
    var y = window.pageYOffset + 120;
    sections.forEach(function (sec) {
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(function (a) {
          a.parentElement.classList.toggle('current', a.getAttribute('href') === '#' + sec.id);
        });
      }
    });
  }, { passive: true });

  /* ─── FORM → WHATSAPP ───────────────────────────────── */
  var form = document.getElementById('form-orcamento');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome     = (form.querySelector('[name="nome"]') || {}).value || '';
      var telefone = (form.querySelector('[name="telefone"]') || {}).value || '';
      var servico  = (form.querySelector('[name="servico"]') || {}).value || 'Não informado';
      var mensagem = (form.querySelector('[name="mensagem"]') || {}).value || '';
      var txt = 'Olá! Gostaria de solicitar um orçamento.\n\nNome: ' + nome +
                '\nWhatsApp: ' + telefone +
                '\nServiço: ' + servico +
                (mensagem ? '\nMensagem: ' + mensagem : '');
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(txt), '_blank', 'noopener');
    });
  }

  /* ─── SHOW ÁREA DO CLIENTE BUTTON ON DESKTOP ────────── */
  var btnCliente = document.getElementById('btn-area-cliente');
  if (btnCliente && window.innerWidth >= 1024) {
    btnCliente.style.display = 'inline-flex';
  }

  /* ─── HERO CONTENT ENTRANCE ─────────────────────────── */
  var heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'none';
      });
    });
  }

})();
