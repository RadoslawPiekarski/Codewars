function silnia(givenNumber) {
    let returnNumber = 1;
    for (let i = 1; i === givenNumber; i++) {
        returnNumber = returnNumber * i;
    }
    return returnNumber;
}

// silnia(4);

function dodajZakres(minNumber, maxNumber) {
    let returnNumber = 0;
    for (let i = minNumber; i === maxNumber; i++) {
        returnNumber += i;
    }
    return returnNumber;
}

// print(dodajZakres(7));


function printString() {
    console.log("Java Script rulez!")
};

function printString2() {
    console.log("Wygenerowano setInterval")
};

// setTimeout(printString(), 2000);
// setInterval(printString2(), 3000);


let distFromAverage = (input_table) => {
    let table_sum = 0;

    for (let i in input_table) {
        table_sum += input_table[i]
    }

    let table_average = table_sum / input_table.length

    let output_table = input_table.map(function (x) {
        return Math.abs(x - table_average);
    });
    console.log(output_table)
    return output_table;

}


let ptintTable = (inputArray) => {
    inputArray.forEach((element) => {
        console.log(element)
    })
};


let multiply = (inputArray) => {
    let returnResult = 1;
    inputArray.forEach((element) => {
        returnResult *= element;
    })
    return returnResult;
}


let getEvenAverage = (inputArray) => {
    let oddNumbers = inputArray.filter(element => element % 2 === 0)
    if (oddNumbers.length === 0) {
        return null;
    }
    let sumNumber = 0;
    oddNumbers.forEach((element) => {
        sumNumber += element
    });

    return sumNumber / oddNumbers.length;
};

// console.log(getEvenAverage([2,8,3,7,4]))

let sortArray = (inputArray) => {
    inputArray.sort((a, b) => {
        return a - b
    })
    return inputArray;
}

// sortArray([13, 5, 2, 3, 10])


let addArrays = (arrayOne, arrayTwo) => {
    let arrayShort = arrayOne,
        arrayLong = arrayTwo;

    if (arrayOne.length >= arrayTwo.length) {
        arrayShort = arrayTwo;
        arrayLong = arrayOne;
    }
    let outputArray = [];
    for (let i = 0; i < arrayLong.length; i++) {
        if (i < arrayShort.length) {
            outputArray[i] = arrayOne[i] + arrayTwo[i];
        } else {
            outputArray.push(arrayLong[i])
        }
    }
    return outputArray;
}

// addArrays([2,3,1,5,3,5], [3,1,76,1])

const country = {
    capital : "Warsaw",
    population : 38,
    president : "Duda",
    ministers : [1,2,3]
}

// console.log(country.capital)

const timeMachine = {
    shape : "round",
    moder : "T2000",
    run : function (date, place){
        console.log("Here we go!")
    }
}

// timeMachine.run(21, "Moscow");

