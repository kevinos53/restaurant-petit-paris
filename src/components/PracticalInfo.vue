<template>
    <section class="px-4 py-16 bg-[#1A1A1A]">
      <div class="mx-auto max-w-7xl">
        <!-- Titre principal -->
        <div class="mb-8 text-center">
          <h2 class="text-5xl font-bold text-gray-800">
            <span class="font-script text-[#C17D5B]">Infos Pratiques</span>
          </h2>
          <p class="mt-4 text-lg text-white">
            Retrouvez ici toutes les informations pour vous rendre facilement chez <strong>Petit Paris</strong>.
          </p>
        </div>
  
        <!-- Grille des informations pratiques -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Parking -->
          <div class="flex items-start p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <div class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full">
              <!-- Icone Parking -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-12H6a6 6 0 000 12h6" />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-primary">Parking</h3>
              <p class="mt-2 text-white">
                Parking Indigo Louvre - 5 minutes à pied.  
                <br />Adresse : 12 Rue des Pyramides, 75001 Paris.
              </p>
            </div>
          </div>
  
          <!-- Accès (Transports) -->
          <div class="flex items-start p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <div class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full">
              <!-- Icone Accès -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-primary">Accès</h3>
              <p class="mt-2 text-white">
                Métro : Ligne 1, Station Louvre-Rivoli.  
                <br />Bus : Ligne 72, Arrêt Pont Neuf.  
                <br />À 10 minutes à pied du Châtelet.
              </p>
            </div>
          </div>
  
          <!-- Accessibilité -->
          <div class="flex items-start p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <div class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full">
              <!-- Icone Accessibilité -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V3m0 3a9 9 0 019 9h3m-3 0a9 9 0 11-9-9m0 3v6m-3-3h6"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-primary">Accessibilité</h3>
              <p class="mt-2 text-white">
                Le restaurant est entièrement accessible aux personnes à mobilité réduite.  
                <br />Entrée adaptée et ascenseur disponible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup   lang="ts">

  </script>
  
  <style scoped>

  
  svg {
    stroke-width: 1.8;
  }
  </style>
  