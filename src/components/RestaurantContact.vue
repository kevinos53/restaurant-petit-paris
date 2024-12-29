<template>
  <section class="px-4 py-16 bg-[#1A1A1A] mt-30">
    <div class="mx-auto max-w-7xl">
      <!-- Titre principal -->
      <div class="mb-8 text-center">
        <h2 class="text-5xl font-bold text-gray-800">
          <span class="font-script text-[#C17D5B]">Coordonnées du Restaurant</span>
        </h2>
        <p class="mt-4 text-lg text-white">
          Retrouvez-nous facilement pour réserver ou poser vos questions.
        </p>
      </div>

      <!-- Grille des coordonnées -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- Section Informations de Contact -->
        <div class="p-6 bg-[#2D2D2D] rounded-lg shadow-md">
          <ul class="space-y-6">
            <!-- Adresse -->
            <li class="flex items-center">
              <div
                class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13 21m4.657-4.343A8 8 0 1112 4a8 8 0 017.657 12.657z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-primary">Adresse</h3>
                <p class="text-white">123, Rue de Paris, 75001 Paris, France</p>
              </div>
            </li>

            <!-- Numéro de téléphone -->
            <li class="flex items-center">
              <div
                class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L8.414 10a1 1 0 01-1.414 0L5 8.414a1 1 0 00-1.707.707V19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-primary">Téléphone</h3>
                <a href="tel:+33123456789" class="text-white hover:underline">
                  +33 1 23 45 67 89
                </a>
              </div>
            </li>

            <!-- Adresse e-mail -->
            <li class="flex items-center">
              <div
                class="w-12 h-12 bg-[#C17D5B] text-white flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12H8m0 0h8m-8 0V8m0 4v4m10-12H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-primary">E-mail</h3>
                <a href="mailto:contact@petitparis.com" class="text-white hover:underline">
                  contact@petitparis.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- Section Carte Google Maps -->
        <div class="overflow-hidden bg-[#2D2D2D] rounded-lg shadow-md">
          <div class="w-full h-64 md:w-1/2">
            <div class="w-full h-full">
              <l-map ref="map" v-model:zoom="zoom" :center="[48.8566, 2.3522]" class="w-full h-full">
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
                ></l-tile-layer>
              </l-map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Aucun script requis dans cette version

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
const zoom = 2
</script>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}
#map {
  height: 20rem;
}
</style>
