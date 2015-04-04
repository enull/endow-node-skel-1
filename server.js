var express = require('express'),
	server = express(),
	port = process.env.PORT || 10002;;

server.use(express.static(__dirname));

server.listen(port, function() {
    console.log('server listening on port ' + port);
});


