/**
  * @param {number} value 
*/

function fizzBuzz(value) {
  const result = []

  for (let i = 1; i <= value; i++) {
    let value = ''

    if ((i % 3) === 0) value += 'Fizz'
    if ((i % 5) === 0) value += 'Buzz'

    if ((i % 3) !== 0 && (i % 5) !== 0) value += i.toString()

    result.push(value)
  }

  return result
}

export default fizzBuzz
