let arr10 = [33, 39, 32, 34, 29, 39, 38, 37, 36];
let arr1Dollar = [51, 52, 51, 50, 49, 48, 49, 47];
let arrNoProfit = [60, 59, 58, 57, 56, 55, 54, 53, 52];
let arrNothing = [5];

function best(arr) {
  let profit = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let transaction = arr[j] - arr[i];
      if (transaction > profit) {
        profit = transaction;
      }
    }
  }
  return profit;
}

console.log(best(arr10));
console.log(best(arr1Dollar));
console.log(best(arrNoProfit));
console.log(best(arrNothing));
