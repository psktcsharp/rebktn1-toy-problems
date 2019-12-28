/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.
evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = function(array){

    for(var i = 0 ; i < array.length ;i++){
        var occurCounter = 0;
        for(var j = 0 ; j < array.length ;j++){
                if(deepEquals(array[i],array[j])){
                    occurCounter++
                }
                
        }
        if(occurCounter % 2 === 0){
                    console.log(array[i])
                    break
                }
    }
}

var deepEquals = function(obj1, obj2) {

  if (obj1 === obj2) { return true; }
  if (obj1 && !obj2 || !obj1 && obj2) { return false; }
  if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) { return false; }
  var obj1Keys = Object.keys(obj1);
  var obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) { return false; }
  if (obj1Keys.length === 0) { return true; } // two empty objects are equal
  for (var i = 0; i < obj1Keys.length; i++) {
    if (!obj2.hasOwnProperty(obj1Keys[i])) { return false; }
    if (!deepEquals(obj1[obj1Keys[i]], obj2[obj1Keys[i]])) { return false; }
  }
  return true;
  };
//test
// evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ])
// evenOccurrence([ "cat", "dog", "dig", "cat" ])
// evenOccurrence([[1,2,3], [1,2], [1,2,3]])
// evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}])