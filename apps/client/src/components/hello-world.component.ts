import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './hello-world.component.html?style=./hello-world.component.scss';

@WithRender
@Component
export default class HelloWorldComponent extends Vue {
  public ecosystem = [
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader',
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify',
    },
  ];
  public importantLinks = [
    {
      text: 'Documentation',
      href: 'https://vuetifyjs.com',
    },
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com',
    },
    {
      text: 'Made with Vuetify',
      href: 'https://madewithvuejs.com/vuetify',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/vuetifyjs',
    },
    {
      text: 'Articles',
      href: 'https://medium.com/vuetify',
    },
  ];
  public whatsNext = [
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com/components/api-explorer',
    },
    {
      text: 'Select a layout',
      href: 'https://vuetifyjs.com/layout/pre-defined',
    },
    {
      text: 'Frequently Asked Questions',
      href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
    },
  ];
}
