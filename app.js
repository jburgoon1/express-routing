const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("<h1>Welcome to the math home page</h1>")
})

app.get('/mean/:num', (req, res) =>{
let addNum = 0
console.log(req.params.num)
let num1 = req.params.num
let num = num1.split(',')
let numArr = []
for(let nums in num){
    let number = parseInt(nums)+1
    console.log(number)
    numArr.push(number)
}
numArr.forEach(num =>{
    addNum+=num
})

console.log(numArr)

console.log(addNum)
let mean = addNum/num.length
res.send(`<h1>The median is :${mean}`)
})

app.get('/median/:num', (req, res) =>{

let num1 = req.params.num
let num = num1.split(',')
let numArr = []
for(let nums in num){
    let number = parseInt(nums)+1
    numArr.push(number)
}
numArr.sort()
console.log(numArr)
let half = Math.floor(numArr.length/2)
console.log(half)
if(half%2==0){
    let median = numArr[half]
    console.log(median)
    return res.send(`<h1>The median is: ${median}`)
}else{
    let median = (numArr[half-1]+numArr[half])/2
    console.log(median)

    return res.send(`<h1>The median is: ${median}`)
}

})

app.get('/mode/:num', (req, res) =>{
let num1 = req.params.num
let num = num1.split(',')
let numArr = []

for(let nums of num){
    let number = parseInt(nums)
    numArr.push(number)
}
console.log(numArr)
numArr.sort((x, y) => x - y);

  let bestStreak = 1;
  let bestElem = numArr[0];
  let currentStreak = 1;
  let currentElem = numArr[0];

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i-1] !== numArr[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = numArr[i];
    }

    currentStreak++;
  }

  

    return res.send(`The mode of the list is:${currentStreak > bestStreak ? currentElem : bestElem}`)
})

app.listen(3000, ()=>{
    console.log('hello')
})