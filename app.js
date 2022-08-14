  /**Exercice Algorithmique 2*/
   
 let x_a =parseInt(prompt("Saisir la distance A : "));
 let x_b =parseInt(prompt("Saisir la distance B : "));
 let y_a =parseInt(prompt("Saisir la distance A : "));
 let y_b =parseInt(prompt("Saisir la distance B : "));
 let AB, A,B,C;
A = Math.pow((x_b-x_a),2);
B = Math.pow((y_b-y_a),2);
C=A+B;
AB=Math.sqrt(C);
alert(AB)