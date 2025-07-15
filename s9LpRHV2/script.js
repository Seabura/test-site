function scrollShorts(direction) {
    const carousel = document.getElementById('shortsCarousel');
    const item = carousel.querySelector('.short-item');
  
    if (!carousel || !item) return;
  
    const itemWidth = item.clientWidth + 16; // 16px = gap
    carousel.scrollBy({
      left: direction * itemWidth,
      behavior: 'smooth'
    });
  }
  
