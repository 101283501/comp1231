console.log('It works!')
var weekNumber = 3
let intro = 'Hello and welcome!'
const functionality = true
console.log(weekNumber, intro, functionality)
if (typeof (weekNumber) === 'number') {
     console.log('The var variable works') }
if (typeof (intro) === 'string') {
     console.log('The let variable works') }
if (typeof (functionality) === 'boolean') {
     console.log('The const variable works') }
let msg = `${intro} This assignment is for week ${weekNumber}. I promise this is ${functionality}.`
document.write(msg)

let course
let classTime = Math.floor(Math.random() * 100);

if (classTime <= 25) { 
    console.log('The number was between 0 and 25') 
} else if (classTime > 25 && classTime <= 50) { 
    document.write('The number was between 26 and 50') 
} else if (classTime > 50 && classTime <= 99) { 
    console.log('The number was between 51 and 99') 
}
