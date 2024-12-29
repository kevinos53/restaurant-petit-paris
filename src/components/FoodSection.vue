<template>
  <section class="relative bg-[#1A1A1A] min-h-screen px-6 sm:px-10 md:px-0 py-12 md:py-0">
    <div class="w-full">
      <!-- Contenu principal -->
      <div class="grid items-center grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Texte -->
        <div ref="textColumn" class="space-y-6 md:space-y-8 text-white pl-0 md:pl-6">
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Menu de <span class="font-script text-[#C17D5B]">Noël</span>
          </h2>

          <p class="text-lg sm:text-xl font-light leading-relaxed">
            La saison des fêtes approche à grands pas. Célébrez avec magie, saveurs et cocktails
            extraordinaires. Un dîner intime en tête à tête ? Nous avons le coin tranquille qui vous
            attend. Une grande fête de Noël inoubliable ? Pensez à privatiser Le Petit Paris pour
            votre événement.
          </p>

          <p class="text-lg sm:text-xl font-light leading-relaxed">
            Nous vous proposons des saveurs exquises à travers notre cuisine française raffinée avec
            des menus fixes et des banquets adaptés à tous les goûts, accompagnés des meilleurs
            cocktails de la ville.
          </p>

          <p class="text-xl sm:text-2xl font-light">À très bientôt chez nous.</p>
          <router-link to="/menu">
            <button
              class="px-8 sm:px-12 py-2 sm:py-3 text-base sm:text-lg tracking-wider transition-all duration-300 border-2 border-white hover:bg-white hover:text-black"
            >
              MENU DE NOËL
            </button>
          </router-link>
        </div>

        <!-- Colonne de droite - Image -->
        <div ref="imageColumn" class="relative">
          <div
            class="relative aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-9 overflow-hidden group"
          >
            <img
              src="/images/curry-dish.jpg"
              alt="Plat signature"
              class="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
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
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const textColumn = ref(null)
const imageColumn = ref(null)

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
  })

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
  })
})
</script>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

/* Effet de particules/bokeh */
.animate-image::before {
  content: '';
  position: absolute;
  background: radial-gradient(circle at center, #ff6b6b 0%, #4ecdc4 100%);
  opacity: 0.1;
  filter: blur(100px);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
  }
}
</style>
