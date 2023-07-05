// Make sure we got a filename on the command line.
var newstring="";
var newarray=[];
var listofpic=0
function bigqu (data,clength) {
		// do something
		//var buff=this.data;
		var buffstring=[];

		newstring=data.replace('(',' ');
		newstring=data.replace(')',' ');
		if (newstring.match(" ")){
		buffstring.push(newstring.split(' ')[0]);
         // buffstring.push(newstring.split(' '));
		//console.log(listofpic+'at'+buffstring);
newarray.push(buffstring);
		}else{newarray.push(newstring);
}
		

		//console.log('run test left '+newstring);
		//console.log ('run '+ newstring); 
		listofpic++;

		if (listofpic==clength){
newarray.shift();
					console.log ("var drawdata=[");
	
		for (var i=0;i<=newarray.length;i++){
		console.log("["+newarray[i+0]+","+newarray[i+1]+","+newarray[i+2]+","+newarray[i+3]+
		"],");
		
		}}
					//console.log (newarray);
//newarray.shift();
		//console.log(newarray[listofpic-4],newarray[listofpic-3],newarray[listofpic-2],newarray[listofpic-1]);}
		if (listofpic==clength){
			console.log('end');
			
		}
	}
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
 var parsedJSON = data;
var obj = JSON.parse(parsedJSON);
          for(var i=0; i<obj.picture.length; i++){
bigqu(obj.picture[i],obj.picture.length);
/* console.log("p3d.vertex("+obj.picture[i+1]+","+obj.picture[i+2]+","+obj.picture[i+3]+","+obj.picture[i+4]+","+obj.picture[i+5]+")");*/
}
//console.log(obj.picture[i]);

//console.log(obj.picture[0].replace('(',","));
});