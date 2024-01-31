// I CREATED A CONST FOR THE USERS RESPONSE AND THEN SET IT EQUAL TO THE PROMPT 
// THAT WILL SHOW UP ON THEIR END WITH THE MESSAGE IN QUOTES.
// LASTLY, IN ORDER TO SAVE THE USERS INPUT, I CONSOLE LOGGED IT WITH THE 'VARIABLE'
// CALLED RESPONSE (WE COULD HAVE ALSO USED, 'LET RESPONSE')

const response =  prompt('What flavor would you like, vanilla, vanilla, vanilla, strawberry, coffee, or coffee ?')
console.log(response)

let string = 'vanilla, vanilla, vanilla, strawberry, coffee, coffee'
let array = string.split(',') // (the user's input string is split into an array of strings.)
console.log(array)            // the string.split is to turn it into array and the empty quotes in () is for all elements

