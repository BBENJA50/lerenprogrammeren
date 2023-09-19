let alphabetKlein = [];
let alphabetGroot = [];
let asciiIndex = 97;
let asciiGroot = 65;

for (let i = 0; i <= 25; i++) {
    //hier onder mijn eerste oplossing
    // let text = String.fromCharCode(asciiIndex);
    // alphabetKlein.push(asciiIndex);
    // asciiIndex++;
    alphabetKlein[i] = String.fromCharCode(asciiIndex + i);
    alphabetGroot[i] = String.fromCharCode(asciiGroot + i);
    console.log(i);
}
document.write(alphabetKlein + "<br>" + alphabetGroot);