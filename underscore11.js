var data=[{username:"thri",password:"123"},
         {username:"raj",password:"456"}];
function checkUserExists(usename){
    for(var i=0;i<data.lenghth;i++){
        return data[i].username==username;
    }
    
}
var result=checkUserExists("kiran");
console.log(result)
