
//MEERVOUDIGE SELECTIE SWITCH -----------------------------

// switch (conditie){
//     case "optie1":
//         console.log("optie1 is ok");
//         break;
//     case "optie2":
//         console.log("optie2 is ok");
//         break;
//     default:
//         console.log("Dit is de default message");
// }

let onderwijs = prompt("Geef je instelling in: (VDAB, syntra, andere..)");

switch (onderwijs){
    case "VDAB":
        console.log("Leerling is van de VDAB");
        break;
    case "syntra":
        console.log("Leerling is van Syntra");
        break;
    default:
        console.log("Leerling is van een andere installing");
}
