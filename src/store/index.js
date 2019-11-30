import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '../apollo'
import { ALL_COUNTRIES_QUERY, COUNTRY_LANGUAGES_QUERY } from '@/constants/graphql'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    country: {
      name: '',
      languages: []
    },
    email: '',
    emails: {},
    loading: false,
    error: null
  },
  mutations: {
    setCountries: (state, data) => {
      state.countries = data
    },
    setCountry: (state, data) => {
      state.country.name = data.name
      state.country.languages = data.languages
    },
    addEmail: (state, data) => {
      state.email = data
      if (!(data in state.emails)) state.emails[data] = []
    },
    addQuery: (state, data) => {
      if (state.email) {
        state.emails[state.email].push(data)
      }
    },
    setError: (state, data) => {
      state.error = data
    },
    setLoading: (state, data) => {
      state.loading = data
    }
  },
  actions: {
    async fetchCountries ({ commit }) {
      try {
        commit('setLoading', true)
        const { data: { countries } } = await apolloClient.query({ query: ALL_COUNTRIES_QUERY })
        commit('setLoading', false)
        commit('setCountries', countries)
      } catch (err) {
        commit('setError', err.message || err)
      }
    },
    async fetchCountry ({ commit }, countryCode) {
      try {
        commit('setLoading', true)
        commit('addQuery', countryCode)
        const { data: { country } } = await apolloClient.query({
          query: COUNTRY_LANGUAGES_QUERY,
          variables: {
            code: countryCode
          }
        })
        commit('setLoading', false)
        commit('setCountry', country)
      } catch (err) {
        commit('setError', err.message || err)
      }
    }
  },
  modules: {
  }
})
