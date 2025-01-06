<template>
    <section class="relative bg-[#1A1A1A] h-[60vh] md:h-[50vh]">
      <!-- Image de fond -->
      <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>
  
      <!-- Overlay sombre pour le contraste -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  
      <!-- Contenu -->
      <div
        class="relative flex flex-col items-center justify-center h-full px-4 text-center text-white"
      >
        <h1 class="font-script text-[#f7e2ce] text-4xl font-bold tracking-wide uppercase  md:text-6xl header-text">
          {{ title }}
        </h1>
      </div>
    </section>
  </template>
  
  <script setup>
  // Props pour personnaliser le composant
  defineProps({
    title: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .header-text {
    animation: fadeInUp 1.2s ease-out;
    letter-spacing: 0.1rem;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  