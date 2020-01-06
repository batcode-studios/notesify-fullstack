import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './home.component.html?style=./home.component.scss';

@WithRender
@Component
export default class HomeComponent extends Vue {
}
