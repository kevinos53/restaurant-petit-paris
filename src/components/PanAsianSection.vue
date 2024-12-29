
<template>
  <section class="relative bg-[#1A1A1A] min-h-screen">
    <div class="ml-4">
      <!-- Contenu principal -->
      <div class="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Texte -->
        <div ref="textColumn" class="space-y-8 text-white">
          <h2>
            <span class="block text-5xl font-light leading-tight lg:text-6xl">
              Une Cuisine Pour Tous
            </span>
            <span class="block mt-2 text-6xl font-script text-[#C17D5B] lg:text-7xl">
              Gastronomie Française
            </span>
          </h2>

          <p class="text-lg font-light leading-relaxed lg:text-xl">
            Le Petit Paris est fier de vous proposer une cuisine française authentique et raffinée.
            Des amuse-bouches aux entrées, en passant par nos salades, plats principaux et desserts,
            notre menu saura satisfaire toutes les envies, quels que soient vos goûts ou votre appétit.
          </p>

          <p class="text-lg font-light leading-relaxed lg:text-xl">
            Avec notre sélection exceptionnelle et nos recettes traditionnelles, nous servons
            une des meilleures cuisines françaises de la région. Découvrez la gastronomie française
            comme elle se doit d'être savourée, au Petit Paris.
          </p>

          <button
            class="inline-block px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white hover:bg-white hover:text-black opacity-none"
          >
            RÉSERVER
          </button>
        </div>

        <!-- Colonne de droite - Image -->
        <div ref="imageColumn" class="relative">
          <div class="relative h-[600px] overflow-hidden group">
            <img
              src="/images/coq-au-vin.jpg"
              alt="Coq au vin traditionnel"
              class="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            />
            <!-- Effet de particules/bokeh -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 mix-blend-overlay"
            ></div>
            <!-- Vignette -->
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const textColumn = ref(null);
const imageColumn = ref(null);

onMounted(() => {
  gsap.from(textColumn.value, {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: textColumn.value,
      start: 'top 90%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  gsap.from(imageColumn.value, {
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: imageColumn.value,
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
