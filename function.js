// function one(){
//     console.log("first function");
//     return "done";
// }
// const a=()=>{
//     console.log("Arrow function"); 
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     return "done";
// }
// let a1=[1,2,3,4];
// let b1=["one","two","three"];
// let b=[...a1,...b1];
// let c=[a1,b1];
// console.log(a1 +" "+b1);
// console.log(b);
// console.log(c);
// console.log(one());
// console.log(a());
// function f1(){
//     console.log("First condition");
// }
// function f2(){
//   console.log("Second condition");
//   f1();
// }
// setTimeout(f2,5000);
// function success(){
//     console.log("Success");
// }
// function fail(){
//     console.log("Fail");
// }
// function currentbalance(data,call){
//     let DATA=data>=0?data:undefined;
//     setTimeout(call,3000);
//     console.log(DATA);
   
// }
// currentbalance(4,success);
// currentbalance(-1,fail);

async function API1(){
    let a=await fetch("https://66e527525cc7f9b6273c6fdc.mockapi.io/one");
    let b=await a.json();
    console.table(b);
    return b;
}

// async function API1(){
//     try {
//     let a=fetch("https://66e527525cc7f9b6273c6fdc.mockapi.io/one");
//     let b=a.json();
//     console.log(b);
//     } catch (error) {
//         console.log(error);
//     }
// }
// async function API1(){
//     let a=fetch("https://66e527525cc7f9b6273c6fdc.mockapi.io/one");
//     let b=a.json();
//     console.log(b);
// }
// function API1(){
//     let a=fetch("https://66e527525cc7f9b6273c6fdc.mockapi.io/one");
//     let b=a.json();
//     console.log(b);
// }
async function APIDATA(){
const as=await API1();
// console.log(as);
const ass=new Map();
const asss=new Map();
let item;
as.forEach(item=> {
    ass.set(item.id,item.name,item.email,item.inactive);
    asss.set(item.id,item);
});
console.table(ass);
console.table(asss);
}
APIDATA();