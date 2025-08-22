class ProjectCarousel {
  constructor(carouselId, prevBtnId, nextBtnId, projectCount, mobilePrevBtnId = null, mobileNextBtnId = null) {
    this.carousel = document.getElementById(carouselId);
    this.prevBtn = document.getElementById(prevBtnId);
    this.nextBtn = document.getElementById(nextBtnId);
    this.mobilePrevBtn = mobilePrevBtnId ? document.getElementById(mobilePrevBtnId) : null;
    this.mobileNextBtn = mobileNextBtnId ? document.getElementById(mobileNextBtnId) : null;
    this.projectCount = projectCount;
    this.currentIndex = 0;
    this.itemsPerView = window.innerWidth >= 768 ? 2 : 1;
    this.isTransitioning = false;
    
    // Bind del contexto para el event listener
    this.resizeHandler = () => {
      const newItemsPerView = window.innerWidth >= 768 ? 2 : 1;
      if (newItemsPerView !== this.itemsPerView) {
        this.itemsPerView = newItemsPerView;
        this.updateCarousel();
        this.updateButtonVisibility();
      }
    };
    
    this.init();
  }
  
  init() {
    if (!this.carousel) return;
    
    // Verificar si los botones deben ser visibles
    this.updateButtonVisibility();
    
    // Solo inicializar carrusel si es necesario
    if (this.shouldShowButtons()) {
      // Crear elementos adicionales para navegación circular
      this.createCircularItems();
      
      // Event listeners para botones de desktop
      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
      
      // Event listeners para botones de móvil
      if (this.mobilePrevBtn) this.mobilePrevBtn.addEventListener('click', () => this.prev());
      if (this.mobileNextBtn) this.mobileNextBtn.addEventListener('click', () => this.next());
      
      // Configurar el carrusel para empezar en la posición correcta
      this.currentIndex = this.projectCount; // Empezar en el primer conjunto duplicado
      this.updateCarousel(false); // Sin transición inicial
      
      // Escuchar el final de las transiciones
      this.carousel.addEventListener('transitionend', () => this.handleTransitionEnd());
    }
    
    window.addEventListener('resize', this.resizeHandler);
  }
  
  shouldShowButtons() {
    const isMobile = window.innerWidth < 768;
    return isMobile ? this.projectCount > 1 : this.projectCount > 2;
  }
  
  updateButtonVisibility() {
    const shouldShow = this.shouldShowButtons();
    const isMobile = window.innerWidth < 768;
    
    // Botones de desktop
    if (this.prevBtn && this.nextBtn) {
      const showDesktop = !isMobile && this.projectCount > 2;
      this.prevBtn.style.display = showDesktop ? 'block' : 'none';
      this.nextBtn.style.display = showDesktop ? 'block' : 'none';
    }
    
    // Botones de móvil
    if (this.mobilePrevBtn && this.mobileNextBtn) {
      const showMobile = isMobile && this.projectCount > 1;
      this.mobilePrevBtn.style.display = showMobile ? 'block' : 'none';
      this.mobileNextBtn.style.display = showMobile ? 'block' : 'none';
    }
  }
  
  prev() {
    if (this.isTransitioning || !this.shouldShowButtons()) return;
    
    this.isTransitioning = true;
    this.currentIndex--;
    this.updateCarousel(true);
  }
  
  next() {
    if (this.isTransitioning || !this.shouldShowButtons()) return;
    
    this.isTransitioning = true;
    this.currentIndex++;
    this.updateCarousel(true);
  }
  
  updateCarousel(withTransition = true) {
    if (!this.carousel) return;
    
    const itemWidth = 100 / this.itemsPerView;
    const translateX = -(this.currentIndex * itemWidth);
    
    // Habilitar o deshabilitar transición
    this.carousel.style.transition = withTransition ? 'transform 0.5s ease-in-out' : 'none';
    this.carousel.style.transform = `translateX(${translateX}%)`;
    
    if (!withTransition) {
      this.isTransitioning = false;
    }
  }
  
  handleTransitionEnd() {
    this.isTransitioning = false;
    
    // Reposicionar para efecto infinito
    if (this.currentIndex >= this.projectCount * 2) {
      // Si llegamos al final, volver al inicio de los elementos duplicados
      this.currentIndex = this.projectCount;
      this.updateCarousel(false);
    } else if (this.currentIndex < this.projectCount) {
      // Si llegamos al principio, ir al final de los elementos originales
      this.currentIndex = this.projectCount * 2 - 1;
      this.updateCarousel(false);
    }
  }
  
  createCircularItems() {
    if (!this.carousel) return;
    
    const originalItems = Array.from(this.carousel.children);
    
    // Solo crear elementos circulares si es necesario
    if (originalItems.length === 0) return;
    
    // Agregar copias al final
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      this.carousel.appendChild(clone);
    });
    
    // Agregar copias al principio
    for (let i = originalItems.length - 1; i >= 0; i--) {
      const clone = originalItems[i].cloneNode(true);
      this.carousel.insertBefore(clone, this.carousel.firstChild);
    }
  }
  
  destroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

// Función para obtener el número de proyectos de cada tipo
function getProjectCounts() {
  const featuredItems = document.querySelectorAll('#featured-carousel .carousel-item');
  const otherItems = document.querySelectorAll('#other-carousel .carousel-item');
  
  return {
    featured: featuredItems.length,
    other: otherItems.length
  };
}

// Inicializar carruseles cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const counts = getProjectCounts();
  
  // Inicializar carrusel de proyectos destacados si hay proyectos
  if (counts.featured > 0) {
    new ProjectCarousel(
      'featured-carousel', 
      'featured-prev', 
      'featured-next', 
      counts.featured,
      'featured-prev-mobile',
      'featured-next-mobile'
    );
  }
  
  // Inicializar carrusel de otros proyectos si hay proyectos
  if (counts.other > 0) {
    new ProjectCarousel(
      'other-carousel', 
      'other-prev', 
      'other-next', 
      counts.other,
      'other-prev-mobile',
      'other-next-mobile'
    );
  }
});