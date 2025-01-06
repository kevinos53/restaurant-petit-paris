<template>
    <section class="py-16 bg-black">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <h2 class="mb-12 text-4xl font-bold text-center text-white">Desserts</h2>

        <!-- Grille des plats principaux -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(dessert, index) in desserts"
            :key="index"
            class="flex flex-col p-6 text-white transition-all duration-300 border border-gray-600 bg-black/40 hover:bg-black/70"
          >
            <!-- Contenu texte -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[#C17D5B] mb-2">
                {{ dessert.name }} | {{ dessert.price }}
              </h3>
              <p class="text-sm leading-relaxed">{{ dessert.description }}</p>
            </div>

            <!-- Image en bas -->
            <div class="mt-auto">
              <img
                :src="dessert.image"
                :alt="dessert.name"
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

  const desserts = ref([
  {
  name: "Crème Brûlée",
  description: "Crème onctueuse à la vanille avec une fine croûte de sucre caramélisé.",
  price: "8.50€",
  image: "/images/creme-brulee.webp",
},
{
  name: "Tarte Tatin",
  description: "Tarte renversée aux pommes caramélisées servie tiède.",
  price: "9.00€",
  image: "/images/tarte-tatin.webp",
},
{
  name: "Mille-Feuille",
  description: "Feuilletage croustillant, crème pâtissière légère et glaçage au sucre.",
  price: "10.50€",
  image: "/images/mille-feuille.webp",
},
{
  name: "Fondant au Chocolat",
  description: "Cœur coulant au chocolat noir, accompagné d'une boule de glace vanille.",
  price: "11.00€",
  image: "/images/fondant-chocolat.webp",
},
{
  name: "Macarons Assortis",
  description: "Assortiment de macarons aux saveurs variées : framboise, pistache, chocolat, vanille.",
  price: "9.50€",
  image: "/images/macarons.webp",
},
{
  name: "Profiteroles",
  description: "Choux garnis de glace vanille, nappés de chocolat chaud.",
  price: "10.00€",
  image: "/images/profiteroles.webp",
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
