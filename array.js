function chain(array){
    // check input: there is no need to check for empty array here it here, as it will return return an empty array if encountered.
    
    // making a copy of the array so that the original array won't modified when we change the 'value' property from null to some object
    let result = JSON.parse(JSON.stringify(array));

    // using map, so that we will get the object corresponding to the id in O(1)
    const map = {}
    for(let i=0; i<result.length;i++)
    {
        map[result[i].id] = result[i]
    }

    for(let i=0; i<result.length; i++){
        let elem = result[i]
        elem.value = map[elem.next] ? map[elem.next] : null
        result[i] = elem
    }

    return result
}

const array = [
    { id:'one', next:'two', value:null},
    { id:'two', next:'three', value:null},
    { id:'three', next:'null', value:null}
]

console.log(typeof(array))
console.log(chain(array))