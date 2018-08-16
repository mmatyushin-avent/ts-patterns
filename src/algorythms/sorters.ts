// tslint:disable:no-console

/**
 * JS built-in sorting function
 */
export function defaultSort<T>(unsortedCollection: T[], compareFn?: (a: T, b: T) => number): T[] {
  const clonedCollection = [...unsortedCollection];
  clonedCollection.sort(compareFn);

  return clonedCollection;
}

/**
 * Quick Sort
 */
export function quickSort<T>(unsortedCollection: T[]): T[] {
  if (unsortedCollection.length <= 1) {
    return unsortedCollection;
  }

  const processingCollection = [...unsortedCollection];
  const pivotIndex = Math.floor(processingCollection.length / 2);
  const pivot = processingCollection[pivotIndex];
  const leftSide = [];
  const rightSide = [];

  processingCollection.splice(pivotIndex, 1);

  for (const item of processingCollection) {
    if (item <= pivot) {
      leftSide.push(item);
    } else {
      rightSide.push(item);
    }
  }

  return quickSort(leftSide)
    .concat(pivot)
    .concat(quickSort(rightSide));
}

/**
 * Bubble Sort (iterative realization)
 */
export function bubbleSort<T>(unsortedCollection: T[]): T[] {
  const clonedCollection = [...unsortedCollection];

  for (let i = 0, iMax = clonedCollection.length; i < iMax; i++) {
    for (let j = 0, jMax = iMax - i; j < jMax; j++) {
      if (clonedCollection[j] > clonedCollection[j + 1]) {
        const temp = clonedCollection[j];
        clonedCollection[j] = clonedCollection[j + 1];
        clonedCollection[j + 1] = temp;
      }
    }
  }

  return clonedCollection;
}
