let getal1 = Number(prompt("Geef het eerste getal in."));
let getal2 = Number(prompt("Geef het tweede getal in."));
let vv1 = getal1;
let vv2 = getal2;

for (let i = 0; vv1 !== vv2; i++) {
    if (vv1 < vv2) {
        vv1 += getal1;
        console.log(vv1);
    } else {
        vv2 += getal2;
        console.log(vv2);
    }
}

document.write(`Het kleinste gemene veelvoud van ${getal1} en ${getal2} is ${vv1}.`);

