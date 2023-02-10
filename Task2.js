//Task 1

function test(nums1, nums2) {
  var total = 0;
  for (var i = 0; i < nums1.length; i++) {
    total += nums1[i] * nums2[i];
  }
  return total == 0;
}

nums1 = [2, 4, 1];
nums2 = [2, 1, -8];
console.log("Original vectors:");
console.log(nums1 + "\n" + nums2);
console.log(
  "Check the said vectors are orthogonal or not: " + test(nums1, nums2)
);
nums1 = [1, 0, 1];
nums2 = [0, 0, 1];
console.log("Original vectors:");
console.log(nums1 + "\n" + nums2);
console.log(
  "Check the said vectors are orthogonal or not: " + test(nums1, nums2)
);
nums1 = [1, 0, 0];
nums2 = [0, 1, 0];
console.log("Original vectors:");
console.log(nums1 + "\n" + nums2);
console.log(
  "Check the said vectors are orthogonal or not: " + test(nums1, nums2)
);

// function dot_product(vector1, vector2) {
//   let result = 0;
//   for (let i = 0; i < 3; i++) {
//     result += vector1[i] * vector2[i];
//   }
//   return result;
// }

// console.log(dot_product([1, 2, 3], [4, 5, 6]));

//Task 2

const arr = [4, 3, 2, 10, 12, 1, 5, 6];
function InsertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(InsertionSort(arr));
