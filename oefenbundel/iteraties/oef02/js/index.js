let aantalSterren = Number(prompt("Max aantal sterren?: "));
let ster = "";

for(let i= 1 ; i <=aantalSterren ; i++){
    ster += "*";
    document.write(ster + "<br>");
}