<template>
    <section class="py-16 bg-black">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <h2 class="mb-12 text-4xl font-bold text-center text-white">Menus Dégustation</h2>

        <!-- Grille des plats principaux -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(degustation, index) in degustations"
            :key="index"
            class="flex flex-col p-6 text-white transition-all duration-300 border border-gray-600 bg-black/40 hover:bg-black/70"
          >
            <!-- Contenu texte -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[#C17D5B] mb-2">
                {{ degustation.name }} | {{ degustation.price }}
              </h3>
              <p class="text-sm leading-relaxed">{{ degustation.description }}</p>
            </div>

            <!-- Image en bas -->
            <div class="mt-auto">
              <img
                :src="degustation.image"
                :alt="degustation.name"
                class="object-cover w-full h-32 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from "vue";

  const degustations = ref([
  {
  name: "Menu Traditionnel",
  description: "Un menu classique composé d'une entrée, d'un plat principal et d'un dessert, inspiré des recettes françaises traditionnelles.",
  price: "45.00€",
  image: "/images/menu-traditionnel.webp"
},
{
  name: "Menu Terre & Mer",
  description: "Une combinaison harmonieuse entre les saveurs de la mer et de la terre, incluant poissons, viandes et accompagnements raffinés.",
  price: "58.00€",
  image: "/images/menu-terre-mer.webp"
},
{
  name: "Menu Gourmet",
  description: "Une expérience gastronomique composée de plats créatifs, mettant en avant des ingrédients d'exception.",
  price: "65.00€",
  image: "/images/menu-gourmet.webp"
},
{
  name: "Menu Végétarien",
  description: "Un menu dédié aux saveurs végétales, composé de produits frais, de saison et locaux.",
  price: "40.00€",
  image: "/images/menu-vegetarien.webp"
},
{
  name: "Menu Découverte",
  description: "Un menu dégustation composé de plusieurs petits plats pour explorer la diversité des saveurs françaises.",
  price: "70.00€",
  image: "/images/menu-decouverte.webp"
},
{
  name: "Menu Prestige",
  description: "Un menu gastronomique haut de gamme, avec des produits nobles tels que la truffe, le homard et le caviar.",
  price: "95.00€",
  image: "/images/menu-prestige.webp"
},
  ]);
  </script>

  <style>
  section {
    background-color: #000; /* Noir en fond */
  }

  img {
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }

  h2 {
    font-family: "Dancing Script", cursive;
    letter-spacing: 2px;
  }



  </style>
