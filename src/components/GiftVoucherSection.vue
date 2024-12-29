
<template>
  <section class="relative bg-[#1A1A1A] min-h-screen">
    <!-- Contenu principal -->
    <div class="ml-4">
      <div class="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Image -->
        <div ref="imageSection" class="relative">
          <img
            src="/images/restaurant-facade.jpg"
            alt="Façade du restaurant"
            class="object-cover w-full h-full brightness-110 contrast-105"
          />
          <!-- Overlay pour adoucir l'image avec plus de transparence -->
          <div class="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent"></div>
        </div>

        <!-- Colonne de droite - Texte -->
        <div ref="textSection" class="flex flex-col justify-center p-12 lg:p-20 text-white space-y-8">
          <div>
            <h2 class="">
              <span class="block text-5xl font-light leading-tight lg:text-6xl">
                Offrez un Moment d'Exception avec Nos
              </span>
              <span class="block mt-2 text-6xl font-script text-[#C17D5B] lg:text-7xl">
                Cartes Cadeaux
              </span>
            </h2>

            <p class="text-lg font-light leading-relaxed lg:text-xl">
              Offrez une expérience gastronomique inoubliable à vos proches. Avec nos trois
              formules de cartes cadeaux à différents prix, permettez à vos êtres chers de
              découvrir notre brunch raffiné ou de savourer une authentique cuisine française
              dans l'un des meilleurs restaurants gastronomiques de la région.
            </p>

            <p class="text-lg font-light leading-relaxed lg:text-xl">
              Vous pouvez également offrir à vos amis et votre famille notre masterclass cocktails.
              Nous proposons deux formules distinctes, comprenant chacune un cocktail de bienvenue
              et la création de trois cocktails signatures. L'une des formules inclut également
              une sélection de nos délicieuses planches à partager.
            </p>
            <router-link to="/menu">
              <button
                class="inline-block px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white hover:bg-white hover:text-black"
              >
                ACHETER UNE CARTE CADEAU
              </button>
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

const imageSection = ref(null);
const textSection = ref(null);

onMounted(() => {
  gsap.from(textSection.value, {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: textSection.value,
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  gsap.from(imageSection.value, {
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: imageSection.value,
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });
});
</script>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}
</style>
