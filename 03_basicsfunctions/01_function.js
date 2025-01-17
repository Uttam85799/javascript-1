
function sayMyName(){
    console.log("u")
    console.log("t")
    console.log("t")
    console.log("a")
    console.log("m")
}

sayMyName()

// function addTwoNumber(number1, number2){
//     result=number1+number2
//     console.log(result)
// }
// addTwoNumber(9,33)

function addTwoNumber(number1, number2){
    // result=number1+number2
    // return result
    return number1+number2
}

// console.log(addTwoNumber(5,3))

    function loginUserMessage(userName = "New user"){
        if(userName === undefined){
            console.log("please Enter a username")
            return
        }
    return `${userName} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
 console.log(calculateCartPrice(5,6,9))

 const user ={
    userName:"uttam",
    product : "website",
    price: 2500000
 }

 function handleObject(anyobject){
    console.log(`any product is ${anyobject.product} and price is ${anyobject.price}`)
 }

 handleObject({
    product : "website",
    price : "27000-2700000"
 })

 //... rest operation => means bundle of iteams
 handleObject(
    {
        product:"application",
        price : 2000000
    })
    const myNewArray=[400,200,100,600]
    
    function returnSecondValue(getArray){
        return getArray[1]
    }

    // console.log(returnSecondValue(myNewArray))
    console.log(returnSecondValue([500,300,400,1000]))