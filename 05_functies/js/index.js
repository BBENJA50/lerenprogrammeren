let zin = "fuLl sTaCk deVelOper";
let intro = "Welkom";


document.write(`Hoofdletters: ${zin.toUpperCase()}<br>`);//in hoofdletters zetten
document.write(`Kleine letters: ${zin.toLowerCase()}<br>`);//in kleine letters zetten
document.write(`${intro} ${zin}<br>`);
document.write(`Samenvoegen: ${intro.concat(" ", zin)}<br>`);// 2 strings samenvoegen
document.write(`charAt (positie 6): ${zin.charAt(6)}<br>`);//Toont index van gevraagde karakter
document.write(`CharCodeAt: ${zin.charCodeAt(6)}<br>`);//toont ascii code van gevraagde karakter

let mySplit = zin.split(""); //tussen de haakjes van split zet je de regel waar hij de string zal knippen, zet je niets dan zet hij alles in 1 index
document.write(`split: ${mySplit}<br>`);
document.write(`Array: ${mySplit[6]}<br>`);
document.write(`Substring: ${zin.substring(2,9)}<br>`); //start aan element 2, stop aan element 9

//positie van 1 karakter tonen
document.write(`positie van 1e 'l': ${zin.indexOf("l")}<br>`);
//karakter zit niet in de zin --> geeft -1 aan
document.write(`positie van 'z':${zin.indexOf("z")}<br>`);
//laatste positie van de letter
document.write(`positie van laatste 'l':${zin.lastIndexOf("l")}<br>`);
//1 karakter laten vervangen (enkel de eerste die hij tegenkomt)
document.write(`${zin.replace("l","AaAaA")}<br>`);

let getal = 5;
document.write(`getal naar een string omzetten: ${getal.toString()}<br>`);

let num1= parseFloat("10.6abc");//10.6
document.write(num1 + "<br>");
let num2= Number("10.6abc");//NaN
document.write(num2+ "<br>");
let num3= parseInt("10.6abc");//10
document.write(num3+ "<br>");

// Math.ceil(); //afronden naar boven
// floor //afronden naar beneden
// pow //machtsverheffing

