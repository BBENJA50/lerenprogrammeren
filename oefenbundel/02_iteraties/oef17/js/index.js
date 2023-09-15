//
//
// let aantalGetallen = Number(prompt("Geef het gewenste aantal getallen in:"));
// let i = 1;
//
// while (i<=aantalGetallen){
//     while(i %= 3 ){
//         document.write("dubbel getal");
//         console.log(i);
//     }
//     document.write(i + ",");
//     i++;
// }

let aantalGetallen = prompt("Voer het eindgetal in: ");
let i = 1;

while (i <= aantalGetallen) {
    //als i/10 = ja, dan enkel een spatie en verder naar beneden voor de komma
    if (i % 10 === 0) {
        document.write(" ");
    } else {
        // niet deelbaar door 10? dan gewoon het getal + de vraag of het deelbaar door 3 is
        document.write(i);
        if (i % 3 === 0) {
            //deelbaar door 3? zo ja, nogmaals een komma met getal
            document.write("," + i);
        }
    }
    //zo lang i kleiner is dan het gevraagde aantal getallen blijf je een komma zetten na de laatste actie
    if (i < aantalGetallen) {
        document.write(",");
    }
    i++;
}