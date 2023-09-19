let aantalSterren = Number(prompt("Geef een even aantal sterren in: "));
let ster = "";
let j = 1;
let k = 0;

for (j; j <= (aantalSterren / 2); j++) {
    document.write(ster + "*" + "<br>");
    ster += "*";
}

for (let i = j-1;i>0;i--){
    ster = "";
    while (k<i){
        ster+="*";
        k++;
    }
    document.write(`${ster}<br>`);
    k=0;
}
