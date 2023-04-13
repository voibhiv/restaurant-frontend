/*
 *   store/modules/profissionais.module.js
 */
import Vue from "vue";
import jwt_decode from "jwt-decode";
import { createUserAPI, model } from "@/api/users.api";

const state = {};

const getters = {};

const actions = {
  async createUser({ commit }, payload) {
    try {
      const data = await createUserAPI(payload);

      if (data && data[model.success] === false) {
        throw new Error(data[model.data][model.message]);
      }

      this.$notify({
        group: "notifications",
        type: "success",
        title: "Usuário Criado!",
        text: `Usuário foi criado com sucesso! Por favor, faça login.`,
      });

      return true;
    } catch (error) {
      Vue.prototype.$notify({
        group: "notifications",
        clean: true,
      });
      Vue.prototype.$notify({
        group: "notifications",
        type: "error",
        title: "Erro na criação do usuário",
        text: error[model.message],
      });
      return false;
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
