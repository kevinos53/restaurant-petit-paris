<script setup lang="ts">
import Reservation from '@/components/ReservationModal.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const lastScrollPosition = ref(0)
const isNavVisible = ref(true)
const showReservation = ref(false);

// Fermer le menu lors du changement de route
watch(() => route.path, () => {
  isMenuOpen.value = false
})

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'À Propos', href: '/about' },
  { name: 'Reservation', href: '/reservation' },
  { name: 'Contact', href: '/contact' }
]

const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // Gestion de la visibilité de la navbar
  if (currentScrollPosition < 0) {
    return
  }

  // Affiche/cache la navbar selon la direction du scroll
  if (currentScrollPosition > lastScrollPosition.value) {
    isNavVisible.value = false // Scroll vers le bas
  } else {
    isNavVisible.value = true // Scroll vers le haut
  }

  // Met à jour la position du dernier scroll
  lastScrollPosition.value = currentScrollPosition

  // Ajoute un background quand on scroll
  isScrolled.value = currentScrollPosition > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-[#1a1a1a] border-b border-amber-900/20' : 'bg-[#2D1810]',
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-24">
        <div class="flex items-center space-x-4">
          <!-- Logo -->
          <router-link to="/">
            <img src="/images/logo.png" alt="Le Petit Paris" class="w-auto h-16" />
          </router-link>
          <div class="flex flex-col">
            <router-link to="/">
              <h1 class="text-2xl font-script text-amber-50">Le Petit Paris</h1>
            </router-link>
            <span class="text-sm font-light text-amber-200/80">Restaurant Gastronomique</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 text-[20px]">
          <router-link v-for="item in navItems"
                       :key="item.name"
                       :to="item.href"
                       class="px-3 py-2 font-light tracking-wide transition-colors duration-300 text-amber-50 hover:text-amber-200">
            {{ item.name }}
          </router-link>
          <button
            @click="showReservation = true"
            class="px-8 py-3 font-medium tracking-wide text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 hover:shadow-amber-600/20">
            Réserver une table
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button @click="isMenuOpen = !isMenuOpen"
                  class="p-2 transition-colors text-amber-50 hover:text-amber-200">
            <span class="sr-only">Ouvrir le menu</span>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen"
         class="transition-all duration-300 transform md:hidden"
         :class="isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-[#2D1810]">
        <router-link v-for="item in navItems"
                     :key="item.name"
                     :to="item.href"
                     class="block px-3 py-2 font-light tracking-wide transition-colors text-amber-50 hover:text-amber-200">
          {{ item.name }}
        </router-link>
        <button
          @click="showReservation= true"
          class="w-full px-6 py-3 mt-4 font-medium tracking-wide text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 hover:shadow-amber-600/20">
          Réserver une table
        </button>
      </div>
    </div>
  </nav>
  <Reservation :isModalOpen="showReservation" @close="showReservation = false"/>
</template>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
@media (min-width: 1024px) {
    nav[data-v-7a7a37b1] {
        text-align: left;
        margin-left: 0rem;
        font-size: 1rem;
        padding: 0rem 0;
        margin-top: 0rem;
    }
}
</style>
