var express = require('express'),
	app = express(),
	fs = require("fs");
	
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/saveScreen', function(req, res){	
	var fileName = __dirname + '/uploads/' + req.body.fileName + '.jpg';
	fs.writeFile(fileName, new Buffer(req.body.imgBase64, "base64"), function(err) {
		err ? res.send('Oops! something bad happened. :(')  : res.send("Woow! screen saved successfully. :)");		
	});
});

app.listen(3000);
console.info('Node server is running on port : 3000');