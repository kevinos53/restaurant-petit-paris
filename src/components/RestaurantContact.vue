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
                <MapPinIcon class="w-6 h-6" />
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
                <PhoneIcon class="w-6 h-6" />
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
                <EnvelopeIcon class="w-6 h-6" />
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.157893100122!2d2.3121750967895545!3d48.874266500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f4c47058947%3A0xe1de61d4b89d1efb!2sSPHERE%20Restaurant%20Paris!5e0!3m2!1sfr!2sbj!4v1735543330807!5m2!1sfr!2sbj" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">



import { MapPinIcon, EnvelopeIcon,PhoneIcon } from '@heroicons/vue/20/solid';


</script>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}
#map {
  height: 20rem;
}
</style>
