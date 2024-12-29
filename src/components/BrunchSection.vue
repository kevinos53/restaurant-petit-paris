
<template>

  <section ref="brunchSection" class="relative bg-[#1A1A1A] min-h-screen px-6 sm:px-10 md:px-0 py-12 md:py-0">
    <div class="container mx-auto">
      <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

        <!-- Texte -->
        <div class="space-y-6 md:space-y-8 text-white order-first lg:order-last">
          <h2 class="brunch-text">
            <span class="block text-4xl sm:text-5xl font-light leading-tight lg:text-6xl">
              Savourez un Délicieux
            </span>
            <span class="font-script text-[#C17D5B] text-5xl sm:text-6xl lg:text-7xl block mt-2">
              Brunch à la Française
            </span>
          </h2>

          <p class="text-lg sm:text-xl font-light leading-relaxed brunch-text">
            Au Petit Paris, nous vous proposons une expérience brunch unique
            tous les weekends. Notre brunch gastronomique inclut des créations
            signatures comme notre pain perdu brioche aux fruits rouges,
            nos œufs Bénédicte à la truffe et nos viennoiseries artisanales.
          </p>

          <p class="text-lg sm:text-xl font-light leading-relaxed brunch-text">
            Accompagnez votre repas de nos cocktails signatures ou d'une coupe
            de champagne français. Une expérience culinaire inoubliable dans
            une ambiance chaleureuse et raffinée.
          </p>
          <router-link to="/menu">
            <button class="px-8 sm:px-12 py-2 sm:py-3 mt-5 text-base sm:text-lg tracking-wider transition-all duration-300 border-2 border-white brunch-text hover:bg-white hover:text-black">
              DÉCOUVRIR LE MENU
            </button>
          </router-link>
        </div>

        <!-- Image -->
        <div class="relative brunch-image order-last lg:order-first">
          <div class="relative aspect-w-16 aspect-h-9 lg:aspect-h-16/9 overflow-hidden">
            <img
              src="/images/french-toast.jpg"
              alt="Pain perdu aux fruits rouges"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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

const brunchSection = ref(null);

onMounted(() => {
  gsap.from('.brunch-text', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: brunchSection.value,
      start: 'top 85%',
      end: 'bottom 55%',
      scrub: true,
    },
  });

  gsap.from('.brunch-image', {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: brunchSection.value,
      start: 'top 85%',
      end: 'bottom 55%',
      scrub: true,
    },
  });
});
</script>
