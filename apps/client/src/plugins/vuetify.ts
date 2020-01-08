import Vue from 'vue';
import Vuetify, { VAlert, VApp, VAppBar, VBtn, VCard, VCardActions, VCardText, VContainer, VContent, VFlex, VForm, VIcon, VImg, VLayout, VParallax, VProgressCircular, VSpacer, VTextField, VToolbar, VToolbarTitle, VTooltip } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VImg,
    VSpacer,
    VBtn,
    VIcon,
    VApp,
    VContent,
    VContainer,
    VLayout,
    VFlex,
    VToolbarTitle,
    VParallax,
    VCard,
    VToolbar,
    VTooltip,
    VCardText,
    VForm,
    VTextField,
    VCardActions,
    VAlert,
    VProgressCircular
  }
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
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
      dark: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
});
