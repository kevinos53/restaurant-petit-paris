<template>
    <section class="py-16 text-white">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold">
            <span class="font-script text-[#C17D5B]">Boissons & Vins</span>
          </h2>
          <p class="mt-4 text-lg text-gray-300">
            Découvrez notre sélection de boissons rafraîchissantes et de vins d'exception.
          </p>
        </div>

        <!-- Grille des catégories -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <!-- Boissons sans alcool -->
          <div class="p-6 border border-gray-600 rounded-lg bg-black/40">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Boissons Sans Alcool</h3>
            <ul class="space-y-6">
              <li
                v-for="(item, index) in softDrinks"
                :key="index"
                class="flex items-start space-x-4"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="object-cover w-16 h-16 rounded-lg"
                />
                <div>
                  <p class="font-semibold">{{ item.name }}</p>
                  <p class="text-sm text-gray-300">{{ item.description }}</p>
                  <p class="mt-1 font-bold">{{ item.price }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Cocktails signatures -->
          <div class="p-6 border border-gray-600 rounded-lg bg-black/40">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Cocktails Signatures</h3>
            <ul class="space-y-6">
              <li
                v-for="(item, index) in cocktails"
                :key="index"
                class="flex items-start space-x-4"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="object-cover w-16 h-16 rounded-lg"
                />
                <div>
                  <p class="font-semibold">{{ item.name }}</p>
                  <p class="text-sm text-gray-300">{{ item.description }}</p>
                  <p class="mt-1 font-bold">{{ item.price }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Carte des vins -->
          <div class="p-6 border border-gray-600 rounded-lg bg-black/40">
            <h3 class="mb-4 text-2xl font-semibold text-[#C17D5B]">Carte des Vins</h3>
            <ul class="space-y-6">
              <li
                v-for="(item, index) in wines"
                :key="index"
                class="flex items-start space-x-4"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="object-cover w-16 h-16 rounded-lg"
                />
                <div>
                  <p class="font-semibold">{{ item.name }}</p>
                  <p class="text-sm text-gray-300">{{ item.description }}</p>
                  <p class="mt-1 font-bold">{{ item.price }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from "vue";

  // Boissons sans alcool
  const softDrinks = ref([
    { name: "Jus d'Orange Frais", description: "Pressé à la main, 100% naturel.", price: "4.50€", image: "/images/jus-orange.webp" },
    { name: "Cocktail Sans Alcool", description: "Mélange rafraîchissant de fruits exotiques.", price: "6.00€", image: "/images/cocktail-sans-alcool.webp" },
    { name: "Thé Glacé Maison", description: "Infusion maison avec une touche de citron.", price: "4.00€", image: "/images/the-glace.webp" },
    { name: "Café Latte", description: "Espresso avec une mousse de lait onctueuse.", price: "3.50€", image: "/images/cafe-latte.webp" },
  ]);

  // Cocktails signatures
  const cocktails = ref([
    { name: "Mojito Royal", description: "Rhum, menthe fraîche, citron vert, champagne.", price: "8.50€", image: "/images/mojito.webp" },
    { name: "Cosmopolitan", description: "Vodka, triple sec, jus de cranberry, citron vert.", price: "7.50€", image: "/images/cosmopolitan.webp" },
    { name: "French 75", description: "Gin, champagne, jus de citron, sirop de sucre.", price: "9.00€", image: "/images/french75.webp" },
    { name: "Mai Tai", description: "Rhum blanc, rhum ambré, jus de citron, sirop d'orgeat.", price: "8.00€", image: "/images/mai-tai.webp" },
  ]);

  // Carte des vins
  const wines = ref([
    { name: "Chardonnay", description: "Vin blanc sec avec des notes de fruits exotiques.", price: "6.00€/verre", image: "/images/chardonnay.webp" },
    { name: "Cabernet Sauvignon", description: "Vin rouge corsé, parfait avec les viandes rouges.", price: "7.00€/verre", image: "/images/cabernet-sauvignon.webp" },
    { name: "Rosé de Provence", description: "Vin rosé léger avec des arômes de fruits rouges.", price: "6.50€/verre", image: "/images/rose-provence.webp" },
    { name: "Champagne Brut", description: "Bulles fines et élégantes, parfait pour les grandes occasions.", price: "12.00€/flûte", image: "/images/champagne.webp" },
  ]);
  </script>

  <style scoped>
  .font-script {
    font-family: "Dancing Script", cursive;
  }

  h3 {
    letter-spacing: 1px;
  }

  li img {
    transition: transform 0.3s ease-in-out;
  }

  li img:hover {
    transform: scale(1.1);
  }
  </style>
