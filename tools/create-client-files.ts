/* tslint:disable: no-console */
import { resolve } from 'path';
import { argv } from 'yargs';
import { bold, red, yellow } from 'colors';

import { createClientFile, enumToArray } from './shared/utilities';
import { ClientFileTypes } from './shared/constants';

const type = argv._[1];
const name = argv._[2];
const path = argv._[3];

console.log('');

let filePath: string;
switch (type.toLowerCase()) {
  case ClientFileTypes.COMPONENT:
    if (path) {
      filePath = resolve(__dirname, `../apps/client/src/components/${path}`);
    } else {
      filePath = resolve(__dirname, `../apps/client/src/components`);
    }
    break;
  default:
    console.log(`${red(`Type: Unknown Type '${bold(type)}'`)}`);
    console.log(`${red(`Please select any of these types ${bold(enumToArray(ClientFileTypes))}`)}`);
    break;
}

if (!!filePath) {
  console.log(`${yellow(`Type: ${bold(type)}`)}`);
  console.log(`${yellow(`Name: ${bold(name)}`)}`);
  console.log(`${yellow(`Path: ${bold(filePath)}`)}\n`);

  createClientFile(`${filePath}/${name}`, `${name}`, 'ts');
  createClientFile(`${filePath}/${name}`, `${name}`, 'html');
  createClientFile(`${filePath}/${name}`, `${name}`, 'scss');
}

console.log('');
