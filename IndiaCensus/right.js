function fileReader(fileNames)
{

   fileNames.map(function(fileName)
   {
     var fs = require('fs');
     var data = fs.readFileSync(fileName).toString();
     filter(data);
   });

 /*age= format(age);
 edu = format(edu);*/

}
function data()
{
   var fs = require('fs');
   fs.writeFile("age.json",JSON.stringify(age),function(err)
   {
     if (err) throw err;
     console.log(age);

   });

   /*fs.writeFile("edu.json",JSON.stringify(edu), function(err)
   {
     if (err) throw err;
   });*
}

var fileNames = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];

fileReader(fileNames);
data();
