<template>
    <section class="py-16 text-white">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold">
            <span class="font-script text-[#C17D5B]">Nos Brunchs</span>
          </h2>
          <p class="mt-4 text-lg text-gray-300">
            Découvrez nos formules brunch uniques, parfaites pour chaque occasion, des week-ends en famille aux célébrations spéciales.
          </p>
        </div>

        <!-- Grille des brunchs -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <!-- Brunch individuel -->
          <div
            v-for="(brunch, index) in brunchOptions"
            :key="index"
            class="flex flex-col p-6 transition-shadow duration-300 border border-gray-600 rounded-lg bg-black/40 hover:shadow-lg"
          >
            <!-- Image -->
            <img
              :src="brunch.image"
              :alt="brunch.name"
              class="object-cover w-full h-48 mb-4 rounded-lg"
            />

            <!-- Contenu texte -->
            <h3 class="text-2xl font-semibold text-[#C17D5B]">{{ brunch.name }}</h3>
            <p class="mt-2 text-sm text-gray-300">{{ brunch.description }}</p>

            <!-- Détails des plats -->
            <ul class="mt-4 space-y-2">
              <li v-for="(item, i) in brunch.items" :key="i" class="text-sm text-gray-400">
                - {{ item }}
              </li>
            </ul>

            <!-- Prix -->
            <div class="mt-6">
              <p class="font-bold text-white">Prix :</p>
              <ul class="mt-2 space-y-1 text-sm text-gray-300">
                <li>1 personne : {{ brunch.prices.one }}€</li>
                <li>3 personnes : {{ brunch.prices.three }}€</li>
                <li>7 personnes : {{ brunch.prices.seven }}€</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from "vue";

  // Liste des formules brunch
  const brunchOptions = ref([
    {
      name: "Éveil Gourmand",
      description: "Un brunch gourmand pour commencer votre dimanche avec élégance.",
      items: [
        "Viennoiseries artisanales (croissants, pains au chocolat, brioches)",
        "Oeufs Bénédictes au saumon fumé",
        "Salade de fruits frais",
        "Jus d'orange pressé et café ou thé",
      ],
      prices: { one: 25, three: 70, seven: 160 },
      image: "/images/sunday-brunch.webp",
    },
    {
      name: "Escapade Gourmande",
      description: "Un brunch décontracté pour les moments de détente du samedi.",
      items: [
        "Pain perdu brioché avec fruits rouges",
        "Oeufs brouillés à la truffe et champignons",
        "Fromages et charcuteries de la région",
        "Cocktail Mimosa ou café latte",
      ],
      prices: { one: 30, three: 85, seven: 200 },
      image: "/images/saturday-brunch.webp",
    },
    {
      name: "Merveille de Noël",
      description: "Un brunch festif pour célébrer la magie de Noël.",
      items: [
        "Foie gras maison et pain d'épices",
        "Saumon fumé et blinis",
        "Bûche de Noël au chocolat",
        "Champagne Brut et chocolat chaud épicé",
      ],
      prices: { one: 40, three: 110, seven: 250 },
      image: "/images/christmas-brunch.webp",
    },
  ]);
  </script>

  <style scoped>
  .font-script {
    font-family: "Dancing Script", cursive;
  }

  img {
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }
  </style>
