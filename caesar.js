function caesar(string,offset){
    let array = string.split("")
    let cipheredArray = []
    let cipheredString

    array.map(letter => cipheredArray.push(shiftChar(letter,offset)))
    cipheredString = cipheredArray.join("")

    return cipheredString
}

function shiftChar(char,offset){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const currentLetterIndex = alphabet.findIndex(letter => letter === char.toLowerCase())
    const combinedIndex = currentLetterIndex + offset
    let cipheredChar

    if (currentLetterIndex === -1){
        cipheredChar = char
    } else if(combinedIndex > 26) {
        cipheredChar = alphabet[combinedIndex - 26]
    } else if(combinedIndex < 0){
        cipheredChar = alphabet[26 + combinedIndex]
    } else if(combinedIndex <= 26){
        cipheredChar = alphabet[combinedIndex]
    }

    if (char === char.toUpperCase()){
        cipheredChar = cipheredChar.toUpperCase()
    }
    
    return cipheredChar
}

export default caesar