 let temps =parseInt(prompt("Saisir le temps T "));
 let hours, minutes, sec, a,b,c;

 a=temps/3600;
 hours= Math.floor(a);

b=60*(a-hours);
minutes=Math.floor(b);

c=60*(b-minutes);
sec =Math.floor(c);

 if (temps < 3600) {
    alert("You have done " + minutes +" minutes " + sec + " sec")
 
 } else {
    alert("It's" + hours + " hours " + minutes +" minutes " + sec + " sec")
 }
