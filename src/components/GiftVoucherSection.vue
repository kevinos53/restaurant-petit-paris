
<template>

  <section class="relative bg-[#1A1A1A] min-h-screen px-6 sm:px-10 md:px-0 py-12 md:py-0">
    <!-- Contenu principal -->
    <div class="w-full">
      <div class="grid items-center grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Image -->
        <div ref="imageSection" class="relative order-last md:order-first">
          <div
            class="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-9 group"
          >
            <img
              src="/images/restaurant-facade.webp"
              alt="Façade du restaurant"
              class="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 brightness-110 contrast-105"
            />
            <!-- Overlay pour adoucir l'image avec plus de transparence -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 mix-blend-overlay"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        <!-- Colonne de droite - Texte -->
        <div ref="textSection" class="order-first pl-0 space-y-6 text-white md:space-y-8 md:pl-6 md:order-last">

            <h2 class="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              <span class="block">Offrez un Moment d'Exception avec Nos</span>
              <span class="block mt-2 font-script text-[#C17D5B]">Cartes Cadeaux</span>
            </h2>

            <p class="text-lg font-light leading-relaxed sm:text-xl">
              Offrez une expérience gastronomique inoubliable à vos proches. Avec nos trois
              formules de cartes cadeaux à différents prix, permettez à vos êtres chers de
              découvrir notre brunch raffiné ou de savourer une authentique cuisine française
              dans l'un des meilleurs restaurants gastronomiques de la région.
            </p>

            <p class="text-lg font-light leading-relaxed sm:text-xl">
              Vous pouvez également offrir à vos amis et votre famille notre masterclass cocktails.
              Nous proposons deux formules distinctes, comprenant chacune un cocktail de bienvenue
              et la création de trois cocktails signatures. L'une des formules inclut également
              une sélection de nos délicieuses planches à partager.
            </p>
            <div>
            <router-link
              to="/menu"
              class="px-8 py-2 mt-6 text-base tracking-wider transition-all duration-300 border-2 border-white sm:px-12 sm:py-3 sm:text-lg hover:bg-white hover:text-black"
            >
            ACHETER UNE CARTE CADEAU
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
