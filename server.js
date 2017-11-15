var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var svg2ttf = require('svg2ttf');
var exec = require('child_process').exec, child;
var qs = require('querystring');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser({limit: '20mb'}));
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(express.static('public'));
var server = http.createServer(app).listen(52273, function ()
{
	console.log('Server Running');
});

app.post('/save/', function(req, res) {
		 var save = req.body.save;
		 var splited = save.split('|');
		// console.log(splited[0]);

		 var text_first = fs.readFileSync('./files/first.svg','utf8',function(err){
			 console.log("readfirst");
		 });

		 var text_frist_2 = fs.readFileSync('./files/first_2.svg','utf8',function(err){
			 console.log("readfirst_2");
		 });

		 var sandwitch ="<font id=\""+splited[0]+"\" horiz-adv-x= \"1024\" > " + '\n' + " <font-face "+'\n'+ "font-family=\""+splited[0]+"\"";

		 var text_last = fs.readFileSync('./files/last.svg', 'utf8', function(err) {
			console.log('readsecond');
		 });

		 var data = text_first + sandwitch + text_frist_2 + '\n' + splited[1] + '\n' + text_last;
	//		save += '\n' + text;


		//  fs.appendFile('./files/first.svg', save, 'utf8', function(err) {
		//
		// 	console.log("Async file writing finished ");
		// });
		fs.writeFile('./files/'+splited[0]+'.svg', data, 'utf8', function(err) {

 		console.log("Async file writing finished ");
	 	});


	 // }
//	res.send(save);
	child = exec("node ./node_modules/svg2ttf/svg2ttf ./files/"+splited[0]+".svg" +" ./files/"+splited[0]+".ttf", function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
			if(error !== null) {
				console.log('exec error: ' + error);
			}
						});
});




app.get('/', function(req, res) {
	fs.readFile('./index.html', function (error, data) {
		res.writeHead(200, { 'Content-Type': 'text/html'} );
		res.end(data);
	});
});

app.get('/download/:id', function(req, res) {
	console.log(req.params.id);
	var filename = req.params.id;
	filepath = __dirname + "/files/" + filename;
	res.download(filepath);
});
//
// app.get('/convert/', function(req, res) {
// 	// var text = fs.readFileSync('ahn_m.svg', text, 'utf8');
// 	// fs.writeFile('./files/custom_font.svg',text,'utf8', function(err) {
// 	// 	console.log("Async file writing finished");
//
// 	// });
//
// 	child = exec("node ./node_modules/svg2ttf/svg2ttf ahn_m.svg ./files/custom_font.ttf", function (error, stdout, stderr) {
// 		console.log('stdout: ' + stdout);
// 		console.log('stderr: ' + stderr);
// 	if(error !== null) {
// 		console.log('exec error: ' + error);
// 	}
// });
//
//
// /*
// child = exec("ls", function (error, stdout, stderr) {
// 	console.log('stdout: ' + stdout);
// 	console.log('stderr: ' + stderr);
// 	if(error !== null) {
// 		console.log('exec error: ' + error);
// 	}
// });
// */
//
// });
