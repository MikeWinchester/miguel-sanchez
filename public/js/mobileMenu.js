// src/scripts/mobileMenu.js
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('a[role="menuitem"]');

  // Early return si no hay elementos
  if (!mobileMenuButton || !mobileMenu || !mobileLinks) return;

  // Función para cerrar el menú
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileLinks.forEach(link => link.setAttribute('tabindex', '-1'));
  };

  // Función para abrir el menú
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileLinks.forEach(link => link.setAttribute('tabindex', '0'));
  };

  // Event listeners
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    isExpanded ? closeMenu() : openMenu();
  });

  // Cerrar al hacer clic en enlaces
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      mobileMenuButton.focus();
    }
  });

  // Trap focus (accesibilidad)
  mobileMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = Array.from(mobileMenu.querySelectorAll('a[role="menuitem"]'));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
});