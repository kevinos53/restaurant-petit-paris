
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import gsap from 'gsap';

const cardRefs = ref<Ref<HTMLElement | null>[]>([]);

onMounted(() => {
  // Animation initiale des cartes de menu
  cardRefs.value.forEach((cardRef, index) => {
    if (cardRef.value) {
      gsap.from(cardRef.value, {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: 'power3.out',
      });

      // Animation des cartes au survol
      cardRef.value.addEventListener('mouseenter', () => {
        gsap.to(cardRef.value, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      cardRef.value.addEventListener('mouseleave', () => {
        gsap.to(cardRef.value, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  });
});

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    cardRefs.value[index] = ref(el);
  }
};
</script>

<template>
  <section class="relative h-screen bg-[#2D1810]" style="margin-top: 95px;">
    <!-- Section des cartes de menu -->
    <div class="grid h-full grid-cols-1 md:grid-cols-3">
      <!-- Carte Food -->
      <div :ref="(el) => setCardRef(el as HTMLElement, 0)" class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img
            src="/images/food.webp"
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
      <div :ref="(el) => setCardRef(el as HTMLElement, 1)" class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img
            src="/images/drinks.webp"
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
      <div :ref="(el) => setCardRef(el as HTMLElement, 2)" class="relative h-full cursor-pointer menu-card group">
        <div class="absolute inset-0">
          <img
            src="/images/brunch.webp"
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
