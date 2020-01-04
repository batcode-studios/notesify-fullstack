import { writeFile } from 'fs';
import { bold, green, red } from 'colors';

export const createFile = (filePath: string, fileData: any): void => {
  writeFile(filePath, fileData, (error: any): void => {
    if (error) {
      console.log(red(`Error Message: ${bold(`There was a problem creating ${filePath}`)}`));
      console.log(red(`Error Trace: ${bold(error)}`));
    }
    console.log(green(`File Created: ${bold(`${filePath}`)}`));
  });
};
