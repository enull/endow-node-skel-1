var express = require('express'),
	server = express(),
	port = process.env.PORT || 10002;;

server.use(express.static(__dirname + '/views'));

server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


server.listen(port, function() {
    console.log('server listening on port ' + port);
});


