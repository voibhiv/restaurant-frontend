import Vuex from 'vuex';
import moduleAuth from './modules/auth.module';
import moduleUsers from "./modules/users.module";
import moduleRestaurants from "./modules/restaurants.module";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: moduleAuth,
      users: moduleUsers,
      restaurants: moduleRestaurants
    }
  })
}

export default createStore;
