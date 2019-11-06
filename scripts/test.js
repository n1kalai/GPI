let myArr = [1, 2, 15, 3, 4, 12, 5, 20, 6, 7, 8, 9, 10];
var i;
var box = 0;
let mainArr = []
for (i = 0; i < myArr.length; i++) {

    if (myArr[i - 1] > myArr[i]) {
        mainArr.push(myArr[i - 1]);
        var box = myArr[i - 1];
        myArr[i - 1] = myArr[i]
    }

    console.log(mainArr)
}


//function bubbleSort(array) {
//    var done = false;
//    while (!done) {
//        done = true;
//        for (var i = 1; i < array.length; i += 1) {
//            if (array[i - 1] > array[i]) {
//                done = false;
//                var tmp = array[i - 1];
//                array[i - 1] = array[i];
//                array[i] = tmp;
//            }
//        }
//    }
//
//    return array;
//}
//
//var numbers = [12, 10, 15, 11, 14, 13, 16];
//bubbleSort(numbers);
//console.log(numbers);