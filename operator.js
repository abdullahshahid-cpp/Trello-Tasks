function operator(arr){
    if (typeof(arr) === "string")
        return arr
    
    let left = operator(arr[1])
    let right = operator(arr[2])
    
    if(typeof(arr[2]) !== "string" && arr[2].flat().length > 3)
        right = '(' + right + ')'
    if(typeof(arr[1]) !== "string" && arr[1].flat().length > 3)
        left = '(' + left + ')'

    let expression = left + ' ' + arr[0] + ' ' + right
        
    return expression
}

const expression = 
["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]

let result = operator(expression)
console.log(result)