var promise = new Promise(function(resolve,reject){
  var a = "concat";
  var b= true;
  //if(a.length>b.length)
    if(b)
     resolve("Success!!");
  else
    reject(Error("failure"));
});
