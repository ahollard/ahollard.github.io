const async = require('async');

async.series([
    function(callback) {
        callback(null, 'marco');
    },
    function(callback) {
        callback(null, 'polo');
    },
    function(callback) {
        callback(null, 'is blind');
    }
],
function (err, results) {
    console.log(results);
}
)