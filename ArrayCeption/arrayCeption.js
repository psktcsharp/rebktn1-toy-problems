// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  deepest([ [ 5 ], [ [ ] ] ]) ==>	2
//  array:
//  deepest([ 10, 20, 30, 40 ]) ==>	1
//  array:
//  deepest([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]) ==>	4
//  array:
//  deepest([ ]) ==>	0
//  array:
//  deepest([ [ [ ] ] ]) ==>	0
var deepest = function (array) {
    var deepCounter = 0
    for (var i = 0; i < Array.length; i++) {
        if (Array.isArray(array[i])) {
            deepCounter++
            deepest(array[i])
        }
        console.log(array[i])
        //     if(array[i][0] !="]"){
        //         return i
        //     }
        return deepCounter
    }
}
