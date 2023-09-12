
document.getElementById("verzendLeeftijd").onclick = function (){

    var leeftijd = document.getElementById("leeftijd").value;

    if (leeftijd >= 18) {
        // Gebruiker is oud genoeg om deel te nemen
        document.getElementById("resultLeeftijd").innerHTML = "Je bent " + leeftijd + " jaar oud. Je mag deelnemen aan de spelen van de nationale loterij.";

        // Vraag of de gebruiker een volledig bulletin wil spelen
        var volledigBulletin = confirm("Wil je een volledig bulletin van 12 vakjes spelen?");

        if (volledigBulletin) {
            document.getElementById("resultBulletin").innerHTML = "De kostprijs voor een volledig bulletin van 12 vakjes is 20 euro.";
        } else {
            // Vraag hoeveel vakjes de gebruiker wil spelen
            var aantalVakjes = prompt("Hoeveel vakjes wil je spelen (2, 4, 6, 8 of 10)?");

            // Bereken de kostprijs op basis van het aantal vakjes
            switch (parseInt(aantalVakjes)) {
                case 2:
                    document.getElementById("resultBulletin").innerHTML = "De kostprijs voor 2 vakjes is 4 euro.";
                    break;
                case 4:
                    document.getElementById("resultBulletin").innerHTML = "De kostprijs voor 4 vakjes is 8 euro.";
                    break;
                case 6:
                    document.getElementById("resultBulletin").innerHTML = "De kostprijs voor 6 vakjes is 12 euro.";
                    break;
                case 8:
                    document.getElementById("resultBulletin").innerHTML = "De kostprijs voor 8 vakjes is 16 euro.";
                    break;
                case 10:
                    document.getElementById("resultBulletin").innerHTML = "De kostprijs voor 10 vakjes is 18 euro.";
                    break;
                default:
                    console.log("Ongeldig aantal vakjes. Kies uit 2, 4, 6, 8 of 10.");
            }
        }
    } else {
        // Gebruiker is te jong
        document.getElementById("resultLeeftijd").innerHTML = "Om deel te nemen aan de spelen van de nationale loterij moet je minimum 18 jaar oud zijn.";

    }

}

// ----------------- CODE BENJA --------------------

// let leeftijd = prompt("Geef je leeftijd in:");
//
// if (leeftijd >= 18) {
//
//     console.log("Je bent " + leeftijd + " jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij");
//
//     let aantalVakjes = prompt("Voor hoeveel vakjes wil je spelen? (2, 4, 6, 8, 10, 12)");
//     switch (aantalVakjes) {
//         case "2":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 4 euro");
//             break;
//         case "4":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 8 euro");
//             break;
//         case "6":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 12 euro");
//             break;
//         case "8":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 16 euro");
//             break;
//         case "10":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 18 euro");
//             break;
//         case "12":
//             console.log("Voor " + aantalVakjes + " vakjes is de kostprijs 20 euro");
//             break;
//         default:
//             console.log(aantalVakjes + " vakjes zijn niet toegestaan. Kies uit: 2 ,4 ,6 ,8 ,10 of 12");
//     }
// } else {
//     console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.");
// }

// Vraag de gebruiker om hun leeftijd
