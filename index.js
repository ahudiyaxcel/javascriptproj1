// // let myAge = 36
// // let humanDogRatio = 1/7

// // let myDogAge = myAge * humanDogRatio
// // console.log(myDogAge);

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// creating an increment function that will react to the onclick feature
// function increment() {
//     console.log("The button was clicked")
// }
// function number() {
//     console.log(42)
// }
// number()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// let totaltime = lap1 + lap2 + lap3

// function Total (){
//     console.log(totaltime)
// }
// Total()

// let lapsCompleted = 0
// // Creating a function tha increments the lapCompleted variable with one
// //Run it three times
// function incrementalLap(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// incrementalLap()

// incrementalLap()

// incrementalLap()

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
       count = count + 1
       countEl.innerText = count
  }

// // Create a function save() which logs out the count when its called 
// function save(){
//     console.log(count)
// }
// Create a variable, message, that stores the string: "You have tree new notifications"
// let message = 'You have three new notifications'
// let username ='per'
//console.log(message)
// Combine two strings 
// console.log(message + ',' + username + '!')
//Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

function save(){
    let countLog = count + " -"
    saveEl.textContent += countLog
    countEl.textContent = 0
    console.log(count)    
}

function refresh(){
    count = 0
    saveEl.textContent = 0
}