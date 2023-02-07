import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./index.css";
import Notifications from "notiwind";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.use(createPinia());
app.mount("#app");
