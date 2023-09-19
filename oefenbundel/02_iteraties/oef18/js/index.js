let eindGetal = Number(prompt("Geef een eindgetal in: "));
let rdm = Math.floor(Math.random() * (eindGetal));
let i = 1;
let gok = Number(prompt("Wat is je gok: "));

while (rdm !== gok){

    if (gok<rdm){
        gok = Number(prompt("Het getal is groter dan je gok. Wat is je nieuwe gok: "));
        i++;
    }else{
        gok = Number(prompt("Het getal is kleiner dan je gok. Wat is je nieuwe gok: "));
        i++;
    }
}


// for (i; rdm !== gok; i++) {
//     gok = Number(prompt("Wat is je gok: "));
// }

document.write(`Proficiat! Het getal was ${rdm}. In ${i} keer raden heb je het gevonden!`);