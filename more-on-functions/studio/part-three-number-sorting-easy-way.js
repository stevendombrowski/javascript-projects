//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  



function leastToGreatest(arr){
    let leastFirst = [];
    let min;
  
    while (arr.length > 0){
      min = (findMinValue(arr))
      leastFirst.push(min)
      arr.splice(arr.indexOf(min), 1)
  
    }
   
    return leastFirst
  
  }
//   console.log(leastToGreatest(nums1))
//   console.log(leastToGreatest(nums2))
//   console.log(leastToGreatest(nums3))
//Sort each array in decending order.

function findMaxValue(arr){
    let max = arr[0];
    for(i = 0; i <= arr.length; i++){
        if (max < arr[i]){
            max = arr[i]   
        }
    }
    return max;
}

function sortAscending(arr){
    let ascending = [];
    let max;

    while(arr.length > 0){
        max = findMaxValue(arr)
        ascending.unshift(max)
        arr.splice(arr.indexOf(max), 1)
        
    }
    return ascending
}


console.log(sortAscending(nums1))
  console.log(sortAscending(nums2))
  console.log(sortAscending(nums3))