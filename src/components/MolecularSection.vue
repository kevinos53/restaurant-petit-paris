
<template>
  <section class="relative bg-[#1A1A1A] min-h-screen px-6 sm:px-10 md:px-0 py-12 md:py-0">
    <div class="w-full">
      <!-- Contenu principal -->
      <div class="grid items-center grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Image -->
        <div class="relative animate-image">
          <div class="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-9 group">
            <img
              src="/images/cocktail-fire.webp"
              alt="Cocktail flambé"
              class="object-cover w-full h-full transition-transform duration-1000 ease-in-out transform group-hover:scale-105 group-hover:rotate-3 group-hover:skew-y-1"
            />
            <!-- Overlay pour l'effet de flamme -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80"></div>
            <div class="flame-overlay"></div>
          </div>
        </div>
        <!-- Colonne de droite - Texte -->
        <div class="pl-0 space-y-6 text-white md:space-y-8 md:pl-6">
          <h2 class="text-4xl font-light leading-tight sm:text-5xl md:text-6xl animate-text">
            Notre Cuisine <br>
            <span class="font-script text-[#C17D5B]">Moléculaire</span>
          </h2>

          <p class="text-lg font-light leading-relaxed sm:text-xl animate-text">
            Le Petit Paris vous propose un concept unique en son genre, où nous excellons dans l'aventure culinaire
            et nous délectons de l'extraordinaire. Dévoués à faire progresser l'art et la pratique de l'hospitalité,
            nous nous engageons à offrir une expérience véritablement unique.
          </p>

          <p class="text-lg font-light leading-relaxed sm:text-xl animate-text">
            Permettant à chaque visiteur de découvrir un aperçu de notre paradis gastronomique moléculaire.
            Explorez notre site et nos menus, nous espérons vous accueillir très prochainement dans notre établissement.
          </p>

          <div>
            <router-link to="/menu"    class="px-8 py-2 mt-6 text-base tracking-wider transition-all duration-300 border-2 border-white sm:px-12 sm:py-3 sm:text-lg hover:bg-white hover:text-black">

              DÉCOUVRIR

           </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const molecularSection = ref(null);

onMounted(() => {
  gsap.from('.animate-text', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.animate-text',
      start: 'top 85%',
      end: 'bottom 55%',
      scrub: true,
    },
  });

  gsap.from('.animate-image', {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.animate-image',
      start: 'top 85%',
      end: 'bottom 55%',
      scrub: true,
    },
  });
});
</script>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

.flame-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center,
      rgba(255, 146, 10, 0.3) 0%,
      rgba(255, 71, 10, 0.15) 50%,
      transparent 70%);
  mix-blend-mode: screen;
  animation: flicker 3s infinite alternate-reverse;
}

@keyframes flicker {
  0%, 100% { opacity: 0.85; }
  25% { opacity: 0.65; }
  50% { opacity: 0.95; }
  75% { opacity: 0.75; }
}

/* Effet de chaleur */
.animate-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 69, 0, 0.15),
    rgba(255, 140, 0, 0.15)
  );
  filter: blur(50px);
  animation: heat 4s ease-in-out infinite alternate-reverse;
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
