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

// let arr = [1,2,3,4,5]
// let k = Number(prompt("Enter k value"))
// k = k % arr.length

// let copy = arr[0]
// for (let j =0;j<k;j++){
//     let copy = arr[0]
//     for (let i = 0;i<arr.length-1;i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1]=copy
// }

// console.log(arr)

// let arr = [1,2,3,4,5]
// let k = Number(prompt("Enter k value"))
// let temp = new Array(arr.length)
// k = k % arr.length


// for (let i = 0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%(arr.length)]
// }

// console.log(temp)

// let arr=[1,2,3,4,5]
// let k = Number(prompt("enter a value"))
// k = k % arr.length
// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)
// function reverse(i,j){
//     while(i<j){
//         let temp= arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }
// }

// console.log(arr);




// remove duplicates

// function  removeduplicates(nums)
// {
//     let j=1;
//     for (let i = 0; i<nums.length-1;i++){
//         if(nums[i] != nums[i+1]){
//             nums[j]= nums[i+1]
//             j++
//         }
//     }
//     return j 
// }



// Merge Sorted Array

// let arr1 = [2,5,6]
// let arr2= [1,3,4,8]
// let merge = new Array(arr1.length + arr2.length)
// let i = k = j = 0

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge [k++] = arr1[i++]
//     } else {
//         merge[k++]=arr2[j++]
//     }

// } while(j<arr2.length){
//  merge[k++]=arr2[j++]
// }while(i<arr1.length){
//     merge[k++]=arr1[i++]
// }

// console.log(merge)


// Best time to buy and sell stock

// function maxProfit(prices){
//     let maxProfit = 0;
//     let min = prices[0];
//     for(let i = 0 ;i<prices.length;i++){
//         if(prices[i]<min) min = prices[i]
//         let profit = arr[i]-min;
//         maxProfit=Math.max(maxProfit,profit)
//     }
//     return maxProfit
// };

// sort the color
// let i = 0,j=0,k=arr.length-1
// while(i<k){

// }



//Maximum Subarray / Kadanes Algorithm

// function maxSubArray (nums) {
//     let max = -Infinity;
//     let sum = 0
//     for (let i = 0;i<nums.length;i++){
//         sum += nums[i]
//         max = Math.max(max,sum)
//         if(sum<0) sum = 0;
//     }
//     return max;
// };

// Majority Element/Moore's Voting ALgorithm
// function majorityElement(nums){}
//  let ans = nums[0];
//  let count = 1;
//  for(let i = 1;i<nums.length;i++){
//     if(count==0){
//         ans=nums[i]
//         count= 1;
//     } else if(ans ==nums[i]) count++;
//     else count--
//  }}


//Trapping rain water

function rainwater(hieght){
    let left = new Array(hieght.length)
    let right = new Array(hieght.length)
    let maxLeft = hieght[0], maxRight = hieght[hieght.length-1];
    left[0] = maxLeft,right[right.length-1] = maxRight


    for(let i = 1;i<hieght.length;i++){
        maxLeft = Math.max(hieght[i],maxLeft)
        left[i] = maxLeft;
    }
    for(let i = hieght.length-2;i>=0;i--){
        maxRight=Math.max(hieght[i],maxRight)
        right[i]=maxRight;
    }
    let ans = 0;
    for(let i =0;i<hieght;i++){
        ans+=Math.min(left[i],right[i]-hieght[i])
    }
    return ans;

}
