function mergesort(array) {
  const len = array.length; // declare length variable 

if (len === 1){ // if array is length if of 1 or no objects, return it as it's sorted already 
}


  for(let size = 1; size < len; size *= 2) { // loop for the subarrays based on their size
 
   
    for(let leftStart = 0; leftStart < len; leftStart += 2 * size) {  // merges subarrays of same size

      var middle = Math.min(leftStart + size - 1, len - 1);  // calculate middle
      var end = Math.min(leftStart + 2 * size - 1, len - 1);  // calculate end of the right subarray 

      mergeIn(array, leftStart, middle, end);  
    }
  }

  return array;
}

function mergeIn(array, leftStart, middle, end) { 

  let indexLeft = leftStart; // beginning of left array
  let indexRight = middle + 1; // beginning of right array 

  while (indexLeft <= middle && indexRight <= end) {
    

    if (array[indexLeft] <= array[indexRight]) { // leave element as is in left array 
      indexLeft++; // goes to next element 
    } else { // [indexRight] is bigger, so we place it in k 
      const temp = array[indexRight];  // temporary variable before it gets sorted below
      let k = indexRight; 

    
      while (k > indexLeft) { // moves elements to the right for temp
        array[k] = array[k - 1];
        k--;
      }

      array[indexLeft] = temp; // element is placed as it is now sorted

      indexLeft++;
      middle++;
      indexRight++;
    }
  }
  return array;
}

