function dc(ob1)         //ob1 =old object,ob2 =new object,dc=deepcopy
{
    var ob2=Object.assign({},ob1)      //all values ob1 is fully copied to ob2
    Object.keys(ob1).forEach(key=>{
        if(typeof ob1[key]==="Object")    // if key of ob1 is an object will be deep copied through function
        {
            ob2[key]=dc(ob1[key])  //object values alone copied 
        }
    })
    return ob2                    // remaining values  are returned
}
 function purpose(stationeryname,use,pinpoint){              //func
     this.stname=stationeryname    
     this.usage=use
     this.needletip=pinpoint
 }
 var pencil=new purpose("PENCIL","used for sketching","Grey color") 
 console.log(pencil)
 var pen=dc(pencil)
 console.log(pen)  // deepcopied