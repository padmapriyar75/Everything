var fs = require('fs');
var f = fs.readFileSync("India2011.csv","utf8");
var lines = f.split("\n");
var last = lines.length-1;//number of records
var heading=lines[0].split(",");
var categoryNames = ["Educational level - Literate without educational level - Persons",
                      "Educational level - Below Primary - Persons",
                      "Educational level - Primary - Persons",
                      "Educational level - Middle - Persons",
                      "Educational level - Matric/Secondary - Persons",
                      "Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons",
                      "Educational level - Non-technical diploma or certificate not equal to degree - Persons",
                      "Educational level - Technical diploma or certificate not equal to degree - Persons",
                      "Educational level - Graduate & above - Persons",
                      "Educational level - Unclassified - Persons"
                    ];
var categoryPositions = [];//this stores the value of the category names in the heading
var processedCategories = [];

var agegroup=heading.indexOf("Age-group"),
    totrururb=heading.indexOf("Total/ Rural/ Urban");

function Category(cat,val){
    this.Category = cat;
    this.Total = val;
}

for (counter=0; counter < categoryNames.length; counter++)
{
  categoryPositions[counter]=heading.indexOf(categoryNames[counter]);
}

for(var j=1; j<=last; j++)
{
    row=lines[j].split(",");
    if((row[totrururb]==="Total")&&(row[agegroup]==="All ages"))
    {
      for(counter=0;counter<categoryNames.length;counter++){
        var categoryName = categoryNames[counter];
        var categoryPosition = categoryPositions[counter];
        var categoryTotal = row[categoryPosition];

        // if() {

        // }
        //search for category object in processedCategories, if found then add "categoryTotal" value
        //in the "Total" property of that object

        //else the below code will be executed
        // else{
        // var objCategory = new Category(categoryName,categoryTotal);
        // processedCategories.push(objCategory);
      // }
      }
    }
}



// var part2json=JSON.stringify(processedCategories);
// console.log(part2json);

// fs.writeFile('part2.json', part2json,'utf8', function (err) {
// if (err) throw err;
// });
