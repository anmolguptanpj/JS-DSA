// let arr = [];
// arr.push(100),
// arr.push(10),
// arr.push("anmol"),
// arr.push(false),


// console.log(arr[0])
// console.log(arr);


// arr[0]=100
// arr[1]=20
// arr[2]=6
// arr[7]=96
// arr.pop()
// console.log(arr);


// let a = 20

// console.log(a);

/************************************************* Javscript is dynamic Programming Language *************************************/ 



// let arr = new Array(3)

// arr[0]=100
// arr[1]=20
// arr[2]=6
// arr[7]=96

// console.log(arr);

/********************************** Creating Array with a prompt **************************/


// let arr = []
// arr[0]=Number(prompt("enter a value"));
// arr[1]=Number(prompt("enter a value"));
// arr[2]=Number(prompt("enter a value"));
// arr[3]=Number(prompt("enter a value"));
// arr[4]=Number(prompt("enter a value"));

// console.log(arr)


// let arr = new Array(5);

// for (let i = 0;i<arr.length;i++){
//     arr[i]=Number(prompt("enter a value"));
// }

// console.log(arr)

/**********************************Sum of an array**************************/

// let arr = [10,20,30,40,50]
// let sum = 0;
// for (let i = 0; i<arr.length;i++){
//     sum = sum +arr[i];
// }

// console.log(sum);


/*****************************finding max number in array***********************************************/

// let arr = [10,2,78,100,450];
// let max = arr[0];
// for (let i =1;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max)

/*****************************finding max 2 number in array***********************************************/

// let arr = [10,30,56,43,29,64,49,60];
// let max = Math.max(arr[0],arr[1]); console.log(max)
// let sMax = Math.min(arr[0],arr[1]); console.log(sMax)

// for (let i = 2;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     } else if (sMax<arr[i] && arr[i]<max){
//         sMax=arr[i]
//     }
// }

// console.log(`max is ${max} and sMax is ${sMax}`);

/*****************************traversing an array with an extra space***********************************************/

// let arr = [10,20,30,40,50,60]
// let temp = [];
// let j =0
// for (let i=arr.length-1;i>=0;i--){
//     temp[j]=arr[i]
//     j++
// }
// console.log(temp)


/*****************************traversing an array without an extra space ***********************************************/


// let arr = [10,20,30,40,50,60]

// let i = 0, j= arr.length-1;

// while(i<j){
//     let temp = arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }

// console.log(arr)

/***************************** setting alike elements together in an arry ***********************************************/

// let arr = [1,1,0,1,0,1,1,0,0];

// let i =0,j=0;

// while(i<arr.length){
//     if(arr[i]==0){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }

// console.log(arr)