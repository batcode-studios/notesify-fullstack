import { capitalize } from './utilities';

export const typescriptTemplate = (name: string, isServiceSelected: boolean): string => {
  return `import { Component, Vue } from 'vue-property-decorator';
import { ${capitalize(name)}Service } from './${name}.service';

// @ts-ignore
import WithRender from './${name}.component.html?style=./${name}.component.scss';

@WithRender
${isServiceSelected ? `@Component({
  providers: [${capitalize(name)}Service]
})` : `@Component`}
export default class ${capitalize(name)}Component extends Vue {
}
`;
};

export const storeTemplate = (name: string): string => {
  return `import { createModule } from 'vuex-class-component';

export class ${capitalize(name)}Store extends createModule().With({
  namespaced: '${capitalize(name)}',
  strict: false
}) {}
`;
};

export const serviceTemplate = (name: string): string => {
  return `import { injectable } from 'vue-typescript-inject';

@injectable()
export class ${capitalize(name)}Service {}
`;
};
