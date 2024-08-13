function Promfunction(data){
    var pobj = new Promise(function(resolve,reject){
        reject(data);
        });
        pobj.then(function(succ){
            console.log("Success");
            console.log(succ);
        }).catch(function(fail){
            console.log("error");
            console.log(fail);
        })
}
Promfunction("Pavan");
