import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
import { email, required } from 'vuelidate/lib/validators';
// @ts-ignore
import WithRender from './forgot-password.component.html?style=./forgot-password.component.scss';
import { StoreProxy } from '../../../../../store';
import { AuthenticationService } from '../../authentication.service';

@WithRender
@Component({
  providers: [AuthenticationService]
})
export default class ForgotPasswordComponent extends Vue {
  public email = '';
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

  public sendResetLink(): void {
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
