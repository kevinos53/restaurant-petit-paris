<template>
    <div class="slider relative overflow-hidden w-full h-[500px]">
      <!-- Wrapper des paires d'images -->
      <div
        class="flex transition-transform duration-1000 ease-in-out slider-wrapper"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(pair, index) in imagePairs"
          :key="index"
          class="relative flex flex-shrink-0 w-full slider-pair"
        >
          <!-- Première image de la paire -->
          <div class="relative w-1/2 h-full overflow-hidden">
            <img
              :src="pair[0]"
              alt="First Image"
              class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 slider-image"
            />
          </div>

          <!-- Deuxième image de la paire -->
          <div class="relative w-1/2 h-full overflow-hidden">
            <img
              :src="pair[1]"
              alt="Second Image"
              class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 slider-image"
            />
          </div>
        </div>
      </div>

      <!-- Boutons de navigation -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#C17D5B] text-white p-3 rounded-full shadow-md hover:bg-[#a05d43] z-10"
      >
        &larr;
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#C17D5B] text-white p-3 rounded-full shadow-md hover:bg-[#a05d43] z-10"
      >
        &rarr;
      </button>
    </div>
  </template>





  <script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Liste des images
const images = [
  "images/about-header.webp",
  "images/bar-small.webp",
  "images/brunch.webp",
  "images/drinks.webp",
  "images/food.webp",
  "images/hero-bg.webp",
];

// Regrouper les images par paires
const imagePairs = computed(() => {
  const pairs = []
;
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }
  return pairs;
});
console.log("Image Pairs :", imagePairs.value);

// Gestion de l'index pour la transition
const currentIndex = ref(0);
let interval = null;

// Défilement automatique
const startSlider = () => {
  interval = setInterval(nextSlide, 3000); // Défile toutes les 3 secondes
};

// Fonction pour avancer
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imagePairs.value.length;
};

// Fonction pour reculer
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + imagePairs.value.length) % imagePairs.value.length;
};

// Arrêter l'intervalle au démontage
onMounted(startSlider);
onBeforeUnmount(() => clearInterval(interval));


</script>



<style>
.slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  width: 100%; /* Ajustement de largeur dynamique */
  transition: transform 1s ease-in-out; /* Animation fluide */
}

.slider-pair {
  display: flex;
  width: 100%;
  position: relative;
}

.slider-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-in-out, z-index 1s ease-in-out;
}

/* Effet de superposition */
.slider-image:nth-child(odd) {
  transform: scale(1.05);
  z-index: 1;
}

.slider-image:nth-child(even) {
  transform: scale(1);
  z-index: 0;
}

button {
  transition: background-color 0.3s ease-in-out;
}

</style>
