import { cursorTo } from "readline"

function analyze(numArray){
    const accumulated = numArray.reduce((accumulator,currentValue)=> accumulator + currentValue,0)
    let obj = {}
    
    obj.length = numArray.length
    obj.average = accumulated / obj.length
    obj.min = Math.min(...numArray)
    obj.max = Math.max(...numArray)
    
    return obj
}

export default analyze