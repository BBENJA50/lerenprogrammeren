let som=0;
let aantalGetallen = Number(prompt("Hoeveel getallen?:"));
document.write("Je koos voor " + aantalGetallen + " getallen. <br>");

for(let i = 1; i<= aantalGetallen;i++){
    let getal = Number(prompt("Geef getal " + i +" in:" ));
    // som = som + getal;
    som+=getal;
    document.write("Getal " + i + " : " + getal + "<br>")
}

document.write("De totale som van de " + aantalGetallen + " getallen is " + som + ".");