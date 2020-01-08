import { Component, Vue, Watch } from 'vue-property-decorator';
// @ts-ignore
import WithRender from './authentication.component.html?style=./authentication.component.scss';
import { AuthRoutePaths } from '../_common/start-route.enum';

@WithRender
@Component
export default class AuthenticationComponent extends Vue {
  public created(): void {
    this.changeRoutePath();
  }

  public changeRoutePath(): void {
    switch (this.$route.query.mode) {
      case AuthRoutePaths.LOGIN:
        this.$router.push({
          name: AuthRoutePaths.LOGIN
        });
        break;
      case AuthRoutePaths.REGISTER:
        this.$router.push({
          name: AuthRoutePaths.REGISTER
        });
        break;
      case AuthRoutePaths.FORGOT_PASSWORD:
        this.$router.push({
          name: AuthRoutePaths.FORGOT_PASSWORD
        });
        break;
      case 'resetPassword':
        this.$router.push({
          name: AuthRoutePaths.PASSWORD_RESET,
          query: {
            oobCode: this.$route.query.oobCode,
            ...(this.$route.query.continueUrl && {continueUrl: this.$route.query.continueUrl}),
            ...(this.$route.query.lang && {lang: this.$route.query.lang})
          }
        });
        break;
      case 'verifyEmail':
        this.$router.push({
          name: AuthRoutePaths.VERIFY_EMAIL,
          query: {
            oobCode: this.$route.query.oobCode,
            ...(this.$route.query.continueUrl && {continueUrl: this.$route.query.continueUrl}),
            ...(this.$route.query.lang && {lang: this.$route.query.lang})
          }
        });
        break;
    }
  }

  @Watch('$route.query.mode')
  public changeRoute(newValue: string, oldValue: string) {
    this.changeRoutePath();
  }
}
