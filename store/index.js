import Vuex from 'vuex';
import moduleAuth from './modules/auth.module';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: moduleAuth
    }
  })
}

export default createStore;
