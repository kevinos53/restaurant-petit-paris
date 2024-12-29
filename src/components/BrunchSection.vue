<template>
    <section ref="brunchSection" class="relative bg-[#1A1A1A] min-h-screen">
      <div class="container">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

          <!-- Image -->
          <div class="relative brunch-image">
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
              <button class="px-12 py-3 mt-5 text-lg transition-all duration-300 border-2 border-white opacity-100 brunch-text hover:bg-white hover:text-black">
                DÉCOUVRIR LE MENU
              </button>
            </router-link>
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
