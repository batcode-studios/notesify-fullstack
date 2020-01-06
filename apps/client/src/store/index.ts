import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from 'vuex-class-component';

import { AppStore } from '../app.store';
import { AuthenticationStore } from '../pages/start/authentication/authentication.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(AppStore),
    ...extractVuexModule(AuthenticationStore)
  }
});

export const StoreProxy = {
  app: createProxy(store, AppStore),
  auth: createProxy(store, AuthenticationStore)
};
