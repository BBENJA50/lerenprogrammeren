let getal1 = prompt("Geef het eerste getal in.");
let getal2 = prompt("Geef het tweede getal in.");
let ggd = 0;
let grootsteGetal = 0;

if (getal1 > getal2) {
    grootsteGetal = getal1;
} else {
    grootsteGetal = getal2;
}

for (let i = 0; i < grootsteGetal; i++) {
    if (getal1 % i === 0 && getal2 % i === 0) {
        ggd = i;
    }
}

document.write(`De grootste gemene deler van ${getal1} en ${getal2} is ${ggd}.`);