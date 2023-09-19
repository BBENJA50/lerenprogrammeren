

let alphabetKlein = [];
let alphabetGroot = [];
let asciiIndex = 97;



for (let i =1; i<= 26; i++){
    let text = String.fromCharCode(asciiIndex);
    alphabetKlein.push(text);
    asciiIndex++;
}

document.write(alphabetKlein + "<br>");
alphabetGroot=alphabetKlein.map(name => name.toUpperCase());
document.write(alphabetGroot);


