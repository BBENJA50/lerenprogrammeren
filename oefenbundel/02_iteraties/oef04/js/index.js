const ingevoerdgetal = Number(prompt("Geef het getal waarvan je de faculteit wenst:"));
let faculteit = 1;
let faculteitString = ingevoerdgetal;

for(let i = ingevoerdgetal; i>=1; i--){
    faculteit *= i;
    if (i !== ingevoerdgetal){
        faculteitString += "x" +i;
    }
}
document.write(ingevoerdgetal + "! = " + faculteit + "<br>");
document.write(faculteitString+ "=" + faculteit);