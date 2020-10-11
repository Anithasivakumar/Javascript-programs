let user=[{name: "anitha",usage:"Computer"},{  name:"mownica",usage: "MobilePhone"},{name:"lavanya",usage:"tab"}] //array
function getdata(name,callback)
{
    let flag = false;
    for(let i = 0; i < user.length;i++){
        if(name === user[i].name){     //if condition is satisfied it will take below seconds flag true
            flag = true;                 
            return setTimeout(()=>
            {
                callback(null,user[i].usage)},3000); //settimeout is similiar to asynchronous call async
            //return callback(students[i].name);
        }
    }
    if(flag == false){
        //return setTimeout(()=>{callback("error")},1000);
        sleep(3000);   //until it prints (sleep function) other statements are not displaced, it set all process off
        return callback("error",null);
    }
}
function callback(err,usage){       //call back function processing functions
    if(err == null ){
	 console.log(usage);
    }else{
        console.log("Usage not available. ")
    }
}

function sleep(milliseconds)
 {  // sleep function
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break; // breaks for loop once the 
      }
    }
  }
getdata("mownica",callback);
getdata(9,callback);
console.log("Hello ");
console.log(9+6);
console.log("welcome");
console.log(8-2);