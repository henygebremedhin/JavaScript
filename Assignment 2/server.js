/*
Here we are prepared to receive a POST message from the client,
and acknowledge that, with a very limited response back to the client
*/

/*
Use browser to view pages at http://localhost:3000/assignment2.html

When the blue cube is moved with the arrow keys, a POST message will be
sent to the server when the arrow key is released. The POST message will
contain a data string which is the location of the blue cube when the
arrow key was released. The server sends back a JSON string which the client should use
to put down a "waypoint" for where the arrow key was released

Also if the client types in the app text field and presses the "Submit Request" button
a JSON object containing the text field text will be send to this
server in a POST message.

Notice in this code we attach an event listener to the request object
to receive data that might come in in chunks. When the request end event
is posted we look and see if it is a POST message and if so extract the
data and process it.


*/

//Cntl+C to stop server (in Windows CMD console)

//DATA to be used in a future tutorial exercise.
/*Exercise: if the user types the title of a song that the server has,
  the server should send a JSON object back to the client to replace
  the words array in the client app.
*/

//hard coded songs to serve client

var peacefulEasyFeeling = [];

var sisterGoldenHair = [];

var brownEyedGirl = [];

var empty = [];

var block1 = [];

var block2 = [];

var block3 = [];

array = [];
//Colour

var colour = require('colour');  //npm install colour
  
let str = "Kaleb & Naol 2406 Assignment 2"
let testStr1 = ""
let testStr2 = ""

//Using Traditional FOR Loop
for(let i = 0; i<str.length; i++) {testStr2 += str[i]}

console.log("")
console.log(testStr2.green)

//Using a ES6 FOR-OF
let testStr3 = "";
for(let c of str) {testStr3 += c}

//console.log("")
console.log(testStr2.red)
//end colour
var songs = {
  "Peaceful Easy Feeling": peacefulEasyFeeling,
  "Sister Golden Hair": sisterGoldenHair,
  "Brown Eyed Girl": brownEyedGirl
};


//Server Code
var http = require("http"); //need to http
var fs = require("fs"); //need to read static files
var url = require("url"); //to parse url strings

fs.readFile('songs/peacefulEasyFeeling.txt', function(err, data){
  if(err)throw err;

  var wordPos = 0; 
  block1 = data.toString().split("\n");
  //console.log(block1); get rid of this

  for(var i=0; i<block1.length; i++){
    array = block1[i].split(" ");
    for (var j=0;j<array.length; j++){
	  //currentWord = array[j];
	  //if(j != 0)
		//wordPos += 25*currentWord.length/2.4; 
	  //console.log(wordPos); 
     // peacefulEasyFeeling.push({word: array[j], x:20+(100*j), y:50+(35*i)})
    }
	wordPos = 0; 
  }
  var upperString = "";
	var lowerString = "";
	if(err) throw err;
	//let block2 = data.toString().split("\n");

	for (var i= 0; i < block1.length;i++){
		upperString = "";
		lowerString = "";
		var temp = block1[i].toString().split(" ");
		for (var j = 0; j<temp.length;j++){
			if (temp[j].charAt(0) == "["){
				upperString += temp[j];
				peacefulEasyFeeling.push({word: temp[j], x:20+30*j, y:20+(46*i), colour: "green"})
			} else {
				upperString += (" ".repeat(temp[j].length));
			}
		}
		//console.log(upperString.green);
		for (var k = 0; k < temp.length; k++){
			if (temp[k].charAt(0)!= "["){
				lowerString += " " + temp[k] + " ";
				peacefulEasyFeeling.push({word: temp[k], x:20+90*k, y:30+(50*i), colour: "blue"})
			} else {
				lowerString += "".repeat(temp[k].length);
			}	
		}
		//console.log(lowerString.yellow);
	}
  // returnObj  = {};
  // returnObj.words = peacefulEasyFeeling;
  // return JSON.stringify(returnObj);
});

fs.readFile('songs/sisterGoldenHair.txt', function(err, data){
  if(err)throw err;

  block2 = data.toString().split("\n");

  for(var i=0; i<block2.length; i++){
    array = block2[i].split(" ");
    for (var j=0; j < array.length; j++){
      //sisterGoldenHair.push({word: array[j], x:20+90*j, y:50+(30*i)})
    }
  }
  //Colour
	var upperString = "";
	var lowerString = "";
	//var green = colour({r: 0, g: 255, b: 0})
	if(err) throw err;
	//let block2 = data.toString().split("\n");

	for (var i= 0; i < block2.length;i++){
		upperString = "";
		lowerString = "";
		var temp = block2[i].toString().split(" ");
		for (var j = 0; j<temp.length;j++){
			if (temp[j].charAt(0) == "["){
				upperString += temp[j];
				sisterGoldenHair.push({word: temp[j], x:20+120*j, y:20+(43*i), colour: "green"})
			} else {
				upperString += (" ".repeat(temp[j].length));
			}
		}
		//var result = upperString.fontcolor("green");
		//console.log(upperString.green);
		
		for (var k = 0; k < temp.length; k++){
			if (temp[k].charAt(0)!= "["){
				lowerString += " " + temp[k] + " ";
				sisterGoldenHair.push({word: temp[k], x:20+90*k, y:20+(50*i), colour: "blue"})
			} else {
				lowerString += "".repeat(temp[k].length);
			}	
		}
		//console.log(lowerString.yellow);
	}
  // returnObj = {};
  // returnObj.words = sisterGoldenHair;
  // return JSON.stringify(returnObj);
});

fs.readFile('songs/brownEyedGirl.txt', function(err, data){
  if(err) throw err;

   block3 = data.toString().split("\n");

  for(var i=0; i<block3.length; i++){
    array = block3[i].split(" ");
    for (var j = 0; j<array.length;j++){
	}
    //brownEyedGirl.push({word: array[j], x:20+90*j, y:80+(30*i)});}
	var upperString = "";
	var lowerString = "";
	if(err) throw err;
	//let block2 = data.toString().split("\n");

	for (var i= 0; i < block3.length;i++){
		upperString = "";
		lowerString = "";
		var temp = block3[i].toString().split(" ");
		for (var j = 0; j<temp.length;j++){
			if (temp[j].charAt(0) == "["){
				upperString += temp[j];
				brownEyedGirl.push({word: temp[j], x:20+120*j, y:20+(46*i), colour: "green"})
			} else {
				upperString += (" ".repeat(temp[j].length));
			}
		}
		//console.log(upperString.green);
		for (var k = 0; k < temp.length; k++){
			if (temp[k].charAt(0)!= "["){
				lowerString += " " + temp[k] + " ";
				brownEyedGirl.push({word: temp[k], x:20+90*k, y:30+(50*i), colour: "blue"})
			} else {
				lowerString += "".repeat(temp[k].length);
			}	
		}
		//console.log(lowerString.yellow);
	}
}});



var counter = 1000; //to count invocations of function(req,res)

var ROOT_DIR = "html"; //dir to serve static files from

var MIME_TYPES = {
  css: "text/css",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript", //should really be application/javascript
  json: "application/json",
  png: "image/png",
  txt: "text/plain"
};

var get_mime = function(filename) {
  var ext, type;
  for (ext in MIME_TYPES) {
    type = MIME_TYPES[ext];
    if (filename.indexOf(ext, filename.length - ext.length) !== -1) {
      return type;
    }
  }
  return MIME_TYPES["hellotxt"];
};

//var s = ['a', 'b', 'c'];

//var array = [brownEyedGirl, peacefulEasyFeeling, sisterGoldenHair];
//s = s.replace(/'/g,'"');
//s = JSON.parse("[" + s + "]");

http.createServer(function(request, response) {
    var urlObj = url.parse(request.url, true, false);
    console.log("\n============================");
    console.log("PATHNAME: " + urlObj.pathname);
    console.log("REQUEST: " + ROOT_DIR + urlObj.pathname);
    console.log("METHOD: " + request.method);

    var receivedData = "";

    //attached event handlers to collect the message data
    request.on("data", function(chunk) {
      receivedData += chunk;
    });

    //event handler for the end of the message
    request.on("end", function() {
      console.log("received data: ", receivedData);
      console.log("type: ", typeof receivedData);

      //if it is a POST request then echo back the data.
      if (request.method == "POST") {
        var dataObj = JSON.parse(receivedData);
		//console.log(receivedData.PATHNAME); 
        //console.log("received data object: ", dataObj);
        //console.log("type: ", typeof dataObj);
        //Here we can decide how to process the data object and what
        //object to send back to client.
        //FOR NOW EITHER JUST PASS BACK AN OBJECT
        //WITH "text" PROPERTY

        //TO DO: return the words array that the client requested
        //if it exists
		
		console.log(dataObj); 
		console.log(dataObj.name + " " + dataObj.file); 
		
		if(dataObj.name != null){
			fs.writeFile(dataObj.name, JSON.stringify(dataObj.file) , function(err){
				
				if(err)
					console.log(err); 
			});
		}
		
        console.log("USER REQUEST: " + dataObj.text);
        var returnObj = {};
		if (dataObj.text == 'Peaceful Easy Feeling'){
			returnObj.text = "FOUND: " + dataObj.text;
			returnObj.wordArray = peacefulEasyFeeling;
			returnObj.newLine = block1;
			//returnObj.upperString = block1;
			//returnObj.lowerString = block1;
		}
		else if (dataObj.text == 'Sister Golden Hair'){
			returnObj.text = "FOUND: " + dataObj.text;
			returnObj.wordArray = sisterGoldenHair;
			returnObj.newLine = block2;
		}
		else if (dataObj.text == 'Brown Eyed Girl'){
			returnObj.text = "FOUND: " + dataObj.text;
			returnObj.wordArray = brownEyedGirl;
			returnObj.newLine = block3;
		
		}else{
			returnObj.text = "NOT FOUND: " + dataObj.text;
			returnObj.wordArray = empty;
			returnObj.newLine = empty;
		}

        //object to return to client
        response.writeHead(200, { "Content-Type": MIME_TYPES["txt"] }); 
        response.end(JSON.stringify(returnObj)); //send just the JSON object
		
      }

      if (request.method == "GET") {
        //handle GET requests as static file requests
        var filePath = ROOT_DIR + urlObj.pathname;
        if (urlObj.pathname === "/") filePath = ROOT_DIR + "/example1.html";

        fs.readFile(filePath, function(err, data) {
          if (err) {
            //report error to console
            console.log("ERROR: " + JSON.stringify(err));
            //respond with not found 404 to client
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
          }
          response.writeHead(200, { "Content-Type": get_mime(filePath) });
          response.end(data);
        });
      }
    });
  })
  .listen(3000);

console.log("Server Running at http://127.0.0.1:3000  CNTL-C to quit");
