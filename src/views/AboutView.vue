<script setup lang="ts">
// import HeroSection from '@/components/HeroSection.vue';
import HistorySection from '@/components/HistorySection.vue'
import PhilosophySection from '@/components/PhilosophySection.vue' ;
import TeamSection from '@/components/TeamSection.vue';
import OurDiningExperience from '@/components/OurDiningExperience.vue'
import FAQSection from '@/components/FAQSection.vue';
import HeaderSection from "@/components/HeaderSection.vue";


</script>

<template>
  <div>
    <!-- Header Section -->
    <HeaderSection
      title="Notre Histoire"
      backgroundImage="/images/about-header.jpg"
    />
    <HistorySection/>
    <PhilosophySection/>
    <TeamSection/>
    <OurDiningExperience/>
    <FAQSection/>

  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
