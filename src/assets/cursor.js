class CustomCursor {
  constructor() {
      this.cursor = document.querySelector('.custom-cursor');
      this.links = document.querySelectorAll('a, button, .filter-btn');
       this.isActive = true;

  }

  init() {
      this.setupEventListeners();
      this.toggleCursor();
  }

  setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
          if (this.isActive) {
              this.cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
               this.cursor.classList.add('active');
          }
      });

        document.addEventListener('mouseleave', () => {
              this.cursor.classList.remove('active');
         });


      this.links.forEach(link => {
          link.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
          link.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
      });
  }
  toggleCursor() {
  document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
             this.isActive = false;
           this.cursor.style.opacity = "0";
        } else {
             this.isActive = true;
        }
  });
}

}
document.addEventListener('DOMContentLoaded', () => {

  const cursor = new CustomCursor();
   cursor.init();

   

});
