function compareTrue(a, b) {return result = a >= 0 && b >=0 ? true : false};
console.log(compareTrue(1, -2));

function calcArea(base, altura) {return result = (base * altura) / 2};
console.log(calcArea(51, 1));

function splitSentence(string) {return string.split(" ")};
console.log(splitSentence("vamo que vamo"));

function concatName(array) {return `${array.at(-1)} ${array.at(0)}`};
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

function footballPoints(wins, ties) {return (wins * 3) + (ties * 1)};
console.log(footballPoints(0, 0));

function highestCount(numbers) {
    let contador = 0;

    for (const number of numbers) { 
        if (Math.max(...numbers) == number) {
        contador += 1;
        };
    };

    return contador
};
console.log(highestCount([0, 0, 0]));

function catAndMouse(mouse, cat1, cat2) {
    if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
        return 'Os dois gatos se trombam e o rato foge.'
    } else if (cat1 - mouse > cat2 - mouse ) {
        return 'Cat2 está mais perto'
    };

    return 'Cat1 está mais perto'
};
console.log(catAndMouse(0, 1, 3));

function fizzBuzz(numbers) {
    let division = [];

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
            division.push("fizzbuzz");
        } else if (numbers[index] % 3 == 0) {
            division.push("fizz");
        } else if (numbers[index] % 5 == 0) {
            division.push("buzz");
        } else {
            division.push("bug!");
        };
    }

    return division
};
console.log(fizzBuzz([7, 9]));

function encode(word) {
    let   string = '';

      // percorrer a string
    for (const letter of word) {
        switch (letter) {
            case 'a': string += '1' 
            break;

            case 'e': string += '2'
            break;

            case 'i': string += '3'
            break;

            case 'o': string += '4'
            break;

            case 'u': string += '5'
            break;

            default: string += letter
            break;
        };
    };
    
    return string;
}
console.log(encode('Hi! There'));

function decode(word) {
    let   string = '';

    // percorrer a string
    for (const letter of word) {
        switch (letter) {
            case '1': string += 'a' 
            break;
        
            case '2': string += 'e'
            break;
        
            case '3': string += 'i'
            break;

            case '4': string += 'o'
            break;

            case '5': string += 'u'
            break;

            default: string += letter
            break;
        };
    };

    return string;
};
console.log(decode('H3! Th2r2'));

function techList(tecs, name) {
    tecs.length >= 5 ? tecs.sort() : '';
    let newList = [];

    //percorrer a lista: 
    for (const tec of tecs) {newList.push({tech: tec, name: name,})};
    
    return newList.length == 0 ? 'Vazio' : newList;
};
console.log(techList(["CSS"],"Marcos"));

function validatePhone(array) {
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let count = 0;

    if (array.length !== 11) {
        return "Array com tamanho incorreto."
    };

    for (let index = 0; index < numbers.length; index += 1) {
        for (let secIndex = 0; secIndex < array.length; secIndex += 1) {
            if (numbers[index] === array[secIndex]) {
                count += 1;
            };

            if (count == 3 || Math.min(...array) < 0 || Math.max(...array) > 9) {
                return "Não é possível gerar um número de telefone com esses valores"
            };
        };

        count = 0;
    };

    return ''
};

function generatePhoneNumber(phoneNumber) {
    let string = '';
    let regex = /(\d{2})(\d{5})(\d{4})/;

    for (let index = 0; index < phoneNumber.length; index += 1) {
        string += phoneNumber[index];
    };

    const validate = validatePhone(phoneNumber);
    let newString = string.replace(regex, '($1) $2-$3');

    return validate !== '' ? validate : newString;
};
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));