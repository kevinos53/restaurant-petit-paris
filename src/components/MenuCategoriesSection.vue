<template>
  <section class="py-8 text-white bg-black menu-categories">
    <!-- Navigation des catégories -->
    <nav class="mb-8 text-center">
      <ul
        class="flex flex-wrap justify-center gap-4 text-base font-semibold tracking-wide uppercase md:space-x-6 md:text-lg md:flex-nowrap overflow-x-auto"
      >
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="px-2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          :class="{
            'text-[#C17D5B] border-b-2 border-[#C17D5B]': activeCategory === category.id,
            'hover:text-[#C17D5B]': activeCategory !== category.id,
          }"
          @click="setActiveCategory(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </nav>

    <!-- Contenu dynamique des sections -->
    <div class="container mx-auto">
      <MenusEntreesSection v-if="activeCategory === 'entrees'" />
      <PlatsPrincipauxSection v-if="activeCategory === 'plats-principaux'" />
      <MenusDessertsSection v-if="activeCategory === 'desserts'" />
      <MenusDegustationSection v-if="activeCategory === 'menus-degustation'" />
      <MenusBrunch v-if="activeCategory === 'brunch'" />
      <MenusBoissons v-if="activeCategory === 'boissons-vins'" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MenusEntreesSection from "@/components/MenusEntreesSection.vue";
import PlatsPrincipauxSection from "@/components/PlatsPrincipauxSection.vue";
import MenusDessertsSection from "@/components/MenusDessertsSection.vue";
import MenusDegustationSection from "@/components/MenusDegustationSection.vue";
import MenusBoissons from "@/components/MenusBoissons.vue";
import MenusBrunch from "@/components/MenusBrunch.vue";

// Définition des catégories
const categories = [
  { id: "entrees", name: "Entrées" },
  { id: "plats-principaux", name: "Plats Principaux" },
  { id: "desserts", name: "Desserts" },
  { id: "menus-degustation", name: "Menus Dégustation" },
  { id: "brunch", name: "Brunch" },
  { id: "boissons-vins", name: "Boissons & Vins" },
];

// Catégorie active par défaut
const activeCategory = ref("entrees");

// Fonction pour définir la catégorie active
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};
</script>

<style>
/* Ajout pour la barre de défilement sur mobile */
.menu-categories ul::-webkit-scrollbar {
  height: 5px;
}

.menu-categories ul::-webkit-scrollbar-thumb {
  background-color: #c17d5b;
  border-radius: 10px;
}
</style>
