// AERO // OPTIC STUDIO ENGINE

document.addEventListener('DOMContentLoaded', () => {
  initBootSequence();
  initCustomCursor();
  initScrollReveals();
  initDynamicOrb();
  initSearchGlass();
});

function initBootSequence() {
  const boot = document.querySelector('.aero-boot');
  if(!boot) return;
  setTimeout(() => boot.classList.add('is-hidden'), 1400);
}

function initCustomCursor() {
  const cursor = document.querySelector('.aero-cursor');
  if(!cursor || window.matchMedia('(pointer: coarse)').matches) return;
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;
  
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function render() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  document.querySelectorAll('a, button, input, .aero-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

function initScrollReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
         entry.target.classList.add('is-revealed');
         observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  document.querySelectorAll('.aero-reveal').forEach(el => observer.observe(el));
}

function initDynamicOrb() {
  const orb = document.getElementById('AeroOrb');
  if(!orb) return;
  
  window.addEventListener('mousemove', e => {
    const offsetX = (e.clientX / window.innerWidth - 0.5) * 20;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 20;
    orb.style.transform = `translate(calc(-50% + ${offsetX}%), calc(-50% + ${offsetY}%))`;
  });
}

function initSearchGlass() {
  const trigger = document.querySelector('.aero-search-trigger');
  const modal = document.querySelector('.aero-modal');
  const close = document.querySelector('.aero-modal__close');
  const input = document.querySelector('.aero-modal__input');

  if(!modal || !trigger) return;

  const open = () => {
    modal.classList.add('is-open');
    setTimeout(() => input.focus(), 100);
  };
  
  const hide = () => {
    modal.classList.remove('is-open');
  };

  trigger.addEventListener('click', open);
  close.addEventListener('click', hide);
  
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && modal.classList.contains('is-open')) {
      hide();
    }
    if(e.key === '/' && !modal.classList.contains('is-open')) {
      if(document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      e.preventDefault();
      open();
      const gallery = document.querySelector('.aero-gallery');
      if(gallery) gallery.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
