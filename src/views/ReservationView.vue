<script setup lang="ts">
import HeaderSection from "@/components/HeaderSection.vue"; // Importation du composant
import SpecialReservationsSection from "@/components/SpecialReservationsSection.vue";
import InformationsPratiquesSection from "@/components/InformationsPratiquesSection.vue";
import ReservationForm from "@/components/ReservationForm.vue"
</script>

<template>
  <div>
     <!-- Header Section -->
   <!-- Header Section -->
   <HeaderSection
      title="Réservez Votre Table"
      backgroundImage="/images/reservation-header.jpg"
    />
    <ReservationForm/>
    <InformationsPratiquesSection/>
    <SpecialReservationsSection/>




  </div>

</template>

<style>

</style>
