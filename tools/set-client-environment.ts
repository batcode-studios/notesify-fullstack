import { join } from 'path';
import { argv } from 'yargs';
import { config } from 'dotenv';
import { inspect } from 'util';

import { environment as clientEnvironment } from '../apps/client/src/environments/environment.template';
import { RunConfiguration } from './shared/constants';
import { createFile } from './shared/utilities';

config();

// Client Environments Path
const environmentPath: string = join(__dirname, '../apps/client/src/environments');

const configEnvironment = argv.environment;
const isProduction: boolean = configEnvironment === 'prod';
let protocol: string = 'https';

switch (configEnvironment) {
  case RunConfiguration.Production:
    clientEnvironment.serverHostBrowser = '';
    break;
  case RunConfiguration.Development:
    clientEnvironment.serverHostBrowser = `localhost`;
    protocol = 'http';
    break;
}

clientEnvironment.serverPortBrowser = (configEnvironment === RunConfiguration.Production) ? '443' : '3000';
clientEnvironment.serverUrlBrowser = `${protocol}://${clientEnvironment.serverHostBrowser}:${clientEnvironment.serverPortBrowser}`;

const environmentFileData = `export const environment = ${inspect(clientEnvironment)};
`;

// Create Angular Environment file used by Angular CLI for current build configuration
createFile(`${environmentPath}/environment.ts`, environmentFileData);
