const fs=require('fs');
fs.readFile(process.argv[2],function(err,data){
    if(err) return console.error(err);
    const str=data.toString();
    const count=str.split('\n').length-1;
    console.log(count);
});