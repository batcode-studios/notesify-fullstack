import { join } from 'path';
import { argv } from 'yargs';
import { config } from 'dotenv';
import { inspect } from 'util';

import { environment as serverEnvironment } from '../apps/server/src/environments/environment.template';
import { RunConfiguration } from './shared/constants';
import { createFile } from './shared/utilities';

config();

// Client Environments Path
const environmentPath: string = join(__dirname, '../apps/server/src/environments');

const configEnvironment = argv.environment;
const isProduction: boolean = configEnvironment === 'prod';

switch (configEnvironment) {
  case RunConfiguration.Production:
    break;
  case RunConfiguration.Development:
    break;
}

serverEnvironment.production = isProduction;
serverEnvironment.port = parseFloat(process.env.SERVER_PORT);

const environmentFileData = `export const environment = ${inspect(serverEnvironment)};
`;

// Create Angular Environment file used by Angular CLI for current build configuration
createFile(`${environmentPath}/environment.ts`, environmentFileData);
