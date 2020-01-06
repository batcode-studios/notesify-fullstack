import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
import { email, minLength, required, sameAs } from 'vuelidate/lib/validators';
// @ts-ignore
import WithRender from './register.component.html?style=./register.component.scss';
import { AuthenticationService } from '../authentication.service';
import { StoreProxy } from '../../../../store';

@WithRender
@Component({
  providers: [AuthenticationService]
})
export default class RegisterComponent extends Vue {
  public email = '';
  public password = '';
  public repeatPassword = '';
  public showPassword = false;
  public showRepeatPassword = false;
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

  public emailOnInput(): void {
    // @ts-ignore
    this.$v.email.$touch();
    this.alert.state = false;
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

  public register(): void {
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
      },
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    };
  }
}
