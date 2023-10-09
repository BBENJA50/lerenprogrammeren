let aantalSterren = Number(prompt("Hoeveel sterren wil je zien?"));
let ster = "*";

for (let i = 1; i<= aantalSterren; i++){
    document.write(ster +"<br>");
    ster+="*";
}