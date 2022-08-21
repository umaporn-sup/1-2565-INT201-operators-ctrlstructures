let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum1 = 0
// for
for (let i = 0; i < data.length; i++) {
  sum1 += data[i]
}
console.log(`sum1=${sum1}`)
console.log('--------------')

// while
let i = 0
let sum2 = 0
while (i < data.length) {
  sum2 += data[i++]
}
console.log(`sum2=${sum2}`)
console.log('--------------')

//do..while
let sum3 = 0
do {
  sum3 += data[i++]
} while (i < data.length)
console.log('--------------')

// for each
let sum4 = 0
data.forEach((num) => (sum4 += num))
console.log(`sum4=${sum4}`) //sum=45
console.log('--------------')

// reduce
const sum5 = data.reduce((total, currentValue) => total + currentValue)
console.log(`sum5=${sum5}`) //sum=45
console.log('--------------')

//for of
let message = 'INT201'
for (const ch of message) {
  console.log(ch)
}
for (const item of data) console.log(item)
console.log('--------------')

// for in
const productObj = { productId: 1, productName: 'pen', price: 55 }
for (const prop in productObj) console.log(prop, ':', productObj[prop])
console.log('--------------')

//switch
let sizeNumber = 3
let sizeMeaning
switch (sizeNumber) {
  case 1:
    sizeMeaning = 'small'
  case 2:
    sizeMeaning = 'medium'
  case 3:
    sizeMeaning = 'large'
}
console.log(sizeMeaning)
console.log('--------------')

//if...else
sizeNumber = 2
if (sizeNumber === 1) sizeMeaning = 'S'
else if (sizeNumber === 2) sizeMeaning = 'M'
else sizeMeaning = 'L'
console.log(sizeMeaning)
