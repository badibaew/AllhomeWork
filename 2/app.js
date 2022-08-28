const robotsA = [
    {nick : "Soro",damage : 505 },
    {nick : "Poko",damage : 350 },
    {nick : "Toko",damage : 340 },
    {nick : "JoMo",damage : 404 },
    {nick : "Moko",damage : 540 },
]

const robotsB = [];

let i = 450;

for (let robotC of robotsA){
    if(robotC.damage > i){
        robotsB.push(robotC)
    }
}
console.log(robotsB);



// let value = 0;
// while(value < 75){
//     console.log(value);
//     if(value == 50){
//         break;
//     }
//     value++;
// }
