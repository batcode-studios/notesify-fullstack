export enum RunConfiguration {
  Production = 'prod',
  Staging = 'stag',
  Development = 'dev',
  Test = 'test'
}

export enum ClientFileTypes {
  COMPONENT = 'component',
  SERVICE = 'service',
  STORE = 'store'
}

export interface IExtraClientFiles {
  Store?: string;
  Service?: string;
}

export interface IClientPromptAnswers {
  fileType: string;
  fileName: string;
  filePath: string;
  otherFiles?: string[];
  canCreateFileForcefully: boolean;
}
