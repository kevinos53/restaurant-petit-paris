<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap';


onMounted(() => {
  // Animation du texte
 

  // Animation de l'image
  gsap.from('.animate-image', {
    duration: 1.5,
    scale: 1.05,
    opacity: 0,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section class="relative bg-[#1A1A1A] min-h-screen">
 <!-- Contenu principal -->
    <div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <!-- Colonne de gauche - Image -->
      <div class="relative animate-image">
        <img 
          src="/images/restaurant-facade.jpg" 
          alt="Façade du restaurant"
          class="object-cover w-full h-full brightness-110 contrast-105" 
        />
        <!-- Overlay pour adoucir l'image avec plus de transparence -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent"></div>
      </div>

      <!-- Colonne de droite - Texte -->
      <div class="flex flex-col justify-center p-12 lg:p-20">
        <div class="max-w-2xl space-y-8 text-white">
          <h2 class="animate-text">
            <span class="block text-5xl font-light leading-tight lg:text-6xl">
              Offrez un Moment d'Exception avec Nos
            </span>
            <span class="font-script text-[#C17D5B] text-6xl lg:text-7xl block mt-2">
              Cartes Cadeaux
            </span>
          </h2>
          
          <p class="text-lg font-light leading-relaxed animate-text lg:text-xl">
            Offrez une expérience gastronomique inoubliable à vos proches. Avec nos trois 
            formules de cartes cadeaux à différents prix, permettez à vos êtres chers de 
            découvrir notre brunch raffiné ou de savourer une authentique cuisine française 
            dans l'un des meilleurs restaurants gastronomiques de la région.
          </p>

          <p class="text-lg font-light leading-relaxed animate-text lg:text-xl">
            Vous pouvez également offrir à vos amis et votre famille notre masterclass cocktails. 
            Nous proposons deux formules distinctes, comprenant chacune un cocktail de bienvenue 
            et la création de trois cocktails signatures. L'une des formules inclut également 
            une sélection de nos délicieuses planches à partager.
          </p>
          <router-link to="/menu">
          <button class="inline-block px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white animate-text hover:bg-white hover:text-black">
            ACHETER UNE CARTE CADEAU
          </button>
        </router-link>
        
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

/* Effet de profondeur sur l'image avec luminosité améliorée */
.animate-image {
  position: relative;
  overflow: hidden;
  filter: brightness(1.1);
}

.animate-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(26, 26, 26, 0.6),
    transparent
  );
  opacity: 0.7;
}

/* Animation au hover du bouton */
button {
  position: relative;
  overflow: hidden;
}

button::after {
  content: '';
  position: absolute;
  /* inset: 0; */
  background: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: -1;
}

button:hover::after {
  transform: translateX(0);
}
@media (max-width: 768px) {
  .grid {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style> 