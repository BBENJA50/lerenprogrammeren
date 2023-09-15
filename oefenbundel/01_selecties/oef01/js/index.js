document.getElementById("verstuurLeeftijd").onclick = function () {


    let leeftijd = document.getElementById("leeftijd").value;

    if (leeftijd >= 18) {
        document.getElementById("result").innerHTML = "Je bent " + leeftijd + " jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.";
    } else {
        document.getElementById("result").innerHTML = "Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.";
        console.log(Number(leeftijd));
    }

}