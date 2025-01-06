<template>
    <section class="relative px-4 py-16 bg-[#1A1A1A]">
      <div class="mx-auto max-w-7xl">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-5xl font-bold text-gray-800">
            <span class="font-script text-[#C17D5B]">Équipe Culinaire</span>
          </h2>
          <p class="mt-4 text-lg text-white ">
            Découvrez les visages derrière nos créations culinaires, leur passion et leur expertise.
          </p>
        </div>

        <!-- Grille des membres de l'équipe -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(chef, index) in team"
            :key="index"
            class="relative overflow-hidden transition-transform transform bg-[#2D2D2D] rounded-lg shadow-md hover:scale-105"
          >
            <!-- Image -->
             <img :src="`images/${chef.photo}`" :alt="chef.name" class="object-cover w-full h-70" />

            <!-- Contenu texte -->
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-white">{{ chef.name }}</h3>
              <p class="mt-2 text-sm text-primary">{{ chef.role }}</p>
              <p class="mt-4 text-white">{{ chef.bio }}</p>
              <blockquote class="mt-4 italic text-white">"{{ chef.quote }}"</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue';

  // Liste des membres de l'équipe
  const team = ref([
    {
      name: 'Jean Dupont',
      role: 'Chef Exécutif',
      bio: 'Expert en gastronomie française avec plus de 20 ans d’expérience dans les cuisines étoilées.',
      quote: 'La cuisine est un art où chaque plat raconte une histoire.',
      photo: 'jean-dupont.webp', // Assurez-vous que cette image est dans `src/assets/team/`
    },
    {
      name: 'Marie Durand',
      role: 'Sous-Chef',
      bio: 'Passionnée par les saveurs méditerranéennes, Marie crée des plats qui évoquent le soleil et la mer.',
      quote: 'Les meilleurs plats sont ceux qui viennent du cœur.',
      photo: 'marie-durand.webp', // Assurez-vous que cette image est dans `src/assets/team/`
    },
    {
      name: 'Pierre Martin',
      role: 'Chef Pâtissier',
      bio: 'Spécialiste des desserts innovants, Pierre allie tradition et modernité dans chaque création.',
      quote: 'Un dessert parfait est une explosion de saveurs.',
      photo: 'pierre-martin.webp', // Assurez-vous que cette image est dans `src/assets/team/`
    },
  ]);
  </script>

  <style scoped>
  .font-script {
    font-family: 'Dancing Script', cursive;
  }

  blockquote {
    font-style: italic;
    color: #6b7280;
  }

  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  </style>
