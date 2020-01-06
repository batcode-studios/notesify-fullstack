import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
// @ts-ignore
import WithRender from './login.component.html?style=./login.component.scss';
import { AuthenticationService } from '../authentication.service';
import { StoreProxy } from '../../../../store';

@WithRender
@Component({
  providers: [AuthenticationService]
})
export default class LoginComponent extends Vue {
  public email = '';
  public password = '';
  public showPassword = false;
  public waitingForServer = false;
  public emailError = {
    state: false,
    message: ''
  };
  public passwordError = {
    state: false,
    message: ''
  };
  public showAlert = false;

  public appStore = StoreProxy.app;

  @inject() private readonly authenticationService!: AuthenticationService;

  public login() {
    if (!this.email) {
      this.emailError.state = true;
      this.emailError.message = 'Username is wrong!';
    }
    if (!this.password) {
      this.passwordError.state = true;
      this.passwordError.message = 'Password is wrong!';
    }
    if (this.email && this.password) {
      // this.showAlert = true;
      this.emailError.state = false;
      this.emailError.message = '';
      this.passwordError.state = false;
      this.passwordError.message = '';
      this.waitingForServer = true;
      setTimeout(() => {
        this.showAlert = false;
        this.waitingForServer = false;
      }, 5000);
    }
  }
}
