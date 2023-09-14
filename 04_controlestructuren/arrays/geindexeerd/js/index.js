let cursisten = ["Benjamin", "Tom", "Bart", "Els"];
// let cursisten = new Array("Benjamin", "Tom", "Bart", "Els");
//Dit is hetzelfde als hierboven maar in object
let cursusjaar = ["2017, 2018, 2019, 2020, 2021, 2022, 2023"];


//Arrays starten altijd aan element 0
document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);

cursisten[0] = "Pieter";
document.write(cursisten);

//Lengte opvragen
document.write(cursisten.length);

//toevoegen van een cursist
cursisten.push("Marieke");
document.write(cursisten);
document.write(cursisten[4]);

//cursist toevoegen aan het begin
cursisten.unshift("Thomas");
document.write(cursisten);

//cursist verwijderen
cursisten.pop()
document.write(cursisten);

//cursist verwijderen aan het begin
cursisten.shift();
document.write(cursisten);

//index of plaatsbepaling van items in array (GEEFT ENKEL DE EERST GEVONDEN)(numerieke of geindexeerde array)
document.write(cursisten.indexOf("Bart"));

