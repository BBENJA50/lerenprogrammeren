let faculteit = Number(prompt("Geef een getal in."));
let resultaat = 1;

for (let i = faculteit; i>0; i--){
    resultaat*=i;
}
document.write("Je resultaat is: "+resultaat);