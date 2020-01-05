import { createModule } from 'vuex-class-component';

import { StoreNames } from '../../shared/src/enums';

export class AppStore extends createModule().With({
  namespaced: StoreNames.APP,
  strict: false
}) {
  public appDarkMode = false;
}
