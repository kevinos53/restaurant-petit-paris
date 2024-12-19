<template>
<section class="relative flex items-center justify-center h-screen overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/hero-bg.jpg" 
        alt="Restaurant ambiance" 
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
      <h1 class="mb-6 font-serif text-5xl hero-text md:text-7xl">
        Le Petit Paris
      </h1>
      <p class="mb-8 text-xl font-light hero-text md:text-2xl">
        Une expérience gastronomique française authentique au cœur de la ville
      </p>
      <div class="space-x-4 hero-text">
        <router-link to="/reservation">
        <button class="px-8 py-3 text-white transition-colors rounded-md bg-amber-600 hover:bg-amber-700">
          Réserver une table
        </button>
      </router-link>
      <router-link to="/menu">
        <button class="px-8 py-3 text-white transition-colors border-2 border-white rounded-md hover:bg-white/10">
          Voir le menu
        </button>
      </router-link>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>

</template>