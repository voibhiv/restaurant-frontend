/*
 *   store/modules/profissionais.module.js
 */
import Vue from "vue";
import { fetchRestaurantsAPI, fetchRestaurantAPI, model } from "@/api/restaurants.api";

const state = {
  restaurants: null,
  restaurant: null
};

const getters = {
  getRestaurants(state) {
    return state.restaurants;
  },

  getRestaurant(state) {
    return state.restaurant;
  }
};

const actions = {
  async fetchRestaurants({ commit, rootGetters }, searchText) {
    try {
      const data = await fetchRestaurantsAPI(searchText, rootGetters['auth/getUserJwt']);
      
      if (data && data[model.code] >= 400) {
        throw new Error(data[model.message]);
      }
      
      if (data) {
        commit('SET_RESTAURANTS', data);
      }
      
    } catch (error) {
      Vue.prototype.$notify({
        group: "notifications",
        clean: true,
      });
      Vue.prototype.$notify({
        group: "notifications",
        type: "error",
        title: "Erro na busca de restaurantes",
        text: error[model.message],
      });
    }
  },

  async fetchRestaurant({ commit, rootGetters }, id) {
    try {
      const data = await fetchRestaurantAPI(id, rootGetters['auth/getUserJwt']);
      
      if (data && data[model.code] >= 400) {
        throw new Error(data[model.message]);
      }
      
      if (data) {
        commit('SET_RESTAURANT', data);
      }
      
    } catch (error) {
      Vue.prototype.$notify({
        group: "notifications",
        clean: true,
      });
      Vue.prototype.$notify({
        group: "notifications",
        type: "error",
        title: "Erro na busca do restaurante",
        text: error[model.message],
      });
    }
  }

};

const mutations = {
  SET_RESTAURANTS(state, data) {
    state.restaurants = data.data.data;
  },

  SET_RESTAURANT(state, data) {
    state.restaurant = data.data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
