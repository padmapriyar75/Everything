var arr=[];
var fileNames = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var total=new Array();
function fileReader(fileNames)
{
fileNames.map(function(fileName)//
{
var fs = require('fs');
var f = fs.readFileSync(fileName).toString();
var lines = f.split("\n");
var last = lines.length-1;//number of records
var heading=lines[0].split(",");
var agegroup=heading.indexOf("Age-group"),
    totrururb=heading.indexOf("Total/ Rural/ Urban");
var cat1=heading.indexOf("Educational level - Literate without educational level - Persons"),
    cat2=heading.indexOf("Educational level - Below Primary - Persons"),
    cat3=heading.indexOf("Educational level - Primary - Persons"),
    cat4=heading.indexOf("Educational level - Middle - Persons"),
    cat5=heading.indexOf("Educational level - Matric/Secondary - Persons"),
    cat6=heading.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons"),
    cat6=heading.indexOf("Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons"),
    cat7=heading.indexOf("Educational level - Non-technical diploma or certificate not equal to degree - Persons"),
    cat8=heading.indexOf("Educational level - Technical diploma or certificate not equal to degree - Persons"),
    cat9=heading.indexOf("Educational level - Graduate & above - Persons"),
    cat10=heading.indexOf("Educational level - Unclassified - Persons");
   arr=[cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10];

    var i=0;
    while(i<10)
    {
     total[i]=0;
    for(var j=1; j<=last; j++)
    {
        var row=lines[j].split(",");
        if((row[totrururb]==="Total")&&(row[agegroup]==="All ages"))
        {
        total[i]=total[i]+parseInt(row[arr[i]]);
        }
    }
    i++;
  }//end of while loop
  console.log(total);

});
}



    var key1="Category",
        key2="Total";
    var pushingfunc=function(){
        this[key1],
        this[key2]
        }
    var array=[];
    for(i=0;i<arr.length;i++)
    {
      array[i]=new pushingfunc();
    array[i][key1]= heading[arr[i]];
    array[i][key2]=total[i];
    //console.log(array[i][key2]);
    }

    var part2json=JSON.stringify(array);
    // console.log(array);
  function writing()
  {
    var fs = require('fs');
    fs.writeFile('trial.json', part2json,'utf8', function (err) {
    if (err) throw err;
    });
  }
writing();
fileReader(fileNames);
