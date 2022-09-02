const robotsA = [
    {nick : "Soro",damage : 505 },
    {nick : "Poko",damage : 350 },
    {nick : "Toko",damage : 340 },
    {nick : "JoMo",damage : 404 },
    {nick : "Moko",damage : 540 },
]

let set = new Array(1,2,1,2,3,9,12,15);

function getHighNums(arr,percentage,fillpercentage){
    let perc=0;
    let sorted=arr.sort(function(a,b){ return a -b});
    let total=0;
    for(let i=0;i<arr.length;i++) total+=arr[i];
    for(let j=sorted.length-1;j>=0;j--){
        perc+=sorted[j]/total*100;
        if(fillpercentage){
            if(perc > percentage) return sorted.slice(j,sorted.length);
        }else{ 
            if(sorted[j]/total*100 < percentage) return sorted.slice(j+1,sorted.length);
        }
    }
    return sorted;

}

console.log(getHighNums(set, 10, false))//9,12,15
console.log(getHighNums(set, 50, true))



// const robotsB = [];

// let i = 450;

// for (let robotC of robotsA){
//     if(robotC.damage > i){
//         robotsB.push(robotC)
//     }
// }
// console.log(robotsB);



// let value = 0;
// while(value < 75){
//     console.log(value);
//     if(value == 50){
//         break;
//     }
//     value++;
// }
