const response =  prompt('What flavor would you like, (each order separated by commas)?')
console.log(response)

let string = response
let ordArray = string.split(',') // (the user's input string is split into an array of strings.)
console.log(ordArray)            // the string.split is to turn it into array and the empty quotes in () is for all elements

function flavorCount(orderArray){
    let flavorObj = {}

    for (let i =0; i < orderArray.length; i++){
        let currentFlavor = orderArray[i].toLowerCase().trim();

        if (flavorObj[currentFlavor] === undefined){
            flavorObj[currentFlavor] = 1
        } else {
            flavorObj[currentFlavor] += 1
        }
        
    }
    return flavorObj
}

console.table(flavorCount(ordArray))