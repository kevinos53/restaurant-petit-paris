<template>
    <section class="relative px-4 py-16 bg-[#2D2D2D]">
      <div class="mx-auto max-w-7xl">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-5xl font-bold text-gray-800">
            <span class="font-script text-[#C17D5B]">Notre Philosophie</span>
          </h2>
          <p class="mt-4 text-lg text-white">
            Plongez dans nos valeurs essentielles, qui définissent chaque aspect de notre expérience culinaire.
          </p>
        </div>
  
        <!-- Contenu principal : Valeurs -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <!-- Origine des produits -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-[#C17D5B] flex items-center justify-center rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14a6 6 0 100 12 6 6 0 000-12zm3.535 7.95l-4.243-4.243a.999.999 0 00-1.414 0l-4.243 4.243a.999.999 0 101.414 1.414L9 10.414V18a1 1 0 002 0v-7.586l1.828 1.828a.999.999 0 001.414-1.414z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-primary">Origine des Produits</h3>
            <p class="mt-4 text-lg text-white">
              Nos ingrédients sont soigneusement sélectionnés auprès de fermes locales et biologiques, garantissant une qualité incomparable.
            </p>
          </div>
  
          <!-- Techniques culinaires -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-[#C17D5B] flex items-center justify-center rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.707 5.293l-2-2a.999.999 0 00-1.414 0l-3.243 3.243a6.502 6.502 0 00-3.172-1.555l-1.93-2.898a1 1 0 00-1.63 0l-1.93 2.898a6.503 6.503 0 00-2.345 9.098l-1.779 1.78a.999.999 0 101.414 1.414l1.78-1.779a6.503 6.503 0 009.097-2.346l2.898-1.93a1 1 0 000-1.63l-2.898-1.93a6.502 6.502 0 00-1.555-3.172L20.707 6.707a.999.999 0 000-1.414zM8.732 5.732l.707 1.062a6.502 6.502 0 003.801 2.7l2.192-2.191 1.06.706a4.486 4.486 0 01-1.486 3.28l-2.191 2.191a6.502 6.502 0 00-2.7 3.8l-1.062.707a4.487 4.487 0 01-3.28-1.486l2.191-2.191a6.502 6.502 0 002.7-3.8z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-primary">Techniques Culinaires</h3>
            <p class="mt-4 text-lg text-white">
              Nous fusionnons tradition et modernité avec des techniques culinaires uniques pour offrir des saveurs inégalées.
            </p>
          </div>
  
          <!-- Engagement environnemental -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-[#C17D5B] flex items-center justify-center rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C8.686 0 6 2.686 6 6C6 8.126 7.031 10.328 8.879 12C7.031 13.672 6 15.874 6 18C6 21.314 8.686 24 12 24C15.314 24 18 21.314 18 18C18 15.874 16.969 13.672 15.121 12C16.969 10.328 18 8.126 18 6C18 2.686 15.314 0 12 0ZM12 2C14.206 2 16 3.794 16 6C16 8.206 14.206 10 12 10C9.794 10 8 8.206 8 6C8 3.794 9.794 2 12 2ZM12 14C14.206 14 16 15.794 16 18C16 20.206 14.206 22 12 22C9.794 22 8 20.206 8 18C8 15.794 9.794 14 12 14Z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-primary">Engagement Environnemental</h3>
            <p class="mt-4 text-lg text-white">
              Nous soutenons des pratiques durables et innovantes pour réduire notre impact sur l’environnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Aucun script requis
  </script>
  
  <style scoped>
  .font-script {
    font-family: 'Dancing Script', cursive;
  }
  </style>
  