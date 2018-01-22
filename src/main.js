// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Homepage from './pages/Homepage'
import Rspv from './pages/Rspv'
import Rentals from './pages/Rentals'
import Information from './pages/Information'
import NotFound from './pages/NotFound'
import {VueMasonryPlugin} from 'vue-masonry'
import VueLazyload from 'vue-lazyload'

Vue.use(VueMasonryPlugin)

Vue.use(VueLazyload)

// Router init
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Homepage
    }, {
      path: '/information',
      name: 'Information',
      component: Information
    }, {
      path: '/rspv',
      name: 'Réponses',
      component: Rspv
    }, {
      path: '/reponses',
      name: 'Réponses',
      component: Rspv
    }, {
      path: '/reponse',
      name: 'Réponses',
      component: Rspv
    }, {
      path: '/hebergements',
      name: 'Hébergements',
      component: Rentals
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// Analytics
Vue.use(VueAnalytics, {
  id: 'UA-106136253-1',
  router
})

// State management
// Vue.use(Vuex)

// internationalization
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: navigator.language || navigator.userLanguage || 'fr',
  messages: {
    fr: {
    },
    en: {
    }
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
