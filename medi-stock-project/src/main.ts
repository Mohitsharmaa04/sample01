// src/main.ts
import { createApp } from 'vue';
import App from './App.vue'; // Assuming you have an App.vue file
import './index.css'; // Importing the CSS styles

const app = createApp(App);
app.mount('#app'); // Mounting the app to the DOM element with id 'app'