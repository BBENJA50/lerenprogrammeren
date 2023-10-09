// Extra oefening:
// Gegeven een array getallenArray, schrijf een loop (for of while) die de grootste waarde in de array vindt en afdrukt. De gebruiker geeft getallen in tot hij een 0 ingeeft.
// Je mag enkel loops en arrays gebruiken, GEEN BUILT IN FUNCTIES.

let getallenArray = [];
// let index = -1;

for (let ingave = Number(prompt("geef een getal in.")); ingave !== 0; ingave = Number(prompt("geef een getal in.")) ){
    getallenArray.push(ingave);
    // index+=1;
}
document.write("Dit is je array: " + getallenArray + "<br>");
// document.write(index + "<br>");
document.write(getallenArray.length +"<br>");
let getalGroot = 0;

for (let i = 0; i <= getallenArray.length; i++){
    if (getallenArray[i]> getalGroot){
            getalGroot = getallenArray[i];
        }

}
document.write("Het grootste getal in de array is: " + getalGroot + "<br>")

