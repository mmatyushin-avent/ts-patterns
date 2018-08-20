// tslint:disable:no-console

/** https://habr.com/post/112069/ */

import { wordList } from './dummy';
import { BloomFilter } from './BloomFilter';
import { HashFuncFabric } from './HashFuncFabric';

const words = new BloomFilter(64, [HashFuncFabric.create(), HashFuncFabric.create()]);
// const iterator = Array.from(Array(wordList.length));
const bloomMistakes: string[] = [];

wordList.forEach((word) => words.add(word));
wordList.forEach((word) => {
  const testResult = words.test(word);
  if (!testResult) bloomMistakes.push(word);
});

console.log(bloomMistakes);
