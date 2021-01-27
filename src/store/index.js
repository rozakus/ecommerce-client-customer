import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    baseURL: 'http://localhost:3000',
    isUserLogin: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_ISUSERLOGIN (state, payload) {
      state.isUserLogin = payload
    }
  },
  actions: {
    async getAllProducts (context, payload) {
      try {
        const URL = this.state.baseURL + '/products/customer'
        const response = await axios.get(URL)
        context.commit('SET_PRODUCTS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getAllBanners (context, payload) {
      try {
        const URL = this.state.baseURL + '/banners/customer'
        const response = await axios.get(URL)
        context.commit('SET_BANNERS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async login (context, payload) {
      try {
        const URL = this.state.baseURL + '/user/loginUser'
        const response = await axios.post(URL, payload)

        console.log('>>> login : ',response.data)
        localStorage.setItem('access_token', response.data.access_token)
        
      } catch (err) {
        console.log(err)
      }
    },
    logout (context, payload) {
      localStorage.clear()
    },
    async register (context, payload) {
      try {
        const URL = this.state.baseURL + '/user/register'
        const response = await axios.post(URL, payload)
        
        // console.log('>>> login : ',response.data)
        localStorage.setItem('access_token', response.data.access_token)

      } catch (err) {
        console.log(err)
      }
    },
    isUserLogin (context, payload) {
      if(!localStorage.access_token) {
        context.commit('SET_ISUSERLOGIN', false)
      } else {
        context.commit('SET_ISUSERLOGIN', true)
      }
    }
  }
})
