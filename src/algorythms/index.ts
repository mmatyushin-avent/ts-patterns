import { dummy } from './dummy';
import { defaultSort, quickSort, bubbleSort } from './sorters';

// tslint:disable:no-console

type SorterFunc<T> = (data: T[], ...additionalArgs) => T[];

const consoleSeparator = '\n*****\n';

function testSorter<T>(sorterName: string, sorter: SorterFunc<T>, data: T[], ...additionalSorterArgs: any[]): void {
  console.log(consoleSeparator);
  console.time(`${sorterName} sorting time spent`);
  const sortedCollection = sorter(data, ...additionalSorterArgs);
  console.timeEnd(`${sorterName} sorting time spent`);
  console.log(`${sorterName} result slice: ${sortedCollection.slice(0, 10)}`);
}

function formatNumber(num: number): string {
  const temp = num.toString().split('').reverse();
  const times = Math.floor(temp.length / 3);

  for (let i = times; i > 0; i--) {
    temp.splice(i * 3, 0, ' ');
  }

  return temp.reverse().join('');
}

console.log(`length of tested array:`, formatNumber(dummy.length));

testSorter('quick', bubbleSort, dummy);
testSorter('quick', quickSort, dummy);
testSorter('default', defaultSort, dummy, (a, b) => a - b);

console.log(`${consoleSeparator}orig:`, dummy.slice(0, 10));
