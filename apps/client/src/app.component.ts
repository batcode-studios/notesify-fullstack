import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
// @ts-ignore
import WithRender from './app.component.html?style=./app.component.scss';
import { AppService } from './app.service';

@WithRender
@Component({
  providers: [AppService]
})
export default class AppComponent extends Vue {
  @inject() private readonly appService!: AppService;
}
