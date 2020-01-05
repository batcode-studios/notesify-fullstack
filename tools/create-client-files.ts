/* tslint:disable: no-console */
import { prompt } from 'inquirer';
import { resolve } from 'path';
import { bold, red, yellow } from 'colors';

import {
  arrayToObject,
  createClientComponentFile,
  createClientDirectory,
  createClientServiceFile,
  createClientStoreFile,
  enumToArray
} from './shared/utilities';
import { ClientFileTypes, IClientPromptAnswers } from './shared/constants';

console.log('');
console.log(`${yellow('Notesify\'s Client File Creation Utility')}`);
console.log('');

const promptUser = async (): Promise<void> => {
  try {
    let answers: IClientPromptAnswers;
    const firstPrompt: IClientPromptAnswers = await prompt([
      {
        type: 'list',
        name: 'fileType',
        message: 'What type of file?',
        choices: ['component', 'service', 'store']
      },
      {
        name: 'fileName',
        message: 'What is the file name you prefer?',
        default: 'sample-file'
      },
      {
        name: 'filePath',
        message: 'Where you want to create these files? (If you give path it will be src/<your-path>)'
      },
      {
        type: 'confirm',
        name: 'canCreateFileForcefully',
        message: 'Recreate file is exists?',
        default: false
      },
    ]);

    answers = {...firstPrompt};
    if (firstPrompt.fileType === ClientFileTypes.COMPONENT) {
      const secondPrompt = await prompt([
        {
          type: 'checkbox',
          name: 'otherFiles',
          message: 'Do you want to create any of these files too?',
          choices: [
            'Store', 'Service'
          ]
        }
      ]);
      answers = {...firstPrompt, ...secondPrompt};
    }

    if (!!answers) {
      let filePath: string;
      if (answers.filePath) {
        filePath = resolve(__dirname, `../apps/client/src/${answers.filePath}`);
      } else {
        filePath = resolve(__dirname, `../apps/client/src`);
      }

      if (filePath.split('/src/').length > 1) {
        let directoryPath = ``;
        filePath.split('/').forEach((path: string, index: number) => {
          if (index !== 0) {
            directoryPath = `${directoryPath}/${path}`;
            createClientDirectory(directoryPath);
          }
        });
      }

      switch (answers.fileType.toLowerCase()) {
        case ClientFileTypes.COMPONENT:
          const otherFilesObject = arrayToObject(answers.otherFiles);
          const isServiceSelected = !!(otherFilesObject && otherFilesObject.Service);
          const isStoreSelected = !!(otherFilesObject && otherFilesObject.Store);

          console.log('');
          console.log(`${yellow(`Type: ${bold(answers.fileType)}`)}`);
          console.log(`${yellow(`Name: ${bold(answers.fileName)}`)}`);
          console.log(`${yellow(`Path: ${bold(filePath)}`)}\n`);

          createClientComponentFile(`${filePath}/${answers.fileName}`, `${answers.fileName}`, 'ts', isServiceSelected, answers.canCreateFileForcefully);
          createClientComponentFile(`${filePath}/${answers.fileName}`, `${answers.fileName}`, 'html', isServiceSelected, answers.canCreateFileForcefully);
          createClientComponentFile(`${filePath}/${answers.fileName}`, `${answers.fileName}`, 'scss', isServiceSelected, answers.canCreateFileForcefully);

          if (isServiceSelected) {
            createClientServiceFile(`${filePath}/${answers.fileName}`, `${answers.fileName}`, answers.canCreateFileForcefully);
          }

          if (isStoreSelected) {
            createClientStoreFile(`${filePath}/${answers.fileName}`, `${answers.fileName}`, answers.canCreateFileForcefully);
          }

          console.log('');
          break;
        case ClientFileTypes.SERVICE:
          console.log('');
          createClientServiceFile(filePath, `${answers.fileName}`, answers.canCreateFileForcefully);
          console.log('');
          break;
        case ClientFileTypes.STORE:
          console.log('');
          createClientStoreFile(filePath, `${answers.fileName}`, answers.canCreateFileForcefully);
          console.log('');
          break;
        default:
          console.log('');
          console.log(`${red(`Type: Unknown Type '${bold(answers.fileType)}'`)}`);
          console.log(`${red(`Please select any of these types ${bold(enumToArray(ClientFileTypes))}`)}`);
          console.log('');
          break;
      }
    }
  } catch (e) {
    console.log('');
    console.log(`${red('UNKNOWN ERROR')}`);
    console.log(`${red(e)}`);
    console.log('');
  }
};

promptUser();

console.log('');
