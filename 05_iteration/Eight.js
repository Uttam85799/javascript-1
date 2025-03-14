const myNums = [1,2,3]

// const initialValue = 0;
// const myTotal=myNums.reduce( function(acc,curval) {
//     console.log("curval : ",curval," accumulator : ",acc)
//     return acc+curval
// },0)

// const myTotal= myNums.reduce( (acc,curval)=> {
//     console.log("acc",acc,"curval",curval)
//     return acc+curval},0)

const myTotal= myNums.reduce( (acc,curval)=> acc+curval ,0)
console.log(myTotal);

const sh

