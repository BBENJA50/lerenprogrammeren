let leeftijd = Number(prompt("geef je leeftijd in."));

if (leeftijd>=18){
    document.write("Je mag deelnemen! Je bent "+leeftijd+" jaar oud. <br>")
    if (window.confirm("Wil je een volledig bulletin van 12 vakjes?")){
        document.write("De kostprijs is 20 euro.")
    }else{
        let bulletin = Number(prompt("wil je voor 2, 4, 6, 8 of 10 vakjes spelen?"));
        if (bulletin === 10){
            document.write("De kostprijs voor " +bulletin+" vakjes is: 18 euro");
        }else{
            document.write("De kostprijs voor " +bulletin+" vakjes is: " + (bulletin*2) +" euro.");
        }
    }
}else {
    document.write("Je bent te jong, mag niet deelnemen!")
}

