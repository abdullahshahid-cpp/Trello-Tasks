function groupBy(arr, key)
{
    objKeys = Object.keys(arr[0])
    
    if(!objKeys.includes(key))
        return 'please provide a valid key'
        
    result = {}
    let i = 0;
    while(i<arr.length)
    {
        keyToAdd = arr[i][key];
        if(result[keyToAdd])
        {
            result[keyToAdd].push(arr[i]);
            i++;
        }
        else
        {
            result[keyToAdd] = [];
        }
    }
    return result
}

const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
]


console.log('group by city:\n\n', groupBy(array, 'city'))
console.log('\ngroup by id:\n\n', groupBy(array, 'id'))
console.log('\ngroup by name:\n\n', groupBy(array, 'name'))
console.log('\n invalid key check:\n\n', groupBy(array, 'gender'))