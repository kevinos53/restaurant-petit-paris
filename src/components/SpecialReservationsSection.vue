<template>
    <section class="py-16 bg-[#1A1A1A] text-white">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold">
            <span class="font-script text-[#C17D5B]">Réservations Spéciales</span>
          </h2>
          <p class="mt-4 text-lg text-gray-300">
            Célébrez vos moments uniques avec nos options de réservation personnalisées.
          </p>
        </div>

        <!-- Grille des options de réservation -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <!-- Brunch Dominical -->
          <div class="relative p-6 border border-gray-600 rounded-lg bg-[#2D2D2D] hover:shadow-lg">
            <img
              src="/images/special-brunch.webp"
              alt="Brunch Dominical"
              class="object-cover w-full h-48 mb-4 rounded-lg"
            />
            <h3 class="text-2xl font-semibold text-[#C17D5B]">Brunch Dominical</h3>
            <p class="mt-2 text-sm text-gray-300">
              Un moment de détente et de gourmandise avec notre brunch exclusif servi tous les dimanches.
            </p>
            <a
              href="/menu#brunch"
              class="block mt-4 text-[#C17D5B] underline hover:text-[#a05d43]"
            >
              Découvrir le brunch
            </a>
          </div>

          <!-- Dîner de Groupe -->
          <div class="relative p-6 border border-gray-600 rounded-lg bg-[#2D2D2D] hover:shadow-lg">
            <img
              src="/images/special-group-dinner.webp"
              alt="Dîner de Groupe"
              class="object-cover w-full h-48 mb-4 rounded-lg"
            />
            <h3 class="text-2xl font-semibold text-[#C17D5B]">Dîner de Groupe</h3>
            <p class="mt-2 text-sm text-gray-300">
              Partagez un moment convivial autour de plats généreux, idéal pour les familles et collègues.
            </p>
            <a
              href="/reservation"
              class="block mt-4 text-[#C17D5B] underline hover:text-[#a05d43]"
            >
              Réservez pour un groupe
            </a>
          </div>

          <!-- Noël et Saint-Valentin -->
          <div class="relative p-6 border border-gray-600 rounded-lg bg-[#2D2D2D] hover:shadow-lg">
            <img
              src="/images/special-christmas.webp"
              alt="Noël et Saint-Valentin"
              class="object-cover w-full h-48 mb-4 rounded-lg"
            />
            <h3 class="text-2xl font-semibold text-[#C17D5B]">Noël & Saint-Valentin</h3>
            <p class="mt-2 text-sm text-gray-300">
              Célébrez les fêtes et les moments romantiques avec nos menus spéciaux et une ambiance unique.
            </p>
            <a
              href="/menu"
              class="block mt-4 text-[#C17D5B] underline hover:text-[#a05d43]"
            >
              Découvrir les événements
            </a>
          </div>

          <!-- Anniversaires & Privatisation -->
          <div class="relative p-6 border border-gray-600 rounded-lg bg-[#2D2D2D] hover:shadow-lg">
            <img
              src="/images/special-private-event.webp"
              alt="Anniversaires & Privatisation"
              class="object-cover w-full h-48 mb-4 rounded-lg"
            />
            <h3 class="text-2xl font-semibold text-[#C17D5B]">Anniversaires & Privatisation</h3>
            <p class="mt-2 text-sm text-gray-300">
              Organisez vos événements privés dans un cadre raffiné et chaleureux. Menus personnalisés disponibles.
            </p>
            <a
              href="/contact"
              class="block mt-4 text-[#C17D5B] underline hover:text-[#a05d43]"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  /* Pas de script spécifique nécessaire */
  </script>

  <style scoped>
  .font-script {
    font-family: "Dancing Script", cursive;
  }

  a {
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #a05d43;
  }
  </style>
