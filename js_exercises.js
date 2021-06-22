function silnia(givenNumber) {
    let returnNumber = 1;
    for (let i=1; i === givenNumber; i++) {
        returnNumber = returnNumber * i;
    }
    return returnNumber;
}

silnia(4);

function  dodajZakres(minNumber, maxNumber) {
    let returnNumber = 0;
    for (let i = minNumber; i === maxNumber; i++) {
        returnNumber += i;
    }
    return returnNumber;
}

print(dodajZakres(7));
