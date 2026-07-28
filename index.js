// console.log("hellow this is js.")

// const sum= function(a,b){
//     // return(Math.sqrt(a)+ Math.sqrt(b));
//     return a+b;
// }

// console.log(sum(20,30))
// const sum=(a,b)=>{return a+b}
// console.log(sum(20,30))

// IIFE(Immediately Invoked Function Expression)
// (()=>{
//     console.log("iife")

// })();
// var a= 23;
// if(a<40){
//     var a= 40;
//     console.log("value inside block "+a  )
// }
// console.log("value outside block " +a)
// let a= 23;
// if(a<40){
//     let a= 40;
//     console.log("value inside block "+a  )
// }
// console.log("value outside block " +a)

//callback
/*
function sum(a,b){
    return a+b;
}
function msgWithSum(clbk, msg){
    const result= clbk(40,50);
    console.log("HII,"+msg+"your result is= "+result)
}
msgWithSum(sum, "rahul")  */

function login(error, msz){
    if(error){
        console.log("error is: "+error)
    }else{
        console.log(msz)
    }
}
function loginhandler(username, password, clbk){
    if(username== "harshsingh2275" && password=="23456"){
        clbk(null, "login successfull")
    }else{
        clbk("invalid username or password", null)
    }
}
//loginhandler("harshsingh2275", "23456", login)
//loginhandler("harshsingh22", "23456", login)