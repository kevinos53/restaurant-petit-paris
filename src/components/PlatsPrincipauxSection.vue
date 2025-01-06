
  <template>
    <section class="py-16 bg-black">
      <div class="container mx-auto">
        <!-- Titre principal -->
        <h2 class="mb-12 text-4xl font-bold text-center text-white">Plats Principaux</h2>

        <!-- Grille des plats principaux -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(plat, index) in plats"
            :key="index"
            class="flex flex-col p-6 text-white transition-all duration-300 border border-gray-600 bg-black/40 hover:bg-black/70"
          >
            <!-- Contenu texte -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[#C17D5B] mb-2">
                {{ plat.name }} | {{ plat.price }}
              </h3>
              <p class="text-sm leading-relaxed">{{ plat.description }}</p>
            </div>

            <!-- Image en bas -->
            <div class="mt-auto">
              <img
                :src="plat.image"
                :alt="plat.name"
                class="object-cover w-full h-32 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from "vue";

  const plats = ref([
  {
  name: "Bœuf Bourguignon",
  description: "Ragoût de bœuf mijoté au vin rouge avec carottes, oignons et champignons.",
  price: "21.00€",
  image: "/images/boeuf-bourguignon.webp"
},
{
  name: "Magret de Canard aux Figues",
  description: "Filet de canard rôti accompagné de figues confites et d'une sauce au miel.",
  price: "24.50€",
  image: "/images/magret-canard.webp"
},
{
  name: "Filet de Bar à la Provençale",
  description: "Filet de bar grillé accompagné de tomates cerises rôties et d'herbes provençales.",
  price: "22.00€",
  image: "/images/filet-bar.webp"
},
{
  name: "Coq au Vin",
  description: "Poulet mijoté au vin rouge avec lardons, oignons et champignons.",
  price: "19.50€",
  image: "/images/coq-au-vin2.webp"
},
{
  name: "Sole Meunière",
  description: "Filet de sole doré au beurre et au citron, servi avec une purée crémeuse.",
  price: "25.00€",
  image: "/images/sole-meuniere.webp"
},
{
  name: "Entrecôte Grillée Sauce Béarnaise",
  description: "Steak entrecôte grillé à la perfection, accompagné de sauce béarnaise et pommes frites.",
  price: "26.00€",
  image: "/images/entrecote-bearnaise.webp"
},
  ]);
  </script>

  <style>
  section {
    background-color: #000; /* Noir en fond */
  }

  img {
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }

  h2 {
    font-family: "Georgia", serif;
    letter-spacing: 2px;
  }



  </style>
