<template>
    <section class="relative px-4 py-16 bg-[#1A1A1A]">
      <div class="mx-auto max-w-7xl">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-5xl font-bold text-gray-800">
            <span class="font-script text-[#C17D5B]">Expérience Gastronomique</span>
          </h2>
          <p class="mt-4 text-lg text-white">
            Découvrez une ambiance élégante, des lumières tamisées, une musique apaisante, et des salles qui invitent à l’évasion.
          </p>
        </div>

        <!-- Grille avec diaporama et mosaïque -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Première colonne : Diaporama -->
          <div class="relative">
            <div class="overflow-hidden rounded-lg shadow-lg">
              <img
                :src="currentImage"
                :alt="`Image ${currentIndex + 1}`"
                class="w-full h-[400px] object-cover transition-all duration-500 ease-in-out"
              />
            </div>
            <!-- Navigation pour le diaporama -->
            <button
              @click="prevImage"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#C17D5B] text-white p-2 rounded-full shadow-md hover:bg-[#a05d43]"
            >
              &larr;
            </button>
            <button
              @click="nextImage"
              class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#C17D5B] text-white p-2 rounded-full shadow-md hover:bg-[#a05d43]"
            >
              &rarr;
            </button>
          </div>

          <!-- Deuxième colonne : Mosaïque et Témoignages -->
          <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(image, index) in mosaicImages"
                :key="index"
                class="relative overflow-hidden rounded-lg shadow-md"
              >
                <img :src="image.src" :alt="image.alt" class="object-cover w-full h-48 transition-transform hover:scale-110" />
              </div>
            </div>
            <!-- Témoignage -->
            <div class="p-6 bg-gradient-to-b from-[#3D1F0C] to-[#1E0F06] rounded-lg shadow-lg">
              <blockquote class="italic text-white">
                "Une expérience inoubliable. L’ambiance est magique et la cuisine, tout simplement divine. Un lieu où chaque
                détail compte."
              </blockquote>
              <p class="mt-4 text-sm text-right text-white">— Sophie Lambert, Cliente satisfaite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue';

  // Diaporama
  const images = [
    'images/terrace.webp',
    'images/interior-chic.webp',
    'images/private-room.webp',
  ];

  const currentIndex = ref(0);
  const currentImage = ref(images[currentIndex.value]);

  function nextImage() {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    currentImage.value = images[currentIndex.value];
  }

  function prevImage() {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
    currentImage.value = images[currentIndex.value];
  }

  // Mosaïque d'images
  const mosaicImages = [
    { src: 'images/terrace-small.webp', alt: 'Terrasse' },
    { src: 'images/lounge-small.webp', alt: 'Salon' },
    { src: 'images/interior-small.webp', alt: 'Intérieur'} ,
    { src: 'images/bar-small.webp', alt: 'Bar' },
  ];
  </script>

  <style scoped>
  .font-script {
    font-family: 'Dancing Script', cursive;
  }

  button {
    transition: background 0.3s ease;
  }
  </style>
