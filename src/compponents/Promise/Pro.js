var pobj = new Promise(function(resolve,reject){
    reject([
        { name:"pavan",city:"hyd"},
        { name:"kumar",city:"delhi"}
    ]);
    });
    
    

    pobj.then(function(succ){
        console.log("Success");
        console.log(succ);
    }).catch(function(fail){
        console.log("error");
        console.log(fail);
    })