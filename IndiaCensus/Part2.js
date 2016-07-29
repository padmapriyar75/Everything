var fs = require('fs');
var files = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var arrayOfEducationLevels = require("./mapper.json").educationalLevels;
var indexesOfEducationalLevels = [];
var educationalLevels = {};


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

//
var FinalArray=[];
var LevelNames;
EducationalLevelNamesValue=Object.keys(educationalLevels);

for(i=0;i< EducationalLevelNamesValue.length;i++)
{
 FinalObj={};
 FinalObj["Level"]= EducationalLevelNamesValue[i];
 LevelNames= EducationalLevelNamesValue[i];
 FinalObj["Numbers"]=educationalLevels[LevelNames];
 FinalArray.push(FinalObj);
// console.log(LevelNames);
}
//console.log(EducationalLevelNamesValue);

//console.log(FinalArray);
var Final=JSON.stringify(FinalArray);
fs.appendFile('Part2Out.json', Final,'utf8', function (err){
 if (err) throw err;
});
