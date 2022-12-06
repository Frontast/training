let str = 'Привет, Мир!'
let strReversed = ''
let index = str.length - 1
while (index >= 0) {
  strReversed += str[index]
  --index
}
console.log(strReversed)
