import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
import { email, required } from 'vuelidate/lib/validators';
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
  public alert = {
    state: false,
    message: ''
  };

  public appStore = StoreProxy.app;

  @inject() private readonly authenticationService!: AuthenticationService;

  public get emailErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.email!.$dirty) {
      return errors;
    }
    if (!this.$v.email!.email) {
      errors.push('Must be a valid e-mail');
    }
    if (!this.$v.email!.required) {
      errors.push('E-Mail is required');
    }
    return errors;
  }

  public emailOnInput(): void {
    // @ts-ignore
    this.$v.email.$touch();
    this.alert.state = false;
  }

  public login(): void {
    if (!this.$v.$invalid) {
      this.waitingForServer = true;
      setTimeout(() => {
        this.waitingForServer = false;
      }, 5000);
    }
  }

  public validations(): any {
    return {
      email: {
        required,
        email
      }
    };
  }
}
