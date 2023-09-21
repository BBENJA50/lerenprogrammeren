let namen = [];
let aantalNamen = Number(prompt("Hoeveel namen wil je ingeven? "));

for (let i = 1; i<=aantalNamen; i++){
    let input = prompt("Geef een naam in:");
    namen.push(" " + input);
}
namen.sort();
document.write(namen);