<template>
    <section class="px-4 py-16 bg-[#1A1A1A]">
      <div class="mx-auto max-w-7xl">
        <!-- Titre principal -->
        <div class="mb-12 text-center">
          <h2 class="text-5xl font-bold text-gray-800">
            <span class="font-script text-[#C17D5B]">Questions Fréquemment Posées</span>
          </h2>
          <p class="mt-4 text-lg text-white">
            Retrouvez ici les réponses aux questions courantes concernant votre expérience chez <strong>Petit Paris</strong>.
          </p>
        </div>
  
        <!-- Accordéon des Questions/Réponses -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="overflow-hidden bg-gradient-to-b from-[#3D1F0C] to-[#1E0F06] rounded-lg shadow-md"
          >
            <!-- Titre de la question -->
            <button
              class="flex items-center justify-between w-full p-4 font-semibold text-left text-white transition hover:bg-white-200"
              @click="toggleAccordion(index)"
            >
              <span>{{ faq.question }}</span>
              <svg
                :class="{'transform rotate-180': activeIndex === index}"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-[#C17D5B] transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
  
            <!-- Réponse -->
            <div
              v-if="activeIndex === index"
              class="p-4 text-white border-t"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
  
        <!-- Liens utiles -->
        <div class="mt-12 text-center">
          <p class="text-lg text-white">
            Vous n'avez pas trouvé votre réponse ?  
            <router-link to="/contact" class="text-[#C17D5B] font-semibold hover:underline">
              Contactez-nous
            </router-link>  
            ou  
            <router-link to="/reservation" class="text-[#C17D5B] font-semibold hover:underline">
              Réservez une table
            </router-link>.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Liste des FAQ
  const faqs = [
    {
      question: "Quelle est votre politique de réservation ?",
      answer: "Nous acceptons les réservations en ligne jusqu'à 24 heures à l'avance. Pour les réservations de dernière minute, veuillez nous appeler directement.",
    },
    {
      question: "Proposez-vous des options pour les personnes allergiques ?",
      answer: "Oui, nous proposons des plats adaptés aux allergies alimentaires. Merci de nous en informer au moment de la réservation.",
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du mardi au dimanche, de 12h00 à 14h30 pour le déjeuner et de 19h00 à 23h00 pour le dîner.",
    },
    {
      question: "Disposez-vous d'une terrasse extérieure ?",
      answer: "Oui, notre terrasse extérieure est disponible pendant la belle saison pour offrir une expérience unique.",
    },
    {
      question: "Puis-je organiser un événement privé chez vous ?",
      answer: "Absolument ! Nous proposons une salle privée pour les événements et les réunions. Contactez-nous pour plus d'informations.",
    },
  ];
  
  // État pour l'accordéon
  const activeIndex = ref(null);
  
  // Fonction pour afficher ou cacher une réponse
  function toggleAccordion(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
  </script>
  
  <style scoped>
  .font-script {
    font-family: 'Dancing Script', cursive;
  }
  
  button {
    transition: background-color 0.3s ease;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  </style>
  