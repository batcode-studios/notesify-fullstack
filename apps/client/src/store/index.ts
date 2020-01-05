import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from 'vuex-class-component';

import { AppStore } from '../app.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(AppStore)
  }
});

export const StoreProxy = {
  app: createProxy(store, AppStore)
};
