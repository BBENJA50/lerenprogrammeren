//Nummer opvragen waarvan de gebruiker de faculteit wil weten
const faculteit = Number(prompt("Geef het getal in waarvan je de faculteit wil weten:"));
let i = 1;
let resultaat = 1;

while (i<=faculteit){
    resultaat = resultaat* i;
    document.write(resultaat + "<br>")
    i++;
}