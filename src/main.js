import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./index.css";
import Notifications from "notiwind";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBell,
  faNoteSticky,
  faBolt,
  faTrash,
  faGear,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faBell, faNoteSticky, faBolt, faTrash, faGear, faSearch, faAngleLeft, faAngleRight, faChevronDown, faPlus);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Notifications);
app.mount("#app");
