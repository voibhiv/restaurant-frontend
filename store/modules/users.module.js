/*
 *   store/modules/profissionais.module.js
 */
import Vue from "vue";
import jwt_decode from "jwt-decode";
import { createUserAPI } from "@/api/user.api";

const state = {};

const getters = {};

const actions = {
  async createUser({ commit }, payload) {
    try {
      const data = await createUserAPI(payload);

      console.log(data);
      return true;
    } catch (error) {
      console.log("DEU ERRO");
      console.log(error);
      return false;
    }
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
