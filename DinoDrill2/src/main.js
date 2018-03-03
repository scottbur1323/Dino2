import Vue from 'vue'
import App from './App'
import Footer from './components/Footer.vue'
import Header from './components/Header'
import Profiles from './components/Profiles.vue'
import SkillsList from './components/SkillsList.vue'

Vue.component('app-header', Header)
Vue.component('app-profiles', Profiles)
Vue.component('app-skills-list', SkillsList)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
