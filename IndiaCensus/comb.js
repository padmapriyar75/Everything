var fs = require('fs');
var files=["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var obj={};
var arrayOfEducationLevels = require("./mapper.json").educationalLevels;
var indexesOfEducationalLevels = [];
var educationalLevels = {};

for(var i=0;i<files.length;i++)
{
 var csv=fs.readFileSync(files[i],"utf8");
 var lines=csv.split("\n");
 var header = lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
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
fs.appendFile('Part1comb.json', Final,'utf8', function (err){
 if (err) throw err;
});

files.forEach(function(file) {
  var csvdata = fs.readFileSync(file,'utf8');
  var lines = csvdata.split('\n');
  var header = lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  var indexOfAgeGroup = header.indexOf("Age-group"),
      indexOfTotalRuralUrban = header.indexOf("Total/ Rural/ Urban");
  arrayOfEducationLevels.forEach(function(educationalLevel) {
    indexesOfEducationalLevels.push(header.indexOf(educationalLevel));
  });

  lines.forEach(function(line,index) {
    if(index > 0) {
      line = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      if(line[indexOfAgeGroup] === "All ages" && line[indexOfTotalRuralUrban] === "Total") {
        indexesOfEducationalLevels.forEach(function(indexOfEducationalLevel) {
          if(educationalLevels[header[indexOfEducationalLevel]] == undefined)
            educationalLevels[header[indexOfEducationalLevel]] = parseFloat(line[indexOfEducationalLevel]);
          else
            educationalLevels[header[indexOfEducationalLevel]] += parseFloat(line[indexOfEducationalLevel]);
        });
      }
    }
  });
});


var FinalArr=[];
var LevelNames;
EducationalLevelNamesValue=Object.keys(educationalLevels);

for(i=0;i< EducationalLevelNamesValue.length;i++)
{
 FinalObj={};
 FinalObj["Level"]= EducationalLevelNamesValue[i];
 LevelNames= EducationalLevelNamesValue[i];
 FinalObj["Numbers"]=educationalLevels[LevelNames];
 FinalArr.push(FinalObj);
}

var Fin=JSON.stringify(FinalArr);
fs.appendFile('Part2comb.json', Fin,'utf8', function (err){
 if (err) throw err;
});
