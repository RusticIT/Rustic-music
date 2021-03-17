import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import timeFilter from "./services/filters";

Vue.filter("timeFilter", timeFilter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
