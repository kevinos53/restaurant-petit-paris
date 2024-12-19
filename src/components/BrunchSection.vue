<template>
    <section class="relative bg-[#1A1A1A] min-h-screen ">
      <div class="container ">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          <!-- Image -->
          <div class="relative brunch-image ">
            <img 
              src="/images/french-toast.jpg"
              alt="Pain perdu aux fruits rouges"
              class="w-full h-[600px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
  
          <!-- Texte -->
          <div class="space-y-8 text-white">
            <h2 class="brunch-text">
              <span class="block text-5xl font-light leading-tight lg:text-6xl">
                Savourez un Délicieux
              </span>
              <span class="font-script text-[#C17D5B] text-6xl lg:text-7xl block mt-2">
                Brunch à la Française
              </span>
            </h2>
  
            <p class="text-lg font-light leading-relaxed brunch-text lg:text-xl">
              Au Petit Paris, nous vous proposons une expérience brunch unique 
              tous les weekends. Notre brunch gastronomique inclut des créations 
              signatures comme notre pain perdu brioche aux fruits rouges, 
              nos œufs Bénédicte à la truffe et nos viennoiseries artisanales.
            </p>
  
            <p class="text-lg font-light leading-relaxed brunch-text lg:text-xl">
              Accompagnez votre repas de nos cocktails signatures ou d'une coupe 
              de champagne français. Une expérience culinaire inoubliable dans 
              une ambiance chaleureuse et raffinée.
            </p>
         <router-link to="/menu">
            <button class="px-12 py-3 text-lg transition-all duration-300 border-2 border-white opacity-100 brunch-text hover:bg-white hover:text-black mt-5">
              DÉCOUVRIR LE MENU
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

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animation élégante du texte
 

  // Animation de l'image avec effet de profondeur
  gsap.from('.brunch-image', {
    duration: 1.5,
    scale: 1.05,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
  })
})
</script>

