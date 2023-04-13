import Vue from "vue";

const END_POINT = "/users";

const createUserAPI = (data) =>
  Vue.prototype.$httpClient.post(`${END_POINT}/create`, data);

const model = {};

export { model, createUserAPI };
