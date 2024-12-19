<script setup  lang="ts">
import RestaurantContact from '@/components/RestaurantContact.vue'
import ContactForm from '@/components/ContactForm.vue'
import PracticalInfo from '@/components/PracticalInfo.vue'
import HeaderSection from "@/components/HeaderSection.vue"; // Importation du composant

</script>
<template>
<div>
     <!-- Header Section -->
     <HeaderSection
      title="Contactez-nous"
      backgroundImage="/images/contact-header.jpg"
    />
    <RestaurantContact/>
    <ContactForm/>
    <PracticalInfo/>



</div>

</template>
