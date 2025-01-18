const user={
    userName:"uttam",
    price:555,

    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to website`)
      //  console.log(this);
    }
}

// user.welcomeMessage()
// user.userName='raj'
// user.welcomeMessage()

// console.log(this)

// function job(){
//     console.log(this);
// }
// job()

// const pro=function(){
//     let username="uttam"
//     console.log(this.username)

// }============>undefine


// const pro=()=>{
//     let username="uttam"
//     console.log(this)

// }
// pro()=================>undefine


// let num1=5;
// let num2=3

// const add=(num1,num2)=>{
//     return num1 + num2
// } ===========================here its executed and produce output 8

console.log(add(num1,num2))
console.log(add(7,8))

// const addthree = (num1,num2,num3) => (num1+num2+num3)
// console.log(addthree(5,6,7))                           =============not need to return keyword becase of internally function  calling  but it's definition is under paranthesis bracket is important if we use curly bracket then we have need to write retun keyword 

// const myArray = [2,3,5,7,8]
// myArray.forEach()