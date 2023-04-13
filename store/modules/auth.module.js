/*
 *   store/modules/profissionais.module.js
 */
import Vue from "vue";
import jwt_decode from "jwt-decode";
import { loginAPI, model } from "@/api/auth.api";

const state = {};

const getters = {};

const actions = {
  async login({ commit }, payload) {
    try {
      const data = await loginAPI(payload);
      
      if (data && data[model.code] === 401) {
        Vue.prototype.$showLoginErrorMethod(data[model.message]);
        return false
      } else if (data && data[model.token]) {
        if (data[model.token]) { // if loggin worked and user dont have one token
          // data = data[model.data];
          // commit('SET_USER', data);
          return true
        }

        return false;
      }

    } catch (error) {
      
    }
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
