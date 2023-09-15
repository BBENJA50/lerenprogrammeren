//initieel nummer opvragen
let ingave = Number(prompt("Geef een positief getal in:"));
//totaal op 0 zetten
let totaal = 0;

//zo lang de ingave +0 is blijven we de vraag stellen en ingave overschrijven met de nieuwe prompt
while(ingave>=0){
    totaal+=ingave;
    ingave = Number(prompt("Geef een positief getal in:"));
}
document.write(totaal)