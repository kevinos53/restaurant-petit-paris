
<template>
  <section class="relative bg-[#1A1A1A] min-h-screen ">
    <div class="ml-4 ">
       <!-- Contenu principal -->
      <div class="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
        <!-- Colonne de gauche - Texte -->
        <div class="space-y-8 text-white">
          <h2 class="text-6xl font-light leading-tight animate-text">
            Menu de <span class="font-script text-[#C17D5B]">Noël</span>
          </h2>
          
          <p class="text-xl font-light leading-relaxed animate-text">
            La saison des fêtes approche à grands pas. Célébrez avec magie, saveurs et cocktails extraordinaires. 
            Un dîner intime en tête à tête ? Nous avons le coin tranquille qui vous attend. 
            Une grande fête de Noël inoubliable ? Pensez à privatiser Le Petit Paris pour votre événement.
          </p>

          <p class="text-xl font-light leading-relaxed animate-text">
            Nous vous proposons des saveurs exquises à travers notre cuisine française raffinée avec des menus fixes 
            et des banquets adaptés à tous les goûts, accompagnés des meilleurs cocktails de la ville.
          </p>

          <p class="text-2xl font-light animate-text">
            À très bientôt chez nous.
          </p>
         <router-link to="/menu">
          <button class="px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white animate-text hover:bg-white hover:text-black opacity-none">
            MENU DE NOËL
          </button>
        </router-link>
        </div>

        <!-- Colonne de droite - Image -->
        <div class="relative animate-image">
          <div class="relative h-[600px] overflow-hidden">
            <img 
              src="/images/curry-dish.jpg" 
              alt="Plat signature"
              class="object-cover w-full h-full"
            />
            <!-- Effet de particules/bokeh -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 mix-blend-overlay"></div>
            <!-- Vignette -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-script {
  font-family: 'Dancing Script', cursive;
}

/* Effet de particules/bokeh */
.animate-image::before {
  content: '';
  position: absolute;
  /* inset: -50%; */
  background: radial-gradient(circle at center, #FF6B6B 0%, #4ECDC4 100%);
  opacity: 0.1;
  filter: blur(100px);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.1); opacity: 0.2; }
}

</style> 