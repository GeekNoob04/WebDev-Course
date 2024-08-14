console.log("Loops tut");
let a = 1

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

let obj = {
    name: "Harshit",
    role: "Programmer",
    company: "CWH"
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)
// }

// for (const c of "Harshit") {
//     console.log(c)
// }
// let i=5
// while(i<10){
//     console.log(i)
//     i++
// }
let i=5
do {
    console.log(i)
    i++
} while (i<10); 