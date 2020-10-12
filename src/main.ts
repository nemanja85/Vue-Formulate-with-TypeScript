import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/formulate.css";
import VueFormulate from "@braid/vue-formulate";

Vue.config.productionTip = false;

Vue.use(VueFormulate);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
