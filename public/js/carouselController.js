class ProjectCarousel {
  constructor(carouselId, prevBtnId, nextBtnId, projectCount) {
    this.carousel = document.getElementById(carouselId);
    this.prevBtn = document.getElementById(prevBtnId);
    this.nextBtn = document.getElementById(nextBtnId);
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
      }
    };
    
    this.init();
  }
  
  init() {
    if (!this.carousel || !this.prevBtn || !this.nextBtn) return;
    
    // Crear elementos adicionales para navegación circular
    this.createCircularItems();
    
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    window.addEventListener('resize', this.resizeHandler);
    
    // Configurar el carrusel para empezar en la posición correcta
    this.currentIndex = this.projectCount; // Empezar en el primer conjunto duplicado
    this.updateCarousel(false); // Sin transición inicial
    
    // Escuchar el final de las transiciones
    this.carousel.addEventListener('transitionend', () => this.handleTransitionEnd());
  }
  
  prev() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentIndex--;
    this.updateCarousel(true);
  }
  
  next() {
    if (this.isTransitioning) return;
    
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
    
    // Crear elementos adicionales para navegación circular
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
  
  // Inicializar carrusel de proyectos destacados
  if (counts.featured > 2) {
    new ProjectCarousel('featured-carousel', 'featured-prev', 'featured-next', counts.featured);
  }
  
  // Inicializar carrusel de otros proyectos
  if (counts.other > 2) {
    new ProjectCarousel('other-carousel', 'other-prev', 'other-next', counts.other);
  }
});