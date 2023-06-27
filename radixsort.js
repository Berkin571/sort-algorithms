function getNum(num, index) {
  const strNum = String(num);
  const end = strNum.length - 1;
  const foundNum = strNum[end - index];

  return foundNum === undefined ? 0 : parseInt(foundNum, 10);
}

function largestNum(arr) {
  let largest = "0";
  arr.forEach((num) => {
    const strNum = String(num);
    if (strNum.length > largest.length) largest = strNum;
  });
  return largest.length;
}

function radixSort(arr) {
  const maxLength = largestNum(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);

      if (num !== undefined) buckets[num].push(arr[j]);
    }

    arr = [].concat(...buckets);
    console.log(`Nach dem Durchlauf ${i + 1}: ${arr}`);
  }
  return arr;
}

let arr = [9, 11, 23, 84, 123, 345, 834, 3, 543, 936, 1, 543, 231, 123, 43];
console.log(`Ursprüngliches Array: ${arr}`);
console.log(`Sortiertes Array: ${radixSort(arr)}`);
