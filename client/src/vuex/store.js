import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      http.get('/articles')
      .then(({data}) => {
        console.log(data)
        commit('setArticles', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})
