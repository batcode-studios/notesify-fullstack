import Vue from 'vue';
import Vuetify, { VAppBar, VBtn, VIcon, VImg, VSpacer } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VImg,
    VSpacer,
    VBtn,
    VIcon
  }
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
