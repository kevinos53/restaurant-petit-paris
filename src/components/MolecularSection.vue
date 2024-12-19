<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animation élégante et progressive du texte
  gsap.from('.animate-text', {
    duration: 1.5,
    y: 50,
    
    stagger: {
      amount: 1.2,
      from: "start"
    },
    ease: "elastic.out(1, 0.8)"
  })

  // Animation sophistiquée de l'image avec effet de profondeur
  const tl = gsap.timeline()
  
  tl.from('.animate-image', {
    duration: 2,
    
    filter: 'blur(10px)',
    transformOrigin: 'center center',
    ease: "power4.out"
  })
  
  // Ajout d'un effet de parallaxe subtil sur l'image
  .to('.animate-image', {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: '.animate-image',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  // Animation des éléments au survol
  const animateHover = (element: string, scale: number = 1.02) => {
    gsap.to(element, {
      scale: scale,
      duration: 0.5,
      ease: "power2.out"
    })
  }

  // Ajout des interactions au survol
  document.querySelectorAll('.animate-text').forEach(el => {
    el.addEventListener('mouseenter', () => animateHover('.animate-text'))
    el.addEventListener('mouseleave', () => animateHover('.animate-text', 1))
  })
})
</script>

<template>
  <section class="relative bg-[#1A1A1A] min-h-screen">

    <!-- Contenu principal -->
    <div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <!-- Colonne de gauche - Image -->
      <div class="relative animate-image">
        <div class="h-full">
          <img 
            src="/images/cocktail-fire.jpg" 
            alt="Cocktail flambé"
            class="object-cover w-full h-full"
          />
          <!-- Overlay pour l'effet de flamme -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80"></div>
          <div class="flame-overlay"></div>
        </div>
      </div>
      <!-- Colonne de droite - Texte -->
      <div class="flex flex-col justify-center p-12 lg:p-20">
        <div class="max-w-2xl space-y-8 text-white">
          <h2 class="text-5xl font-light leading-tight animate-text lg:text-6xl">
            Notre Cuisine <br>
            <span class="font-script text-[#C17D5B]">Moléculaire</span>
          </h2>
          
          <p class="text-lg font-light leading-relaxed animate-text lg:text-xl">
            Le Petit Paris vous propose un concept unique en son genre, où nous excellons dans l'aventure culinaire 
            et nous délectons de l'extraordinaire. Dévoués à faire progresser l'art et la pratique de l'hospitalité, 
            nous nous engageons à offrir une expérience véritablement unique, permettant à chaque visiteur de découvrir 
            un aperçu de notre paradis gastronomique moléculaire. Explorez notre site et nos menus, nous espérons vous 
            accueillir très prochainement dans notre établissement.
          </p>
       <router-link to="/menu">
          <button class="inline-block px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white animate-text hover:bg-white hover:text-black opacity-none">
            DÉCOUVRIR
          </button>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

.flame-overlay {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at center, 
      rgba(255, 146, 10, 0.2) 0%,
      rgba(255, 71, 10, 0.1) 50%,
      transparent 70%);
  mix-blend-mode: screen;
  animation: flicker 3s infinite alternate;
} 

@keyframes flicker {
  0%, 100% { opacity: 0.8; }
  25% { opacity: 0.6; }
  50% { opacity: 0.9; }
  75% { opacity: 0.7; }
}

/* Effet de chaleur */
.animate-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 69, 0, 0.1),
    rgba(255, 140, 0, 0.1)
  );
  filter: blur(50px);
  animation: heat 4s ease-in-out infinite alternate;
}

 @keyframes heat {
  from { opacity: 0.3; }
  to { opacity: 0.6; }
}
@media (max-width: 768px) {
  .grid {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>