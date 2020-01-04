import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './app.component.html?style=./app.component.scss';
import HelloWorldComponent from './components/hello-world.component';

@WithRender
@Component({
  components: {
    'hello-world': HelloWorldComponent
  }
})
export default class AppComponent extends Vue {
}
