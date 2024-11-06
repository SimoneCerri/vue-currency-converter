import { createApp } from 'vue'
import './assets/style/style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import VueApexCharts from "vue3-apexcharts";

createApp(App).mount('#app').use(VueApexCharts)
