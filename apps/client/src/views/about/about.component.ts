import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './about.component.html?style=./about.component.scss';

@WithRender
@Component
export default class AboutComponent extends Vue {
}
