var fs = require('fs');
var f = fs.readFileSync("IndiaST2011.csv","utf8");
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
    var arr=[cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10];
    var total=new Array();
    var i=0;
    while(i<10)
    {
     total[i]=0;
    for(var j=1; j<=last; j++)
    {
        row=lines[j].split(",");
        if((row[totrururb]==="Total")&&(row[agegroup]==="All ages"))
        {
        total[i]=total[i]+parseInt(row[arr[i]]);
        }
    }
    i++;
      }
    var key1="Category",
        key2="Total";
    var pushingfunc=function(){
        this[key1],
        this[key2]
        }
    var jsonarray=[];
    for(i=0;i<arr.length;i++)
    {
      jsonarray[i]=new pushingfunc();
    jsonarray[i][key1]= heading[arr[i]];
    jsonarray[i][key2]=total[i];
    console.log(jsonarray[i][key2]);
}
    var part2json=JSON.stringify(array);
    //console.log(array);
    fs.writeFile('part2outST.json', part2json,'utf8', function (err) {
    if (err) throw err;
    });
