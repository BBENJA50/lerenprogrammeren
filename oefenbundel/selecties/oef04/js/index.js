
let geboorteJaar = prompt("Geef uw geboortejaar in:");
let lopendeJaartal = prompt("Geef het lopende jaartal in:");

if (lopendeJaartal - geboorteJaar >= 18){
    document.write("Vanaf nu mag, kan en beslis ik alles binnen de wettelijke grenzen.");
}else if (lopendeJaartal - geboorteJaar < 18 && lopendeJaartal - geboorteJaar > 0){
    document.write("Gelukkig heb ik mijn ouders die alles voor me regelen.")
}else {
    document.write("Je leeftijd is negatief, dit is onmogelijk!")
}
