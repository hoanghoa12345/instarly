import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./index.css";
import Notifications from "notiwind";
const app = createApp(App);
app.use(router);
app.use(Notifications);
app.mount("#app");
