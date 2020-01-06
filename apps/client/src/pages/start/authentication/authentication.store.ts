import { createModule } from 'vuex-class-component';

export class AuthenticationStore extends createModule().With({
  namespaced: 'Authentication',
  strict: false
}) {
}
