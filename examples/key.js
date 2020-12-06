const tmp=[
    {
        key:'key1',value:'что-то'
    }
]

// {
//     key1:'что-то'
// }

function tmpFun(arr){
   return {[arr[0].key]:arr[0].value}
}

console.log(tmpFun(tmp))


const fn = (arr) => arr.reduce((acc, val) => {
    acc[val.key] = val.value
    return acc
}, {})

console.log(fn(tmp))
