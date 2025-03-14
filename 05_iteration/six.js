// coding = [ "java", "js", "python", "cpp", "ruby"]

// let values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(item)


const myNums= [1,2,3,4,5,6,7,8,9,10]
// const myNewNums = myNums.filter( (num) => num > 4 )
// console.log(myNewNums)

// const myNewNums= myNums.filter((item ) => {
//     return item>4
// })
// console.log(myNewNums)

// const NewNums= [];
// myNums.forEach((num)=>{
//     if(num>4){
//         NewNums.push(num);
//     }
// })
// console.log(NewNums)

const books= [
    { title:'book one',genre:'Fiction',publish:1981, edition:2004},
    { title:'book Two',genre:'Non-Fiction',publish:1992, edition:2008},
    { title:'book Tree',genre:'History',publish:1999, edition:2007},
    { title:'book Four',genre:'Non-Fiction',publish:1989, edition:2010},
    { title:'book Five',genre:'Science',publish:2009, edition:2014},
    { title:'book six',genre:'Fiction',publish:1987, edition:2010},
    { title:'book Seven',genre:'History',publish:1986, edition:1996},
    { title:'book Eight',genre:'Science',publish:2011, edition:2016},
    { title:'book nine',genre:'Non-Fiction',publish:1981, edition:1989}
]
// for(let i of books){
//     console.log(i.genre)
// }

let userBooks = books.filter( (bk) => bk.genre==="Fiction")
let userBooks1 = books.filter( (bk) => { return bk.publish>=2000})

// console.log(userBooks.filter((iteam)=>(books.genre)))
console.log(userBooks)
console.log(userBooks1)