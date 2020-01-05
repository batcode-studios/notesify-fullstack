import { injectable } from 'vue-typescript-inject';
import { environment } from './environments/environment';
import { StoreProxy } from './store';

@injectable()
export class AppService {
  private appStore = StoreProxy.app;

  public getServerUrl(): string {
    return environment.serverUrlBrowser;
  }
}
