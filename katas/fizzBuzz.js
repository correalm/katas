/**
  * @param {number} value 
*/
function fizzBuzz(value) {
  const result = []

  for (let i = 1; i <= value; i++) {
    let value = ''

    const isFizz = (i % 3) === 0
    const isBuzz = (i % 5) === 0

    if (isFizz) value += 'Fizz'
    if (isBuzz) value += 'Buzz'

    if (!isFizz && !isBuzz) value += i.toString()

    result.push(value)
  }

  return result
}

export default fizzBuzz
