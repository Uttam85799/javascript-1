const userEmail = "U@ttam.ai";

if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

//"uttam" ---> string have value return true
//" "--------> Null string have false value
// Nan ------> not a number have false value

// truthy values
// "0", 'false', " ", [], { }, function{}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {"Apple":"Seb","Ball":"Gend","Cat":"billi","Dog":"Kutta"};

// if(Object.keys(emptyObj).length === 0){
//     console.log("obj is empty");
// } else {
//     console.log("object has Keys and Value ")
// }


// Nullish coalescing operator (?? )

// let val1 =  null ?? 10; --> output is 10
// let val1 =  15 ?? 10;   --> output is 15
// let val1 =  15 ?? undefined;-> output is 15
// let val1 =  undefined ?? 10 -> output is 10
// let val1 = undefine ?? 10 ?? 15 -> output is 10   first value is assigned

// console.log(val1);


//terniary operator

// const iceTeaPrice = 80;

// iceTeaPrice >=80 ? console.log(`Price is : ${iceTeaPrice}`):console.log(`Price is More than 80 means price is ${iceTeaPrice}`);

