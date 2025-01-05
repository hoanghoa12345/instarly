import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./index.css";
import Notifications from "notiwind";
import { createPinia } from "pinia";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.use(createPinia());
app.use(VueTippy);
app.mount("#app");
