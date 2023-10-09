let geboortejaar = Number(prompt("Geef je geboortejaar in."));
let huidigJaar = Number(prompt("Geef het huidige jaar in."));

if (huidigJaar-geboortejaar >= 18){
    document.write("Vanaf nu mag ik alles binnen de wettelijke grenzen!");
}else{
    document.write("Gelukkig heb ik mijn ouders die alles voor me regelen.");

}
