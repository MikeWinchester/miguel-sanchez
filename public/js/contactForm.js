  document.addEventListener('DOMContentLoaded', () => {
    // ========== ELEMENTOS DEL DOM ==========
    const form = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const errorModal = document.getElementById('error-modal');
    const successCloseBtn = document.getElementById('success-close-btn');
    const errorCloseBtn = document.getElementById('error-close-btn');
    
    // ========== FUNCIONES PRINCIPALES ==========
    // Mostrar modal con animación
    const showModal = (modal) => {
      modal.classList.remove('hidden');
      // Forzar reflow para activar la transición
      void modal.offsetWidth;
      modal.classList.add('show');
    };
    
    // Ocultar modal con animación
    const hideModal = (modal, callback) => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
        if (callback) callback();
      }, 300); // Coincide con la duración de la transición
    };
    
    // Bloquear/restaurar scroll
    const toggleBodyScroll = (block) => {
      if (block) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.scrollBehavior = 'auto';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.scrollBehavior = '';
      }
    };
    
    // Cuenta regresiva automática
    const startCountdown = (seconds, elementId, callback) => {
      let countdown = seconds;
      const element = document.getElementById(elementId);
      if (!element) return;
      
      element.textContent = countdown; // Mostrar inmediatamente
      
      const interval = setInterval(() => {
        countdown--;
        element.textContent = countdown;
        
        if (countdown <= 0) {
          clearInterval(interval);
          callback();
        }
      }, 1000);
    };
    
    // ========== MANEJADOR DEL FORMULARIO ==========
    const handleSubmit = async (e) => {
      e.preventDefault();
      toggleBodyScroll(true);
      
      const submitButton = form.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      
      // Mostrar estado de carga
      submitButton.innerHTML = `
        <span class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        </span>
      `;
      submitButton.disabled = true;
      
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          showModal(successModal);
          startCountdown(5, 'success-countdown', () => {
            hideModal(successModal, () => toggleBodyScroll(false));
          });
          form.reset();
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        console.error('Error:', error);
        showModal(errorModal);
        startCountdown(5, 'error-countdown', () => {
          hideModal(errorModal, () => toggleBodyScroll(false));
        });
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    };
    
    // ========== EVENT LISTENERS ==========
    form.addEventListener('submit', handleSubmit);
    
    // Cerrar con botones
    [successCloseBtn, errorCloseBtn].forEach(btn => {
      btn?.addEventListener('click', () => {
        const modal = btn.id === 'success-close-btn' ? successModal : errorModal;
        hideModal(modal, () => toggleBodyScroll(false));
      });
    });
    
    // Cerrar haciendo clic fuera
    [successModal, errorModal].forEach(modal => {
      modal?.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
          hideModal(modal, () => toggleBodyScroll(false));
        }
      });
    });
  });