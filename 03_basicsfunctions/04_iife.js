(function one(){
    //named iife
    console.log("DB connected")
})();

((name)=> {
    //unamed iife
    console.log(`DB connected two ${name}`)
})(`uttam`)
