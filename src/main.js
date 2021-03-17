import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import timeFilter from "./services/filters";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);

Vue.filter("timeFilter", timeFilter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
