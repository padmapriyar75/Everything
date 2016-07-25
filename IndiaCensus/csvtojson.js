var fs = require('fs');
var f = fs.readFileSync('India2011.csv', 'utf-8');
    f = f.split("\r\n");
headers = f.shift().split(",");
var json = [];
/*console.log(headers);*/
f.forEach(function(d){
   tmp = {}
   row = d.split(",")
   for(var i = 0; i < headers.length-1; i++){
       tmp[headers[i]] = row[i];
   }
     json.push(tmp);
});
fs.writeFileSync('out.json', JSON.stringify(json), 'utf8');
