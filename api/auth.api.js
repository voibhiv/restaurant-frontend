import Vue from "vue";

const END_POINT = "/auth";

const loginAPI = (data) => Vue.prototype.$httpClient.post(`${END_POINT}/login`, data);

const model = {
  "message": "message",
  "code": "statusCode"
};

export { model, loginAPI };
