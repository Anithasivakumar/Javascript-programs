const mailidList = ['palani','shiva','ramu','balaji','preethi','govind','manokar','sai','anitha','amrish'] 
//db -"remote web server"
 
function mailidCheck(mailid,success,error) { // API -"remote web server"
    let flag = true;
    for(let ii = 0; ii < mailidList.length; ii++) {
        if(mailid == mailidList[ii]) {
            flag = false;
            sleep(2000);
            return error(mailid); // calls browser function
        }
    }
    if(flag === true) {
        sleep(2000);
        return success(mailid); // calls browser function
    }
}

function sleep(milliseconds) { // mimicing remote server call -"remote web server"
    const dt = Date.now(); 
    while ((Date.now() - dt) < milliseconds);
}

// Browser code
function successCallback(mailid) {
    console.log(mailid, " is available")
}