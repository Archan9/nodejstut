// what is NodeJS
// event emitter loop
// var keyword
// function & arrow function
// callback (with setTimeout, setInterval, map)
// promise
// async-await
// modeule - export

// var - let - const

// var arr=[1,2,3,4];
// console.log(arr);

// const arr=[1,2,3,4];
// console.log(arr);

// arr=[5,6,7];
// console.log(arr);

// let arr=[1,2,3,4];
// console.log(arr);

// arr=[5,6,7];
// console.log(arr);

// function keyword

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// arrow functions & first class functions

// const add = (a,b)=>{
//     return a+b;
// }

// const add2 = (a,b,c,f1)=>{
//     return a+f1(b,c);
// }

// console.log(add2(1,2,3,add));

// callback
// const f1=(a,b)=>{ 
//     return a+b; // 4+5
// }
// const f2=(a,b,c,f1)=>{
//     return a+f1(b,c); // 3+f1(4,5)->9=12
// }

// console.log(f2(3,4,5,f1));

// setTimeout
// setTimeout(()=>{
//     console.log("set time out");
// },2000);

// map
// var arr=[1,2,3,4];
// //  square of each element
// var fn = (e,i)=>{
//     console.log(i);
//     return e*e;
// }
// arr = arr.map(fn);
// console.log(arr);

// setInterval
// var i=0;
// var id = setInterval(()=>{
//     i++;
//     console.log(i); //1, 2, 3, 4
//     if(i==4) clearInterval(id);
//     console.log("set interval");
// },2000);

// callback hell
// function f1(){
//     // fetch user details from db
//     function f2(){
//         // fetch posts of a user
//         function f3(){
//             // fetch comments to each post
//             function f4(){
//                 // fetch likes to each post
//             }
//         }
//     }
// }

// promise
// A, B, C

// pending: it means the task has been initiated, neither fulfilled nor failed
// fulfilled: the task has completed
// failed: the task has failed

// we want pf2 be executed only after pf1 is executed

// var pf1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         var val =  Math.random(); // generates a random value < 1
//         if(0.1 > 0.5) resolve("pf1: Resolved with the value: "+val);
//         else reject(new Error("pf1: Rejected with value: "+val));
//     })
// }

// var pf2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         var val =  Math.random(); // generates a random value < 1
//         if(val > 0.5) resolve("pf2: Resolved with the value: "+val);
//         else reject(new Error("pf2: Rejected with value: "+val));
//     })
// }

// pf1().then((res)=>{
//     console.log("pf1: inside then block: "+res);
//     pf2().then((res2)=>{
//         console.log("pf2: inside then block: "+res2);
//     }).catch((err2)=>{
//         console.log("pf2: inside catch block: "+err2.message);
//     })
// }).catch((err)=>{
//     console.log("pf1: inside catch block: "+err.message);
// })

// async - await

// var pf1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         var val =  Math.random(); // generates a random value < 1
//         if(val > 0.5) resolve("pf1: Resolved with the value: "+val);
//         else reject(new Error("pf1: Rejected with value: "+val));
//     })
// }

// var pf2 = ()=>{
//     return new Promise((resolve, reject)=>{
//         var val =  Math.random(); // generates a random value < 1
//         if(val > 0.5) resolve("pf2: Resolved with the value: "+val);
//         else reject(new Error("pf2: Rejected with value: "+val));
//     })
// }

// var asyncFunc = async(pf1, pf2)=>{
//     try {
//         var res1 = await pf1(); // returns salary of empl
//         console.log(res1);
//         var res2 = await pf2(); // calculates the avg
//         console.log(res2);
//     } catch (err) {
//         console.log("Inside catch block: "+err.message);
//     }
// }

// asyncFunc(pf1,pf2);

// object
// var obj = {
//     name:"archan",
//     role:"sde 1"
// }
// console.log(obj.name);

// export - require (object destructuring)
// var {add, sevr1} = require('./exp');

// // console.log(Exp);

// console.log(add(3,4));
// console.log(sevr1);

// exercise
// what will be the outputs and why
setTimeout(()=>{
    console.log("seTimeout 1");
},3000);

setTimeout(()=>{
    console.log("seTimeout 2");
},2000);