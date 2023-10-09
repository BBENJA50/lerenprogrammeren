let aantal = Number(prompt("Hoeveel getallen wil je ingeven?"));
let som = 0;
for (let i = 1; i<= aantal; i++){
    let getal = Number(prompt("Geef een getal in."));
    document.write("Getal: "+i+": "+getal +"<br>");
    som+=getal;
}

document.write("De som van de "+aantal+" getallen is: "+som+".");