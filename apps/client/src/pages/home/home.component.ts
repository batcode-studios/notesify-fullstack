import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './home.component.html?style=./home.component.scss';
import HelloWorldComponent from '../../components/hello-world.component';

@WithRender
@Component({
  components: {
    'hello-world': HelloWorldComponent
  }
})
export default class HomeComponent extends Vue {
}
