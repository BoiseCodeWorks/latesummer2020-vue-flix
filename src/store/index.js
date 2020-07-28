import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&page=1&include_adult=false&query=",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movieData) {
      state.activeMovie = movieData
    }
  },
  actions: {
    async getMovies({ commit, dispatch }, query) {
      // _api.get(query).then(res => {
      //   console.log(res.data);
      // }).catch(err => console.error(err))
      try {
        let res = await _api.get(query)
        console.log(res);
        commit("setMovies", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    selectMovie({ commit }, movieData) {
      commit("setActiveMovie", movieData)
    }
  },
  modules: {
  }
})
