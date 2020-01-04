import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
// @ts-ignore
import WithRender from './app.component.html?style=./app.component.scss';
import HelloWorldComponent from './components/hello-world.component';
import { AppService } from './app.service';

@WithRender
@Component({
  components: {
    'hello-world': HelloWorldComponent
  },
  providers: [AppService]
})
export default class AppComponent extends Vue {
  @inject() private readonly appService!: AppService;
}
