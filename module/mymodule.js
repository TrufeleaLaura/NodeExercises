const fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) return callback(err);
        const regex=new RegExp(`\\.${ext}$`);
        const filtered=data.filter(file=>regex.test(file));
        callback(null, filtered);
    });
};

