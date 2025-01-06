<template>
    <section class="px-4 py-16 bg-[#1A1A1A] text-white">
      <div class="max-w-4xl mx-auto p-8 bg-[#2B2B2B] rounded-lg shadow-lg">
        <!-- Titre principal -->
        <div class="mb-8 text-center">
          <h2 class="text-4xl font-bold text-[#C17D5B]">Réservez Votre Table</h2>
          <p class="mt-2 text-lg text-gray-300">
            Remplissez le formulaire ci-dessous pour réserver votre place chez <span class="font-semibold">Petit Paris</span>.
          </p>
        </div>
  
        <!-- Formulaire -->
        <form @submit.prevent="submitReservation" class="space-y-6">
          <!-- Champ Nom -->
          <div>
            <label for="name" class="block text-sm font-medium">Nom complet :</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              placeholder="Votre nom"
              class="w-full p-3 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17D5B]"
            />
          </div>
  
          <!-- Champ Email -->
          <div>
            <label for="email" class="block text-sm font-medium">Adresse e-mail :</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              placeholder="votre@email.com"
              class="w-full p-3 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17D5B]"
            />
          </div>
  
          <!-- Champ Téléphone -->
          <div>
            <label for="telephone" class="block text-sm font-medium">Numéro de téléphone :</label>
            <input
              v-model="form.telephone"
              type="tel"
              id="telephone"
              required
              placeholder="Votre numéro"
              class="w-full p-3 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17D5B]"
            />
          </div>
  
          <!-- Champ Date -->
          <div>
            <label for="date" class="block text-sm font-medium">Date de réservation :</label>
            <VueDatePicker v-model="form.date" class="w-full" />
          </div>
  
          <!-- Champ Nombre de personnes -->
          <div>
            <label for="guests" class="block text-sm font-medium">Nombre de personnes :</label>
            <input
              v-model="form.guests"
              type="number"
              id="guests"
              min="1"
              class="w-full p-3 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17D5B]"
            />
          </div>
  
          <!-- Bouton Soumettre -->
          <div class="text-center">
            <button
              type="submit"
              class="w-full px-6 py-3 text-white bg-primary rounded-md hover:bg-[#a05d43] transition-all focus:ring-2 focus:ring-[#2c2623]"
            >
              Confirmer la Réservation
            </button>
          </div>
        </form>
  
        <!-- Message de Confirmation -->
        <div v-if="confirmationMessage" class="mt-6 text-center">
          <p class="text-lg font-semibold text-green-400">{{ confirmationMessage }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  // Variables réactives
  const form = reactive({
    name: '',
    email: '',
    telephone: '',
    date: '',
    guests: 1,
  });
  
  const confirmationMessage = ref('');
  
  // Soumission du formulaire
  function submitReservation() {
    confirmationMessage.value = `Merci ${form.name}, votre réservation pour ${form.guests} personnes est confirmée pour le ${form.date}.`;
    resetForm();
  }
  
  // Réinitialiser le formulaire
  function resetForm() {
    form.name = '';
    form.email = '';
    form.telephone = '';
    form.date = '';
    form.guests = 1;
  }
  </script>
  
  <style scoped>
  label {
    color: #ccc;
  }
  input,
  button {
    transition: all 0.3s ease-in-out;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  
  section {
    background-color: #1A1A1A;
  }
  </style>
  