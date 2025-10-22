// left rotation

// let arr = [1,2,3,4,5]

// let copy = arr[0]

// for (let i = 0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }

// arr[arr.length-1] = copy
// console.log(arr)

//right rotation

// let arr= [1,2,3,4,5
// ]

// let copy = arr[arr.length-1];

// for (let i =arr.length-1;i<0;i--){
//     arr[i]=arr[i-1]
// }

// console.log(arr)

// left rotation by k 

let arr = [1,2,3,4,5]
let k = number(prompt("Enter k value"))

let copy = arr[0]
for (let j =0;j<k;j++){
    let copy = arr[0]
    for (let i = 0;i<arr.length-1;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=copy
}