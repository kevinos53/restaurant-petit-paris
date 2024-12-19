<template>
  <section class="px-4 py-16 bg-[#1A1A1A]">
    <div class="max-w-4xl mx-auto">
      <!-- Titre principal -->
      <div class="mb-8 text-center">
        <h2 class="text-5xl font-bold text-gray-800">
          <span class="font-script text-[#C17D5B]">Contactez-nous</span>
        </h2>
        <p class="mt-4 text-lg text-white">
          Une question, une suggestion ? Laissez-nous un message, nous serons ravis de vous répondre.
        </p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="submitForm" class="p-6 space-y-6 bg-[#2D2D2D] rounded-lg shadow-md">
        <!-- Champ Nom -->
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-300">Nom *</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            placeholder="Votre nom complet"
            class="w-full p-3 mt-2 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:ring-2 focus:ring-[#C17D5B] focus:outline-none"
          />
        </div>

        <!-- Champ Email -->
        <div>
          <label for="email" class="block text-sm font-semibold text-gray-300">Adresse e-mail *</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            placeholder="votre@email.com"
            class="w-full p-3 mt-2 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:ring-2 focus:ring-[#C17D5B] focus:outline-none"
          />
        </div>

        <!-- Champ Numéro de téléphone -->
        <div>
          <label for="phone" class="block text-sm font-semibold text-gray-300">Numéro de téléphone (optionnel)</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            placeholder="Votre numéro de téléphone"
            class="w-full p-3 mt-2 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:ring-2 focus:ring-[#C17D5B] focus:outline-none"
          />
        </div>

        <!-- Champ Sujet -->
        <div>
          <label for="subject" class="block text-sm font-semibold text-gray-300">Sujet *</label>
          <input
            v-model="form.subject"
            type="text"
            id="subject"
            required
            placeholder="Sujet de votre message"
            class="w-full p-3 mt-2 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:ring-2 focus:ring-[#C17D5B] focus:outline-none"
          />
        </div>

        <!-- Champ Message -->
        <div>
          <label for="message" class="block text-sm font-semibold text-gray-300">Message *</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            required
            placeholder="Écrivez votre message ici..."
            class="w-full p-3 mt-2 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:ring-2 focus:ring-[#C17D5B] focus:outline-none"
          ></textarea>
        </div>

        <!-- Bouton d'envoi -->
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-[#a05d43] transition-all"
          >
            Envoyer votre message
          </button>
        </div>
      </form>

      <!-- Message de Confirmation -->
      <div v-if="successMessage" class="p-4 mt-6 text-center text-green-700 bg-green-100 rounded-md">
        {{ successMessage }}
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref } from "vue";

// État du formulaire
const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Message de confirmation
const successMessage = ref("");

// Fonction d'envoi du formulaire
function submitForm() {
  // Simule un traitement d'envoi (à remplacer par un appel API réel)
  setTimeout(() => {
    successMessage.value =
      "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.";
    resetForm();
  }, 1000);
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
  form.value = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
}
</script>
  
<style scoped>
.font-script {
  font-family: "Dancing Script", cursive;
}

button:hover {
  transition: background-color 0.3s ease;
}
</style>
  