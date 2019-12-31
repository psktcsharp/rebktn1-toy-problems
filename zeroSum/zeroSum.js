var zeroSum = function (arry) {
    var store = {}
    var resultArray = []
    for (var i = 0; i < arry.length; i++) {
        store[arry[i]] = arry[i];
        resultArray.push((arry[i] - store[Math.abs(arry[i])] === 0))
    }
    return resultArray.includes(false)
}