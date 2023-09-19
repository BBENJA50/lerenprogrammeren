let tafel = window.prompt("Geef een getal in waarvan je de tafel wil weten.");
let resutaat = 1;

for (let i = 1; i<= 12; i++){
    resutaat = i*tafel;
    document.write(`${tafel} x ${i} = ${resutaat}, `);
    if (i%3===0){
        document.write(`<br>`);
    }
}

//hoe zorg ik er voor dat de komma na de 3e vermenigvuldiging er niet komt te staan?