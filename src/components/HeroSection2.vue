<template>
  <section class="relative flex items-center justify-center h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.webp"
        alt="Ambiance du restaurant Le Petit Paris"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Contenu -->
    <div class="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
      <h1
        ref="title"
        class="mb-6 font-serif text-5xl md:text-7xl"
        style="opacity: 0; transform: translateY(50px)"
      >
        Le Petit Paris
      </h1>
      <p
        ref="subtitle"
        class="mb-8 text-xl font-light md:text-2xl"
        style="opacity: 0; transform: translateY(50px)"
      >
        Une expérience gastronomique française authentique au cœur de la ville
      </p>
      <div
        ref="buttons"
        class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        style="opacity: 0; transform: translateY(50px)"
      >
        <router-link
          to="/reservation"
          class="px-8 py-3 text-white transition-colors rounded-md bg-amber-600 hover:bg-amber-700"
        >
          Réserver une table
        </router-link>
        <router-link
          to="/menu"
          class="px-8 py-3 text-white transition-colors border-2 border-white rounded-md hover:bg-white/10"
        >
          Voir le menu
        </router-link>
      </div>
    </div>

    <!-- Indicateur de défilement -->
    <div class="absolute transform -translate-x-1/2 left-1/2 bottom-8 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const buttons = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.to(title.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  })

  gsap.to(subtitle.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out',
  })

  gsap.to(buttons.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    ease: 'power2.out',
  })
})
</script>
