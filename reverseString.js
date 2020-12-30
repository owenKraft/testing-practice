function reverseString(string){
    const array = string.split("")
    let reversedArray = []
    let reversedString

    array.map(letter => reversedArray.unshift(letter))
    reversedString = reversedArray.join("")

    return reversedString
}

export default reverseString