
let getal = Number(prompt("Geef een getal in:"));
let mijnArray = [];

while (getal > 0){
    mijnArray.push(getal);

    getal = Number(prompt("Geef een getal in:"));

}
document.write(mijnArray + "<br>");
let gevraagdGetal = Number(prompt("Geef een index in waarvan je getal wil weten"));
document.write("Getal met index " + gevraagdGetal + " van mijn array is: " + mijnArray[gevraagdGetal]);


