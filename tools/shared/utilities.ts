/* tslint:disable: no-console */
import { existsSync, mkdirSync, writeFile } from 'fs';
import { bold, green, red } from 'colors';
import { typescriptTemplate } from './constants';

const isDirectoryExist = (directoryName) => {
  return existsSync(directoryName);
};

const selectTemplate = (type, fileName) => {
  if (type === 'ts') {
    return typescriptTemplate(fileName);
  } else {
    return '';
  }
};

export const createClientFile = (directoryName, fileName, fileType) => {
  if (!isDirectoryExist(directoryName)) {
    mkdirSync(directoryName);
  }
  createFile(`${directoryName}/${fileName}.component.${fileType}`, selectTemplate(fileType, fileName));
};

export const createFile = (filePath: string, fileData: any): void => {
  writeFile(filePath, fileData, (error: any): void => {
    if (error) {
      console.log(red(`Error Message: ${bold(`There was a problem creating ${filePath}`)}`));
      console.log(red(`Error Trace: ${bold(error)}`));
    }
    console.log(green(`File Created: ${bold(`${filePath}`)}`));
  });
};

export const capitalize = (fileName) => {
  return fileName
  .toLowerCase()
  .split('-')
  .map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  })
  .join('');
};

export const enumToArray = (value: any): any => {
  return Object.keys(value)
  .map((key: string) => {
    return value[key];
  });
};
