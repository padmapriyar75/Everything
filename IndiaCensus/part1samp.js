var fs = require('fs');
var indiaCensusData = fs.readFileSync("India2011.csv","utf8");
var line = indiaCensusData.split("\n");
var last = line.length - 1;
var heading=line[0].split(",");
var ageGroup=heading.indexOf("Age-group");
var type=heading.indexOf("Total/ Rural/ Urban");
var literatePersons=heading.indexOf("Literate - Persons");

key1 = heading[ageGroup];
key2 = "Total";
var pushObj = function(){
  this[key1],
  this[key2]
}
var currentAge=7;
var finalArray=[];

for (var i = 0; i < 80; i++, currentAge++)
{
  var total = 0;
  for (var j = 1; j < last; j++)
  {
    var row = line[j].split(",");

    if((parseInt(row[ageGroup]) === currentAge) && (row[type]==="Total"))
    {
      total = total + parseInt(row[literatePersons]);
      var agecategory = row[ageGroup];
      console.log(row[ageGroup]);
      console.log(total);
    }
  //   hypenNum=row[ageGroup].split("-");
  //   prehyphen=hypenNum[1];
  //
  //   if(row[ageGroup]==currentAge && row[type]==="Total")
  //   {
  //     total=total+parseInt(row[literatePersons]);
  //     agecategory=row[ageGroup];
  //   }
  //
  //   if(currentAge === 80)
  //   {
  //     hypenNum=row[ageGroup].split("+");
  //     prehyphen=hypenNum[0];
  //     //  console.log(prehyphen)
  //   }
  // }
  finalArray[i]=new pushObj();
  finalArray[i][key1] = row[ageGroup];
  finalArray[i][key2] = total;
}

//console.log(b);
var part1json=JSON.stringify(finalArray);
//console.log(part1json);
fs.writeFile('part1sampout.json', part1json,'utf8', function (err) {
  if (err) throw err;
  console.log("Printed");
});
