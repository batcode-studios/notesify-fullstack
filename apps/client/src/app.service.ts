import { injectable } from 'vue-typescript-inject';
import { environment } from './environments/environment';

@injectable()
export class AppService {
  public getServerUrl(): string {
    return environment.serverUrlBrowser;
  }
}
