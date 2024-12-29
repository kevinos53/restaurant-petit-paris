import './assets/main.css'
import './assets/cursor.js'
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
gsap.registerPlugin(ScrollTrigger);
app.directive('animateonscroll', AnimateOnScroll);
app.use(PrimeVue);
app.mount('#app')
