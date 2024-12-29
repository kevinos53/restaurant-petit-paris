<template>
    <section class="relative bg-[#1A1A1A] min-h-screen ">
      <div class="ml-4">
         <!-- Contenu principal -->
        <div class="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <!-- Colonne de gauche - Texte -->
          <div class="space-y-8 text-white">
            <h2 class="animate-text">
              <span class="block text-5xl font-light leading-tight lg:text-6xl">
                Organisez Votre
              </span>
              <span class="font-script text-[#C17D5B] text-6xl lg:text-7xl block mt-2">
                Événement Privé
              </span>
            </h2>

            <p class="text-lg font-light leading-relaxed animate-text lg:text-xl">
              Au Petit Paris, nous comprenons l'importance d'organiser un événement
              mémorable. Notre équipe dédiée vous accompagne dans la création de moments
              uniques, qu'il s'agisse d'un dîner intime, d'une célébration d'entreprise
              ou d'une occasion spéciale.
            </p>

            <p class="text-lg font-light leading-relaxed animate-text lg:text-xl">
              Notre espace élégant, notre cuisine raffinée et notre service attentionné
              s'unissent pour créer une expérience inoubliable. Laissez-nous transformer
              votre vision en réalité dans notre cadre parisien enchanteur.
            </p>
           <router-link to="/reservation">
            <button class="inline-block px-12 py-3 text-lg tracking-wider transition-all duration-300 border-2 border-white animate-text hover:bg-white hover:text-black opacity-none">
              RÉSERVER VOTRE ÉVÉNEMENT
            </button>
          </router-link>
          </div>

          <!-- Colonne de droite - Image -->
          <div class="relative animate-image">
            <div class="relative h-[600px] overflow-hidden">
              <img
                src="/images/event-space.jpg"
                alt="Espace événementiel du Petit Paris"
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
