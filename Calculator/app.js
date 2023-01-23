// Get a array of all the buttons
const buttons = document.querySelectorAll('button')
// Get the screen class, so we can display the values
const screenDisplay = document.querySelector('.screen')
// Array of all values ex:. [1,+,3]
let calculation = []
// String to display ex:. "1+3"
let accumulativeCalculation 
// function that make the buttons working
function calculate(button){
    // get the value of the button 
    const value = button.textContent

    switch (value) {
        case "CLEAR":                           // if it's the clear button 
            calculation = []                    // clear the array
            screenDisplay.textContent = "."     // display a . 
            break
        case "=":                               // if it's the = button
            screenDisplay.textContent = eval(accumulativeCalculation) // make the calculation
            break
        default:                                // other values
            calculation.push(value)             // push to the array
            accumulativeCalculation = calculation.join('')     // transform the array to a string          
            screenDisplay.textContent = accumulativeCalculation // display the changes
    }

}
// foreach loop, when a button is clicked the function calculate is called
buttons.forEach(button => button.addEventListener('click',() => calculate(button) )) 