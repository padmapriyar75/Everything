var fs = require('fs');
var files=["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var obj={};

for(var i=0;i<files.length;i++)
{
 var csv=fs.readFileSync(files[i],"utf8");
 var lines=csv.split("\n");
 var header=lines[0].split(",");
 var indexOfAgeGroup=header.indexOf("Age-group"),
     indexOfTotalRuralUrban=header.indexOf("Total/ Rural/ Urban"),
     indexOfLiterates=header.indexOf("Literate - Persons");
 for(var j=1;j<lines.length;j++)
 {
   var row=lines[j].split(",");
   if(row[indexOfAgeGroup]!="0-6" && row[indexOfAgeGroup]!="All ages" && row[indexOfTotalRuralUrban]==="Total")
   {
     if(obj[row[indexOfAgeGroup]]===undefined)
     {
        obj[row[indexOfAgeGroup]]=parseInt(row[indexOfLiterates]);

     }
     else {
       obj[row[indexOfAgeGroup]]+=parseInt(row[indexOfLiterates]);
       }
   }
 }
}
var FinalArray=[];
var Age;
AgeValue=Object.keys(obj);
console.log(AgeValue.length);
for(i=0;i<AgeValue.length;i++)
{
 FinalObject={};
 FinalObject["AgeGroup"]=AgeValue[i];
 Age=AgeValue[i];
 FinalObject["LiteratePeople"]=obj[Age];
FinalArray.push(FinalObject);
}
console.log(FinalArray);

var Final=JSON.stringify(FinalArray);
fs.appendFile('age.json', Final,'utf8', function (err){
 if (err) throw err;
});
