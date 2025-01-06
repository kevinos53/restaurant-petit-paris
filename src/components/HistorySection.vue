<template>
    <section class="relative bg-[#1A1A1A] py-16 px-4 text-white">
      <div class="mx-auto max-w-7xl">
        <!-- Titre de la section -->
        <div class="mb-12 text-center">
          <h2 class="text-5xl font-light leading-tight">
            <span class="font-script text-[#C17D5B]">Notre Histoire</span>
          </h2>
          <p class="mt-4 text-lg font-light">
            Découvrez comment notre passion pour la gastronomie a évolué depuis nos débuts modestes.
          </p>
        </div>

        <!-- Contenu principal : Chronologie -->
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- Chronologie -->
          <div class="space-y-8">
            <div class="relative pl-8">
              <span class="absolute top-1 left-0 w-4 h-4 bg-[#C17D5B] rounded-full"></span>
              <h3 class="text-2xl font-semibold">1998 - Les Débuts</h3>
              <p class="mt-2 text-lg font-light leading-relaxed">
                Notre aventure a commencé dans un petit café de quartier, où nous avons servi nos premiers plats faits maison.
              </p>
            </div>
            <div class="relative pl-8">
              <span class="absolute top-1 left-0 w-4 h-4 bg-[#C17D5B] rounded-full"></span>
              <h3 class="text-2xl font-semibold">2005 - Première Expansion</h3>
              <p class="mt-2 text-lg font-light leading-relaxed">
                Avec le soutien de notre communauté, nous avons ouvert notre premier grand restaurant en centre-ville.
              </p>
            </div>
            <div class="relative pl-8">
  <!-- Point sur la chronologie -->
  <span class="absolute top-1 left-0 w-4 h-4 bg-[#C17D5B] rounded-full"></span>

  <!-- Titre -->
  <h3 class="text-2xl font-semibold">2020 - Une Cuisine Récompensée</h3>

  <!-- Description -->
  <p class="mt-2 text-lg font-light leading-relaxed">
    Notre travail a été reconnu avec plusieurs distinctions culinaires, solidifiant notre place parmi les meilleurs.
  </p>

  <!-- Icônes des récompenses -->
  <div class="flex items-center mt-4 space-x-6">
    <!-- Icône 1 -->
    <div class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#C17D5B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      <p class="mt-2 text-sm font-light text-gray-400">Meilleur Restaurant 2020</p>
    </div>

    <!-- Icône 2 -->
    <div class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#C17D5B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 15.39L18.36 18L16.48 11.24L22 7.09L14.81 6.73L12 0L9.19 6.73L2 7.09L7.52 11.24L5.64 18L12 15.39Z" />
      </svg>
      <p class="mt-2 text-sm font-light text-gray-400">Prix de l'Innovation</p>
    </div>

    <!-- Icône 3 -->
    <div class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#C17D5B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C8.686 0 6 2.686 6 6C6 8.126 7.031 10.328 8.879 12C7.031 13.672 6 15.874 6 18C6 21.314 8.686 24 12 24C15.314 24 18 21.314 18 18C18 15.874 16.969 13.672 15.121 12C16.969 10.328 18 8.126 18 6C18 2.686 15.314 0 12 0ZM12 2C14.206 2 16 3.794 16 6C16 8.206 14.206 10 12 10C9.794 10 8 8.206 8 6C8 3.794 9.794 2 12 2ZM12 14C14.206 14 16 15.794 16 18C16 20.206 14.206 22 12 22C9.794 22 8 20.206 8 18C8 15.794 9.794 14 12 14Z" />
      </svg>
      <p class="mt-2 text-sm font-light text-gray-400">Étoile Culinaire 2020</p>
    </div>
  </div>
</div>

          </div>

          <!-- Image inspirante -->
          <div class="relative animate-image">
            <img
              src="/images/our-story.webp"
              alt="Notre équipe"
              class="object-cover w-full h-full rounded-lg shadow-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup lang="ts">
  // Aucun script supplémentaire requis
  </script>

  <style scoped>
  .font-script {
    font-family: 'Dancing Script', cursive;
  }

  /* Effet d'animation sur l'image */
  .animate-image::before {
    content: '';
    position: absolute;
    inset: 0;
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
