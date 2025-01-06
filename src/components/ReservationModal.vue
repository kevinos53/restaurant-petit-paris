<template>
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg" style="margin-top: 140px">
      <!-- Bouton de fermeture -->
      <button
        class="absolute text-gray-400 top-2 right-2 hover:text-gray-600 focus:outline-none"
        @click="closeReservation"
      >
        &times;
      </button>

      <!-- Si le message de confirmation existe -->
      <div v-if="confirmationMessage" class="text-center">
        <h2 class="mb-4 text-xl font-bold text-green-600">Succès</h2>
        <p class="text-gray-700">{{ confirmationMessage }}</p>
        <button
          @click="closeReservation"
          class="px-4 py-2 mt-4 text-white rounded-md bg-primary hover:bg-primary/60 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Fermer
        </button>
      </div>

      <!-- Sinon, afficher le formulaire -->
      <form v-else @submit.prevent="submitReservation" class="space-y-4">
        <!-- Nom -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom :</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email :</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Telephone :</label>
          <input
            v-model="form.telephone"
            type="number"
            id="telephone"
            class="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <!-- Date -->
        <div>
          <label for="date" class="block text-sm font-medium text-gray-700">Date :</label>
          <VueDatePicker v-model="form.date" />
        </div>
        <!-- Nombre de personnes -->
        <div>
          <label for="guests" class="block text-sm font-medium text-gray-700">Nombre de personnes :</label>
          <input
            v-model="form.guests"
            type="number"
            id="guests"
            min="1"
            class="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <!-- Bouton de soumission -->
        <button
          type="submit"
          class="w-full px-4 py-2 text-white rounded-md bg-primary hover:bg-primary/80 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Réserver
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, reactive, ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// Déclarez la prop reçue du parent
defineProps({
  isModalOpen: {
    type: Boolean,
    required: true, // La prop doit être fournie
  },
});

const emit = defineEmits(['close']);

// Variables réactives
const form = reactive({
  name: '',
  email: '',
  date: '',
  telephone:'',
  guests: 1,
});

const selectedDate = ref();
const confirmationMessage = ref(''); // Message de confirmation

// Fermer la réservation
function closeReservation() {
  emit('close');
  resetForm();
}

// Soumettre la réservation
function submitReservation() {
  confirmationMessage.value = `Merci, ${form.name}. Votre réservation pour ${form.guests} personnes est confirmée pour le ${form.date}.`;
}

// Réinitialiser le formulaire et le message
function resetForm() {
  form.name = '';
  form.email = '';
  form.date = '';
  form.telephone='';
  form.guests = 1;
  confirmationMessage.value = '';
}
</script>
