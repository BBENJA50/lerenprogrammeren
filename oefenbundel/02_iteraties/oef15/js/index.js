//Opvragen hoeveel getallen de gebruiker wil ingeven
let aantalLoops = Number(prompt("Hoeveel getallen wil je ingeven?"));
let som = 0;
let gemiddelde = 0;
let aantalGetallen = 1;

//x aantal keer laten ingeven
while (aantalLoops > 0){
    let i = Number(prompt("Geef getal " + aantalGetallen + " in:"));
    som += i;
    aantalGetallen ++;
    aantalLoops --;
}

//bereken gemiddelde
gemiddelde = som / (aantalGetallen-1);

//afdrukken van de som en het gemiddelde
document.write("De totale som van de " + (aantalGetallen-1) + " getallen is: " +som + "<br>");
document.write("Het gemiddelde van de " + (aantalGetallen-1) + " getallen is: " + gemiddelde);