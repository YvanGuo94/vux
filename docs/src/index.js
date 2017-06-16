import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import yaml from 'js-yaml'

Vue.use(Vuex)

if (__BROWSER__) {
  require('./app.css')
}

const createStore = () => new Vuex.Store({
  state: {
    contributors: []
  },
  mutations: {
    UPDATE_CONTRIBUTORS(state, payload) {
      state.contributors = payload
    }
  },
  actions: {
    async updateContributors({
      commit
    }, payload) {
      const data = await axios.get(`https://api.github.com/repos/airyland/vux/contributors?per_page=100`).then(res => res.data)
      commit('UPDATE_CONTRIBUTORS', data)
    }
  }
})

const list = [{
  chapter: 'about',
  pages: [{
    path: 'version',
    title: '版本发布说明'
  }]
}]

// Lazy-loading (i.e. code-split) your markdown file as vue component
const routes = []

Vue.use(Router)

const createRouter = () => {
  const router = new Router({
    mode: 'history',
    routes
  })

  if (__BROWSER__) {
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    if (process.env.NODE_ENV === 'production') {
      ;
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-89859411-2', 'auto');
      ga('send', 'pageview');

      router.afterEach(function (to) {
        ga('set', 'page', to.fullPath);
        ga('send', 'pageview');
      })
    }

    router.beforeEach((from, to, next) => {
      nprogress.start()
      next()
    })
    router.afterEach(() => {
      nprogress.done()
      window.scrollTo(0, 0)
    })
  }

  return router
}

export default {
  createRouter,
  createStore,
  App
}