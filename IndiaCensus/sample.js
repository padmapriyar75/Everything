var fs = require('fs');
var f = fs.readFileSync("India2011.csv","utf8");
var line = f.split("\n");
  var ik = line.length-1;
​
 var hd=line[0].split(",");
 var z=hd.indexOf("Age-group"),
   z0=hd.indexOf("Table Name"),
   z1=hd.indexOf("Total/ Rural/ Urban"),
   z2=hd.indexOf("Literate - Persons");
​
var a0=hd[z0];
var a1=hd[z];
var a2="Total";
var cn=function(){
     this[a0],
     this[a1],
     this[a2]
 }
var m=6;
var b=[];
​
for (var i = 0; i <27 ; i++)
 {
   //from to 7 to 19
   if(m>6 && m<20)
   {
   var total=0;
   for (var j = 1; j <ik; j++)
   {
    n=line[j].split(",");
    if((n[z]==m)&&(n[z1]==="Total"))
     {
            total=total+parseInt(n[z2]);
            k=n[z];
     }
   }kl=n[z0]
 }
 //6 && 80
 else
 {
   var total=0;
   for (var j = 1; j <ik; j++)
   {
    n=line[j].split(",");
    if(m==80)
   {
     hs=n[z].split("+");
     hs1=hs[0];
     //console.log(hs1);
   }
   else
   {
      hs=n[z].split("-");
      hs1=hs[1];
   }
    //hs=n[z].split("-")
    if((hs[1]==m)&&(n[z1]==="Total"))
     {
            total=total+parseInt(n[z2]);
            k=n[z];
     }
      kl=n[z0];
   }
  }
  if(m>5&&m<19)
  m++;
  else
    m+=5;
    b[i]=new cn();
​
    b[i][a1]=k;
    b[i][a2]=total;
  }
​
​
console.log(b);
var b1=JSON.stringify(b);
//console.log(b1);
fs.appendFile('out1.json', b1,'utf8', function (err) {
 if (err) throw err;
});
