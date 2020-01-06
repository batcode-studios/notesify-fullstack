import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './start.component.html?style=./start.component.scss';
import { StoreProxy } from '../../store';

@WithRender
@Component
export default class StartComponent extends Vue {
  public appStore = StoreProxy.app;

  public changeDarkMode(): void {
    this.appStore.appDarkMode = !this.appStore.appDarkMode;
    this.$vuetify.theme.dark = this.appStore.appDarkMode;
  }
}
