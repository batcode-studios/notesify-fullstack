import { Component, Vue, Watch } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
import { minLength, required, sameAs } from 'vuelidate/lib/validators';
// @ts-ignore
import WithRender from './password-reset.component.html?style=./password-reset.component.scss';
import { StoreProxy } from '../../../../../store';
import { AuthenticationService } from '../../authentication.service';

@WithRender
@Component({
  providers: [AuthenticationService]
})
export default class PasswordResetComponent extends Vue {
  public password = '';
  public repeatPassword = '';
  public showPassword = false;
  public showRepeatPassword = false;
  public waitingForServer = false;
  public alert = {
    state: false,
    message: ''
  };
  public actionCode: string | (string | null)[] = '';
  public continueUrl: string | (string | null)[] = '';
  public lang: string | (string | null)[] = '';

  public appStore = StoreProxy.app;

  @inject() private readonly authenticationService!: AuthenticationService;

  public get passwordErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.password!.$dirty) {
      return errors;
    }
    if (!this.$v.password!.minLength) {
      // @ts-ignore
      errors.push(`Password must have minimum ${this.$v.password.$params.minLength.min} characters.`);
    }
    if (!this.$v.password!.required) {
      errors.push('Password is required');
    }
    return errors;
  }

  public get repeatPasswordErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.repeatPassword!.$dirty) {
      return errors;
    }
    if (!this.$v.repeatPassword!.sameAsPassword) {
      // @ts-ignore
      errors.push('Confirmation Password must be same');
    }
    return errors;
  }

  public creaated(): void {
    this.actionCode = this.$route.query.oobCode;
    this.continueUrl = this.$route.query.continueUrl;
    this.lang = this.$route.query.lang;
  }

  public passwordOnInput(): void {
    // @ts-ignore
    this.$v.password.$touch();
    this.alert.state = false;
  }

  public repeatPasswordOnInput(): void {
    // @ts-ignore
    this.$v.repeatPassword.$touch();
    this.alert.state = false;
  }

  public resetPassword(): void {
    if (!this.$v.$invalid) {
      this.waitingForServer = true;
      setTimeout(() => {
        this.waitingForServer = false;
      }, 5000);
    }
  }

  public validations(): any {
    return {
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    };
  }

  @Watch('$route.query')
  public onRouteChange(newValue: any, oldValue: any) {
    this.actionCode = newValue.oobCode;
    this.continueUrl = newValue.continueUrl;
    this.lang = newValue.lang;
  }
}
