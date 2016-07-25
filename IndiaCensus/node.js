var fs = require('fs');
var f = fs.readFileSync("India2011.csv","utf8");
 var line = f.split("\n");
   var ik = line.length-1;

  var hd=line[0].split(",");
 var a1=hd[5];
 var a2="Total";
 var cn=function(){
      this[a1],
      this[a2]
  }
var m=7;
 var b=[];
 for (var i = 0; i < 13; i++)
  {
    var total=0;
    for (var j = 1; j < ik; j++)
    {
     n=line[j].split(",");
     if((n[5]==m)&&(n[4]==="Total"))
      {
             total=total+parseInt(n[12]);
             k=n[5];
      }
    }
   b[i]=new cn();
   b[i][a1]=k;
   b[i][a2]=total;
   m++;
 }

console.log(b);
var b1=JSON.stringify(b);
//console.log(b1);
fs.writeFile('out.json', b1,'utf8');
