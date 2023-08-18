const fs = require('fs');
fs.readdir(process.argv[2], function(err,list) {
    if (err) return console.error(err);
    const regex=new RegExp(`\\.${process.argv[3]}$`);
    const filtered=list.filter(function(file) {
        return file.match(regex);
    });
    filtered.forEach(function(file) {
        console.log(file);
    });
});
