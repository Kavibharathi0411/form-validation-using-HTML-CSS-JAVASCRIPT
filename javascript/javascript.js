// let a=true;
// let b=false;
// document.write(a+b);
// let person={
//     Firstname:"kavi",
//     Lastname:"bharathi",
//     Age:20
// };
// document.write(person.Lastname);
// let arr=[1,2,3];
// arr.length=0;
// console.log(arr);
// let x=10;
// x+= "5";
// document.write(x);
// let a=10;
// let b="10";
// document.write(a!==b)
// const student= {
//     Name:"kavi",
//     age:20,
//     rollno:7890
// }
// student.rollno=1234;
// console.log(student);
// let book= {
//     Year:2004,
//     Price:1300
// };
// let student= {
//     name:"kavi",
//     age:20
// };
// let merge= {
//     ...book,
//     ...student
// }
// console.log(merge);
// function Message(){
//     alert("welcome message");
// }
// function Message(){
//     alert("This form is submitted");
// }
// function Message(str){
//     document.write("My name is "+str);
// }
// Message("Kavibharathi")
// function Message(num1){
//     num3=num1*num1;
//    return num3;
// }
// console.log(Message(3)); 
// function Message(num1,num2){
//    let  sum=num1+num2;
//     let sub=num1-num2;
//     let mul=num1*num2;
//     let div=num1/num2;
//     arr=[sum,sub,mul,div];
//     return arr;
// }
// document.write(Message(20,10));
// function Message(num){
//     let num1=num*num*num;
//     return num1;
// }
// document.write(Message(2));
// function Message(num){
//     if(num%2==0)
//         return "even";
//     else
//     return "odd";
// }
// document.write(Message(9));
// function Message(str){
//     return str.toLowerCase();
// }
// function Message(num){
// if(num>0)
//     return "Positive";
// else if(num<0)
//     return "Negative";
// else
// return "Zero";
// }
// document.write(Message(0));
// function Message(num1,num2,num3){
//    num = Math.max(Math.max(num1,num2),num3);
//     return num; 
// }
// document.write(Message(10,20,30));
// function Message(num){
//     if(num%4==0 && num%100!=0 || num%400==0)
//         return "leap year";
//     else
//     return "not a leap year";
// }
// // document.write(Message(2005));
// function Message(x){
//     let sum=0;
//     let itr=0;
//     for(itr=0;itr<x.length;itr++){ //0<5 1<5 2<5 3<5 4<5
//       sum+=x[itr];//sum=0+1=1 sum=1+2=3  sum=3+3=6 sum=6+4=10 sum=10+5=15
//     //   avg=sum/x.length;
//     }
//     return sum;
// }
// let arr=[1,2,3,4,5];
// document.write(Message(arr));
// function Message(str1,str2){
// a=str1+str2;
// return a;    
// }
// document.write(Message("kavi","bharathi"));
// function Message(str){
//      a=str.length;
//     return a;
// }
// console.log(Message("kavi"));
// let age=40;
// if(age>=70){
//     document.write("Invalid");
// }
// else if(age>=60){
//     document.write("Invalid");}
// else if(age>=50){
//     document.write("Invalid");}
// else if(age>=40){
//     document.write("Valid");
// }
// else{
//     document.write("Invalid");
// 
// let num=15;
// if(num%3==0 && num%5==0){
//     document.write("3 star and 5 star");
// }
// else if(num%3==0){
//     document.write("3star");
// }
// else if(num%5==0){
//     document.write("5star");
// }
// else{
//     document.write("no star");
// }   
// let num=12;
// switch(num){
// case 1:
//     console.log("January");
//     break;
// case 2:
//     console.log("february");
//     break;
// case 3:
//     console.log("march");
//     break;
// case 4:
//     console.log("april");
//     break;
// case 5:
//     console.log("may");
//     break;
// case 6:
//     console.log("june");
//     break;
// case 7:
//     console.log("July");
//     break;
// case 8:
//     console.log("august");
//     break;
// case 9:
//     console.log("september");
//     break;
// case 10:
//     console.log("october");
//     break;
// case 11:
//     console.log("november");
//     break;
// case 12:
//     console.log("december");
//     break;
// default:
//     console.log("Invalid");
// } 
// let arr=["apple","orange","mango"]
// console.log(arr.re)
//  function footer(){
//     return {
//         name:"hello"
//     }
// };
//     console.log(footer());
// console.log(0.1+0.2);
// let arr=[1,2,3,4]
// let newArr=arr.map(x => x*2)
// console.log(newArr);
// let arr=["apple","orange","mango"];
// delete arr[1];
// console.log(arr);
//  let arr=["apple","orange","mango"];
// a=arr.reverse();
//  document.write(arr.reverse());
// let arr=[10,20,30,40];
// arr.sort();
// document.write(arr[arr.length-2]);
// let a=[1,2,3];
// let b=[1,3,4];
// for(let i=0;i<a.length;i++){//0<3 1<3
//         if(a[i]==b[i]){//1==1  
//             console.log("equal");
//         }
//         else{
//             console.log("not equal");
//             // break;
//         }
//     }
// let fruits=["apple","mango","orange","kiwi","papaya"];
// fruits.splice(1,3);
// document.write(fruits); 
// let fruits=["apple","apple","mango","kiwi","mango"];
// console.log(...new Set(fruits));

// const arr = [1, 2, 3];
// const newArr = [...arr]
// .slice()
// console.log(arr);
// let result=confirm("submission conformed");
// if(result==1){
//     window.alert("OK");
// }
// else{
//     window.alert("CANCEL");
// }
// let mes=prompt();
// if(mes=="ok"){
//     alertr("OK");
// }
// else{
//     alert("CANCEL");
// }

// let mes=prompt("enter name");
// if(mes!=null && mes!=" "){
//     document.write("OK");
// }
// else{
//     document.write("CANCEL");
// }
// let a;
// // let b="10";
// console.log(a===undefined);
// let a=10;
// let b=15;
// let c=10;
// console.log(a==c && c==a);
// let a=10;
// let c=10;
// console.log(a!=c);
// let num=20;
// console.log((num=10));
// let a=10,b=15;
// console.log(a+=b);
// let a=20,b=10;
// console.log(a-=b);
// let a=10,b=5;
// console.log(a/=b);
// let a=10;
// console.log(~a);
// let text="hello kavi";
// console.log(text.length);
// let str1="kavi";
// let str2="bharathi";
// console.log(str1.concat(str2));
// let str="kavibharathi";
// console.log(str.slice(0,5));
// let str="kavi bharathi";
// console.log(str.indexOf(" "));
// let str="KAVIBHARATHI";
// console.log(str.toLowerCase());
// let str="kavi bharathi";
//console.log(str.lastIndexOf("a"));
// function factorial(num){
//     let fact=1;
//     for( let itr=1;itr<=num;itr++){
//             fact=fact*itr;
//         }
//         return fact;
//     }
//         console.log(factorial(5));
// let welcome={
//     hello:function(){
//         console.log(this.fname+this.lname+this.city+this.state);
//     }
// }
// let place={
//     fname:"Kavibharathi ",
//     lname:"M ",
//     city:"Pollachi ",
//     state:"TamilNadu ",
// // }
// welcome.hello.call(place)
// let hello=() =>console.log("kavi");
// hello()
// let add=(a,b) =>a+b;
// console.log(add(2,3));
// let sqr=(a) =>a*a;
// console.log(sqr(5))
// document.getElementById("welcome").innerHTML="kavi";'

// let welcome=["bharathi","latha","lydia"];
// let message= welcome.filter (welcome=>welcome.length<6);
// console.log(message);

// let num=["kavibharathi"];
// let num1=num.map((x)=> x.toUpperCase());
// console.log(num1);

function validationform(){
var Fname=document.validateform.fname.value;
var Lname=document.validateform.lname.value;
var City=document.validateform.city.value;
var Number=document.validateform.phnumber.value;
var Address=document.validateform.add.value;
if(Fname==null || Fname==""){
    alert(" Enter Your Firstname");
    return false;
}
else if(Lname==null || Lname==""){
    alert("Enter Your Lastname");
return false;
}
else if(City==null || City==""){
    alert("Enter Your City");
return false;
}
else if(Number.length<11){
    alert("Enter valid Number");
    return false;
}
else if(Address==null || Address==""){
    alert("Enter Your Address");
    return false;
}
}




















  




