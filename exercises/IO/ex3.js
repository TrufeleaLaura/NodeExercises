const fs=require('fs');
const buffer=fs.readFileSync(process.argv[2]);
const str=buffer.toString();
const count=str.split('\n');
console.log(count.length-1);
