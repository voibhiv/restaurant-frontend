/*
 *   store/modules/profissionais.module.js
 */
import Vue from "vue";
import jwt_decode from "jwt-decode";
import { loginAPI, model } from "@/api/auth.api";

const state = {
  user: null,
};

const getters = {
  getUser(state) {
    if (state.user) {
      let jwt = jwt_decode(state.user);
      if (jwt) {
        return jwt[model.user];
      } else {
        return null;
      }
    } else {
      return null;
    }
  },

  getUserJwt(state) {
    return state.user;
  },
};

const actions = {
  async login({ commit }, payload) {
    try {
      const data = await loginAPI(payload);

      if (data && data[model.code] >= 400) {
        throw new Error(data[model.message]);
      } else if (data && data[model.token]) {
        commit("SET_USER", data);
        return true;
      }
    } catch (error) {
      Vue.prototype.$showLoginErrorMethod(error[model.message]);
      return false;
    }
  },

  async checkLogin({ commit }) {
    try {
      if (sessionStorage.getItem("login-user-info")) {
        let jwt = jwt_decode(
          JSON.parse(sessionStorage.getItem("login-user-info"))
        );
        if (Math.floor(Date.now() / 1000) > jwt.exp) {
          return false;
        } else {
          commit(
            "FETCH_USER",
            JSON.parse(sessionStorage.getItem("login-user-info"))
          );
        }
      }
    } catch (error) {
      return false;
      // handle the error here
    }
  },
};

const mutations = {
  SET_USER(state, data) {
    if (data && data[model.token]) {
      state.user = data[model.token];
      sessionStorage.setItem(
        "login-user-info",
        JSON.stringify(data[model.token])
      );
    } else {
      state.user = null;
      sessionStorage.setItem("login-user-info", null);
    }
  },

  FETCH_USER(state, data) {
    state.user = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
