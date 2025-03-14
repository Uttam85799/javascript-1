const coding = ["js","ruby","java","python","cpp","swift"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((iteam)=>{
//     console.log(iteam)
// })

// function printme(item){
//    console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr)=> {
//     console.log(item,index,arr)
// })

const myCoading = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {   languageName: "Python",
        languageFileName:"py"
    }
]

myCoading.forEach((number)=>{
    
    if (number.languageFileName==="js")
    {
        console.log("language is "+number.languageName)
    }
})


// myCoading.forEach((item) =>{
//     if(item.languageFileName=="js")
//     {
//         console.log(item.languageName)
//     }
// })