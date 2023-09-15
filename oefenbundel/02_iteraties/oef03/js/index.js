let aantalSterren = Number(prompt("Geef een even aantal sterren in: "));
let ster = "";

for (let i = 1; i<=aantalSterren; i++){
    for (let j=1; j<=(aantalSterren/2); j++){
        document.write(ster + "*" + "<br>");
        ster+="*";
        console.log(j);
        console.log(i);
        console.log(ster);
    }
}