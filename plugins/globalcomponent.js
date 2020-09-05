//************ importa td componentes k nta bai usa ************* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.component("Navbar", require("~/layouts/Navbar.vue").default);
Vue.component("Footer", require("~/layouts/Footer.vue").default);
Vue.component("modal", require("~/components/_modal.vue").default);