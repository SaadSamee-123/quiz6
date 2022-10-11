let arr = [1, 2, 5, 4, 2, 6, 1, 1, 1];

let arrayOne = arr.filter((element, index) => {
  return arr.indexOf(element) === index;
});

console.log(arrayOne);

// let arr = [1, 2, 3, 4, 7, "str", "13", 8, "2"];

// let sum = 0,
//   i = arr.length;

// while (i--) {
//   sum += parseInt(arr[i]) || 0;
// }

// console.log(sum);
