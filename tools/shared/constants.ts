import { capitalize } from './utilities';

export enum RunConfiguration {
  Production = 'prod',
  Staging = 'stag',
  Development = 'dev',
  Test = 'test'
}

export enum ClientFileTypes {
  COMPONENT = 'component'
}

export const typescriptTemplate = (name) => {
  return `import { Component, Vue } from 'vue-property-decorator';

// @ts-ignore
import WithRender from './${name}.component.html?style=./${name}.component.scss';

@WithRender
@Component
export default class ${capitalize(name)} extends Vue {
}
`;
};
