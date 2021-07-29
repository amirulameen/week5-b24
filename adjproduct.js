function adjacentElementsProduct(Array) {
    var max = 0;
    for(var i=0; i < Array.length; i++){
        if(Array[i] * Array[i+1] > max){
          max = Array[i]*Array[i+1];
        }
    }
  return max;
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]))
