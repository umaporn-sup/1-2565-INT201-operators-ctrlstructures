// conditional operation (?:)
let age = 40
const greeting = age > 40 ? 'Good Morning' : 'Hello'
console.log(greeting)
console.log('--------------')

// optional chaining (?.)
// array
let index = 0
let data
const firstItem = data?.[0]
console.log(firstItem)
// object
let student
console.log(student?.firstName)
console.log('--------------')

// nullish coalescing
let items = null
items = items ?? []
console.log(items)
let options = { delay: '5ms' }
let newTitle = 'Chapter 3 - Operations'
// options.title = newTitle ?? 'untitled'
options.title = options.title ?? 'untitled'
console.log(options)
console.log('--------------')

// Math
let randNum = Math.random() * 10 //returns between 0-9.xxxx
console.log(randNum)
let useNum = Math.floor(randNum) + 1 //random 1-10
console.log(useNum)
console.log('--------------')

// String
let str = `Hello, World!`
console.log(`str.length: ${str.length}`)
console.log(str.replace('l', '*'))
