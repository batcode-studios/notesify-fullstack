import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'vue-typescript-inject';
// @ts-ignore
import WithRender from './verify-email.component.html?style=./verify-email.component.scss';
import { StoreProxy } from '../../../../store';
import { AuthenticationService } from '../authentication.service';

@WithRender
@Component({
  providers: [AuthenticationService]
})
export default class VerifyEmailComponent extends Vue {
  public waitingForServer = false;
  public alert = {
    state: false,
    message: ''
  };

  public appStore = StoreProxy.app;

  @inject() private readonly authenticationService!: AuthenticationService;

  public created(): void {
    this.waitingForServer = true;

    setTimeout(() => {
      this.waitingForServer = false;
    }, 10000);
  }
}
