import * as fs from 'fs';
import * as path from 'path';

// tslint:disable:no-console

function generateUnsortedNumArray(count: number): any[] {
  const result = [];
  let i = 0;

  while (i < count) {
    result.push(Math.round(Math.random() * count));
    i++;
  }

  return result;
}

fs.writeFile(
  path.join(__dirname, 'dummy.ts'),
  `export const dummy = [${generateUnsortedNumArray(10000)}];`,
  { encoding: 'utf8' },
  (e) => console.log(e),
);
