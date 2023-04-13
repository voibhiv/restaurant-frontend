import Vue from "vue";

const END_POINT = "/restaurants";

const fetchRestaurantsAPI = (searchText, userJwt) =>
  Vue.prototype.$httpClient.get(
    `${END_POINT}/?search=${searchText}&take=10&skip=0`,
    {
      headers: {
        Authorization: "Bearer " + userJwt,
      },
    }
  );

const fetchRestaurantAPI = (id, userJwt) =>
  Vue.prototype.$httpClient.get(`${END_POINT}/${id}`, {
    headers: {
      Authorization: "Bearer " + userJwt,
    },
  });

const model = {
  code: "statusCode",
  message: "message",
};

export { model, fetchRestaurantsAPI, fetchRestaurantAPI };
