const moduleFunction = require('./mymodule');

moduleFunction(process.argv[2],process.argv[3], (err,files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file=>{
        console.log(file);
    });
});

