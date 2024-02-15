// ================================================== Valid ISBN10 ==================================================
function validISBN10(isbn: string): boolean {
    let total: number = 0;
    for (let i = 0; i < isbn.length; i++) {
        if (i === isbn.length - 1 && isbn[i] === "X") {
            total += 10 * (i + 1);
        } else {
            total += parseInt(isbn[i]) * (i + 1);
        }
    }
    return total % 11 === 0;
}
// console.log(validISBN10("048665088X"));

// ================================================ Highest Scoring Word =============================================
function high(str: string): string {
    const words = str.split(' ');
    let highestScore = 0;
    let highestScoringWord = '';
    for (const word of words) {
        const score = calculateWordScore(word);
        if (score > highestScore || (score === highestScore && words.indexOf(word) < words.indexOf(highestScoringWord))) {
            highestScore = score;
            highestScoringWord = word;
        }
    }
    return highestScoringWord;
}

function calculateWordScore(word: string): number {
    let score = 0;
    for (const char of word) {
        score += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    return score;
}
// console.log(high('man I need a taxi up to London'))

// =================================================== CSS Comparison ================================================
https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/typescript
function compare (a: string, b: string): string {
    if(returnTotal(splitSelectors((a))) > returnTotal(splitSelectors(b))){
        return a;
    } else {
        return b;
    }
}

function splitSelectors(inputString: string): string[] {
    const selectorRegex = /(\S+)(\.\S+)?/g;
    const selectors = inputString.match(selectorRegex) || [];
    return selectors;
}

function returnTotal (inputArr:string[]): number {
    let retTotal: number = 0;
    let weightMap: {[el:string]: number}  = {
        "tagname":1,
        ".":2,
        "#":3,
        "*":0
    }
    const regx = /^[a-zA-Z0-9]/;
    for(let i=0; i < inputArr.length; i++){
        if(regx.test(inputArr[i])){
            retTotal += weightMap["tagname"]
        }
        else {
            retTotal += weightMap[inputArr[i][0]]
        }
    }
    return retTotal
}

// console.log(compare("body p", "div"))

// =================================================== Street Fighter 2 ===============================================
// Street Fighter 2 - Character Selection - Part 2
// https://www.codewars.com/kata/58583922c1d5b415b00000ff/train/typescript
function superStreetFighterSelection(fighters: string[][], position: [number, number], moves: string[]): string[] {
    let startRow = position[0];
    let startCell = position[1];
    let returnArray: string[] = []

    moves.forEach(move => {
        if(move === "down"){
            if(startRow >= fighters.length-1){
                startRow = fighters.length-1
            } else {
                startRow += 1
            }
        } else if(move === "up"){
            if(startRow <= 0){
                startRow = 0
            } else {
                startRow -= 1
            }
        } else if(move === "left"){
            if(startCell <= 0){
                startCell = fighters[startRow].length-1
            } else {
                startCell -= 1
            }
        } else if(move === "right"){
            if(startCell >= fighters[startRow].length-1){
                startCell = 0
            } else {
                startCell += 1
            }
        }
        if(fighters[startRow][startCell] === ""){
            let nextPopulated: number[] = handleMissing(fighters, [startRow, startCell], move)
            startRow = nextPopulated[0]
            startCell = nextPopulated[1]
        }
        returnArray.push(fighters[startRow][startCell])
    });

    return returnArray;
}

function handleMissing(fighters:string[][], position:number[], move: string): number[]{
    let startRow = position[0];
    let startCell = position[1];
    let currentFighter = fighters[startRow][startCell]
    while(currentFighter === "") {
        if (move === "down") {
            startRow -= 1
        } else if (move === "up") {
            startRow += 1
        } else if (move === "left") {
            if (startCell <= 0) {
                startCell = fighters[startRow].length - 1
            } else {
                startCell -= 1
            }
        } else if (move === "right") {
            if (startCell >= fighters[startRow].length - 1) {
                startCell = 0
            } else {
                startCell += 1
            }

        }
        currentFighter = fighters[startRow][startCell]
    }
    return [startRow, startCell]
}

let f8s: string[][] = [
    ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
    ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
    ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"]
];
let pos: [number, number] = [1, 0];
let moves: string[] = ["up", "left", "up"];

// console.log(superStreetFighterSelection(f8s, pos, moves))

// ===================================================== String Mix 2 =================================================
// https://www.codewars.com/kata/5629db57620258aa9d000014/typescript

const mix = (s1:string, s2:string): string => {
    console.log(loopStrDictCount(s1))
    return ""
}

// @ts-ignore
function loopStrDictCount(str:string): {[key:string]:number} {
    let retDict: {[key:string]:number} = {}
    for(let i=0; i < str.length; i++){
        if (str[i] >= 'a' && str[i] <= 'z') {
            if(str[i] in retDict){
                retDict[str[i]] += 1
            } else {
                retDict[str[i]] = 1
            }
        }
    }
    return retDict
}


mix("Are they here", "yes, they are here")
