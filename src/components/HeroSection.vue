<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animation initiale des éléments
  gsap.from('.hero-text', {
    duration: 1,
    y: 50,
    // opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Animation des cartes au hover
  const cards = document.querySelectorAll('.menu-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3
      })
    })
  })
})
</script>

<template>
  <section class="relative h-screen" style="margin-top: 95px;" >
    <!-- Section des cartes de menu -->
    <div class="grid h-full grid-cols-1 md:grid-cols-3">
      <!-- Carte Food -->
      <div class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img 
            src="/images/food.jpg"
            alt="Délicieux plats"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="absolute inset-0 transition-opacity duration-300 bg-black/40 group-hover:bg-black/60">
          <div class="flex flex-col items-center justify-center h-full text-white">
            <h2 class="mb-4 font-serif text-4xl">Saveurs</h2>
            <router-link to="/menu">
            <button class="px-8 py-2 transition-colors border-2 border-white hover:bg-white hover:text-black">
              DECOUVRIR
            </button>
          </router-link>
          </div>
        </div>
      </div>

      <!-- Carte Drinks -->
      <div class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img 
            src="/images/drinks.jpg"
            alt="Cocktails signatures"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="absolute inset-0 transition-opacity duration-300 bg-black/40 group-hover:bg-black/60">
          <div class="flex flex-col items-center justify-center h-full text-white">
            <h2 class="mb-4 font-serif text-4xl">Boissons</h2>
             <router-link to="/menu">
            <button class="px-8 py-2 transition-colors border-2 border-white hover:bg-white hover:text-black">
              DECOUVRIR
            </button>
          </router-link>
          </div>
        </div>
      </div>

      <!-- Carte Brunch -->
      <div class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img 
            src="/images/brunch.jpg"
            alt="Brunch gourmand"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="absolute inset-0 transition-opacity duration-300 bg-black/40 group-hover:bg-black/60">
          <div class="flex flex-col items-center justify-center h-full text-white">
            <h2 class="mb-4 font-serif text-4xl">Brunch</h2>
            <router-link to="/menu">
            <button class="px-8 py-2 transition-colors border-2 border-white hover:bg-white hover:text-black">
              DECOUVRIR
            </button>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>