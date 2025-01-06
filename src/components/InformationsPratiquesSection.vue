<template>
    <section class="py-16 bg-[#1A1A1A] text-white">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold">
            <span class="font-script text-[#C17D5B]">Informations Pratiques</span>
          </h2>
          <p class="mt-4 text-lg text-gray-300">
            Tout ce que vous devez savoir pour une expérience parfaite chez <strong>Petit Paris</strong>.
          </p>
        </div>
  
        <!-- Contenu des informations pratiques -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Horaires d'ouverture -->
          <div class="p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Horaires d'ouverture</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Lundi - Vendredi : 12h00 - 23h00</li>
              <li>Samedi : 11h00 - 01h30</li>
              <li>Dimanche : 11h - 23h</li>
            </ul>
          </div>
  
          <!-- Adresse -->
          <div class="p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Adresse</h3>
            <p class="mb-2 text-gray-300">12 Rue des Gourmets, 75001 Paris, France</p>
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Email</h3>
            <p class="mb-2 text-gray-300">contact@lepetitparis.fr</p>
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Telephone</h3>
            <p class="mb-2 text-gray-300">+33 1 23 45 67 89</p>
          </div>
  
          <!-- Politique de réservation -->
          <div class="p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Politique de Réservation</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Les réservations peuvent être annulées jusqu'à 24h à l'avance.</li>
              <li>Les retards de plus de 15 minutes peuvent entraîner l'annulation de la table.</li>
              <li>Pour les groupes de 8 personnes ou plus, un acompte peut être requis.</li>
            </ul>
          </div>
  
          <!-- Privatisation et événements -->
          <div class="p-6 bg-[#2D2D2D] rounded-lg shadow-md">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Privatisation & Événements</h3>
            <p class="text-gray-300">
              Notre restaurant peut être privatisé pour vos événements spéciaux : anniversaires,
              mariages, ou dîners d'entreprise. Contactez-nous pour un devis personnalisé.
            </p>
            <a
              href="/contact"
              class="block mt-4 text-[#C17D5B] underline hover:text-[#a05d43]"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  /* Pas de script nécessaire pour cette section statique */
  </script>
  
  <style scoped>
  .font-script {
    font-family: "Dancing Script", cursive;
  }
  
  a {
    transition: color 0.3s ease-in-out;
  }
  </style>
  