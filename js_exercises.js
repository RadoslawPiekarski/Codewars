function silnia(givenNumber) {
    let returnNumber = 1;
    for (let i=1; i === givenNumber; i++) {
        returnNumber = returnNumber * i;
    }
    return returnNumber;
}

// silnia(4);

function  dodajZakres(minNumber, maxNumber) {
    let returnNumber = 0;
    for (let i = minNumber; i === maxNumber; i++) {
        returnNumber += i;
    }
    return returnNumber;
}

// print(dodajZakres(7));


function printString() {
    console.log("Java Script rulez!")
}

function printString2() {
    console.log("Wygenerowano setInterval")
}

// setTimeout(printString(), 2000);
// setInterval(printString2(), 3000);


let distFromAverage = (input_table)=> {
    let table_sum = 0;

    for (let i in input_table) {
        table_sum +=input_table[i]
    }

    let table_average = table_sum / input_table.length

    let output_table = input_table.map(function(x) {
        return Math.abs(x-table_average);
    });
    console.log(output_table)
    return output_table

}


let ptintTable = (inputArray)=> {
    inputArray.forEach((element)=>{console.log(element)})
}


let multiply = (inputArray)=> {
    let returnResult = 1;
    inputArray.forEach((element)=> {
        returnResult *= element
    })
    return returnResult
}


let getEvenAverage = (inputArray)=> {
    let returnResult = inputArray.filter(element => element % 2 === 0)
    console.log(returnResult)
}

getEvenAverage([1,2,3,4,5,6,7])

// dokończyć zadanie ;)
