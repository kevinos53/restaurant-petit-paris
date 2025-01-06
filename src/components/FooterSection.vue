<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const openingHours = [
  { day: 'LUN', hours: '12H - 23H' },
  { day: 'MAR', hours: '12H - 23H' },
  { day: 'MER', hours: '12H - 23H' },
  { day: 'JEU', hours: '12H - 23H' },
  { day: 'VEN', hours: '12H - 23H' },
  { day: 'SAM', hours: '11H - 01H30' },
  { day: 'DIM', hours: '11H - 23H' }
]

const usefulLinks = [
  { text: 'Notre Menu', url: '/menu' },
  { text: 'Réservations', url: '/reservation' },
  { text: 'Événements Privés', url: '/reservation' },
  { text: 'Nous Contactez', url: '/contact' },
  { text: 'Notre Histoire', url: '/histoire' }
]

onMounted(() => {
  // Animation des éléments du footer
  gsap.from('.footer-content', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer-content',
      start: 'top bottom',
      end: 'bottom bottom',
    }
  })


})
</script>

<template>
  <footer class="footer-section bg-gradient-to-b from-[#3D1F0C] to-[#1E0F06] relative overflow-hidden py-16">
    <!-- Contenu principal du footer -->
    <div class="container relative z-10 px-4 mx-auto text-center text-white footer-content">
      <h2 class="text-[#C17D5B] text-3xl mb-4 font-script">Le Petit Paris</h2>

      <!-- Contact Info -->
      <div class="mb-6">
        <a href="tel:+33123456789" class="text-white hover:text-[#C17D5B] transition-colors">
          +33 1 23 45 67 89
        </a>
        <span class="mx-2">|</span>
        <a href="mailto:contact@lepetitparis.fr" class="text-white hover:text-[#C17D5B] transition-colors">
          contact@lepetitparis.fr
        </a>
      </div>

      <!-- Adresse -->
      <p class="mb-8 text-lg">
        12 Rue des Gourmets, 75001 Paris, France
      </p>

      <!-- Liens utiles -->
      <div class="grid max-w-4xl grid-cols-2 gap-4 mx-auto mb-12 md:grid-cols-5">
        <a v-for="link in usefulLinks"
           :key="link.text"
           :href="link.url"
           class="text-white hover:text-[#C17D5B] transition-colors">
          {{ link.text }}
        </a>
      </div>

      <!-- Horaires d'ouverture -->
      <div class="grid max-w-3xl grid-cols-1 gap-4 mx-auto mb-8 md:grid-cols-7">
        <div v-for="{ day, hours } in openingHours" :key="day"
             class="flex flex-col items-center">
          <span class="font-bold">{{ day }}</span>
          <span>{{ hours }}</span>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex justify-center gap-6 mb-8">
        <a href="#" class="social-link">
          <svg class="w-6 h-6 text-white fill-current hover:text-[#C17D5B] transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.28 8.88v-6.28h-2.5v-2.6h2.5v-2c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.78-1.62 1.58v1.84h2.78l-.44 2.6h-2.34v6.28c4.68-.81 8.28-4.47 8.28-8.88 0-5.5-4.46-9.96-9.96-9.96z"/>
          </svg>
        </a>
        <a href="#" class="social-link">
          <svg class="w-6 h-6 text-white fill-current hover:text-[#C17D5B] transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.773.128 4.513.334 3.515 1.332 2.517 2.33 2.311 3.59 2.253 4.869.012 8.332 0 8.756 0 12s.012 3.668.07 4.948c.058 1.279.264 2.539 1.262 3.537.998.998 2.258 1.204 3.537 1.262 1.279.058 1.703.07 4.948.07s3.668-.012 4.948-.07c1.279-.058 2.539-.264 3.537-1.262.998-.998 1.204-2.258 1.262-3.537.058-1.279.07-1.703.07-4.948s-.012-3.668-.07-4.948c-.058-1.279-.264-2.539-1.262-3.537-.998-.998-2.258-1.204-3.537-1.262-1.279-.058-1.703-.07-4.948-.07z"/>
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
          </svg>
        </a>
        <a href="#" class="social-link">
          <svg class="w-6 h-6 text-white fill-current hover:text-[#C17D5B] transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.555-.245-2.213-.612v.061c0 2.362 1.679 4.332 3.911 4.771-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.051 0 13.998-7.496 13.998-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z"/>
          </svg>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-sm opacity-70">
        © {{ new Date().getFullYear() }} Le Petit Paris - Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(193, 125, 91, 0.8),
    transparent
  );
}

/* Animation des illustrations */
.sun-illustration, .moon-illustration {
  animation: float 6s ease-in-out infinite;
}

.moon-illustration {
  animation-delay: 1s;
}

/* Effet de lueur */
.glow-effect {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(193, 125, 91, 0.3) 0%, transparent 70%);
  filter: blur(20px);
  animation: glow 4s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Style des liens sociaux */
.social-link {
  @apply bg-gradient-to-br from-[#C17D5B] to-[#A66B4B] p-3 rounded-full
         hover:from-[#A66B4B] hover:to-[#8B5A3D] transition-all duration-300
         transform hover:scale-110;
  box-shadow: 0 4px 15px rgba(193, 125, 91, 0.3);
}

/* Effet de hover sur les liens */
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #C17D5B;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

.font-script {
  font-family: 'Dancing Script', cursive;
}
</style>
