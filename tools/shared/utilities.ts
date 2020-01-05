/* tslint:disable: no-console */
import { existsSync, mkdirSync, PathLike, writeFile } from 'fs';
import { bold, green, red } from 'colors';
import { IExtraClientFiles } from './constants';
import { serviceTemplate, storeTemplate, typescriptTemplate } from './templates';

const isFileOrDirectoryExist = (fileOrDirectoryName: PathLike): boolean => {
  return existsSync(fileOrDirectoryName);
};

const selectTemplate = (type: string, fileName: string, isServiceSelected: boolean): string => {
  if (type === 'ts') {
    return typescriptTemplate(fileName, isServiceSelected);
  } else {
    return '';
  }
};

export const createClientDirectory = (directoryName: PathLike): void => {
  if (!isFileOrDirectoryExist(directoryName)) {
    mkdirSync(directoryName);
  }
};

export const createClientComponentFile = (directoryName: PathLike, fileName: string, extensionType: string, isServiceSelected: boolean, createFileForcefully: boolean): void => {
  if (!isFileOrDirectoryExist(directoryName)) {
    mkdirSync(directoryName);
  }
  checkFileAndCreate(`${directoryName}/${fileName}.component.${extensionType}`, selectTemplate(extensionType, fileName, isServiceSelected), createFileForcefully);
};

export const createClientServiceFile = (directoryName: PathLike, fileName: string, createFileForcefully: boolean): void => {
  if (!isFileOrDirectoryExist(directoryName)) {
    mkdirSync(directoryName);
  }
  checkFileAndCreate(`${directoryName}/${fileName}.service.ts`, serviceTemplate(fileName), createFileForcefully);
};

export const createClientStoreFile = (directoryName: PathLike, fileName: string, createFileForcefully: boolean): void => {
  if (!isFileOrDirectoryExist(directoryName)) {
    mkdirSync(directoryName);
  }
  checkFileAndCreate(`${directoryName}/${fileName}.store.ts`, storeTemplate(fileName), createFileForcefully);
};

const checkFileAndCreate = (filePath: string, fileData: any, createFileForcefully: boolean): void => {
  if (createFileForcefully) {
    createFile(filePath, fileData);
  } else if (!createFileForcefully && !isFileOrDirectoryExist(filePath)) {
    createFile(filePath, fileData);
  } else {
    console.log(red(`File Exists: ${bold(`${filePath}`)}`));
  }
};

export const createFile = (filePath: PathLike, fileData: any): void => {
  writeFile(filePath, fileData, (error: any): void => {
    if (error) {
      console.log(red(`Error Message: ${bold(`There was a problem creating ${filePath}`)}`));
      console.log(red(`Error Trace: ${bold(error)}`));
    }
    console.log(green(`File Created: ${bold(`${filePath}`)}`));
  });
};

export const capitalize = (fileName): string => {
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

export const arrayToObject = (value: string[]): IExtraClientFiles => {
  return value.reduce((result: {}, item: string, index: number, array: string[]) => {
    result[item] = item;
    return result;
  }, {});
};
