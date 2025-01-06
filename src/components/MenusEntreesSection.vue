<template>
  <section class="py-16 bg-black">
    <div class="container mx-auto">
      <!-- Titre principal -->
      <h2 class="mb-12 text-4xl font-bold text-center text-white">Entrées</h2>

      <!-- Grille des entrées -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(entree, index) in entrees"
          :key="index"
          class="flex flex-col p-6 text-white transition-all duration-300 border border-gray-600 bg-black/40 hover:bg-black/70"
        >
          <!-- Contenu texte -->
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-[#C17D5B] mb-2">
              {{ entree.name }} | {{ entree.price }}
            </h3>
            <p class="text-sm leading-relaxed">{{ entree.description }}</p>
          </div>

          <!-- Image en bas -->
          <div class="mt-auto">
            <img
              :src="entree.image"
              :alt="entree.name"
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

const entrees = ref([
  {
    name: "Tartare de Saumon",
    description: "Tartare de saumon frais avec une touche de citron vert et d'aneth.",
    price: "12.50€",
    image: "/images/tartare-saumon.webp",
  },
  {
    name: "Foie Gras Maison",
    description: "Foie gras de canard accompagné d'une compotée d'oignons et toasts grillés.",
    price: "18.00€",
    image: "/images/foie-gras.webp",
  },
  {
    name: "Escargots de Bourgogne",
    description: "Escargots mijotés au beurre d'ail et persil.",
    price: "14.00€",
    image: "/images/escargots.webp",
  },
  {
    name: "Soupe à l'Oignon",
    description: "Soupe à l'oignon gratinée avec emmental fondu et croûtons.",
    price: "10.00€",
    image: "/images/soupe-oignon.webp",
  },
  {
    name: "Salade de Chèvre Chaud",
    description: "Toasts de chèvre chaud sur lit de salade verte avec miel et noix.",
    price: "11.50€",
    image: "/images/salade-chevre.webp",
  },
  {
    name: "Carpaccio de Bœuf",
    description: "Tranches fines de bœuf marinées, parmesan et roquette.",
    price: "13.50€",
    image: "/images/carpaccio-boeuf.webp",
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
