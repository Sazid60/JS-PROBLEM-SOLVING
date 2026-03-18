let a = [1,2,3,4,5,6,7]

a.push(8)
console.log(`push result: ${a}`)

a.pop()
console.log(`pop result: ${a}`)

a.unshift(0)
console.log(`unshift result: ${a}`)

a.shift()
console.log(`shift result: ${a}`)

a.slice(2, 4)
console.log(`slice result: ${a.slice(2, 4)}`)

a.splice(2, 2, 'a', 'b')
console.log(`splice result: ${a}`)