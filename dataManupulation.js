function sumOfIntegers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && Number.isInteger(arr[i])) {
        sum += arr[i];
      } else {
        throw new Error('Elements must be integers');
      }
    }
    return sum;
  }

  const arr = [1, 4, 6, 0, 5];
  const res = sumOfIntegers(arr);
  console.log('Sum:', res);
  