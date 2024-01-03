const CANONICAL_VALUES = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
}

function buildNumberStringFrom (index, baseArray) {
  return baseArray.slice(0, index).join(' ')
}

/**
  * @param {string} value
  * @returns {number}
*/
function parseInt(value) {
  let result = 0

  const words = value.split(' ').filter(word => word !== 'and')

  const thousandsIndex = words.indexOf('thousand')
  const hundredsIndex = words.indexOf('hundred')
  const millionIndex = words.indexOf('million')
  
  if (millionIndex >= 0) {
    result += 1000000
  }

  if (thousandsIndex > 0) {
    result += parseInt(buildNumberStringFrom(thousandsIndex, words)) * 1000

    if (thousandsIndex < words.length) {
      result += parseInt(words.slice(thousandsIndex + 1, words.length).join(' '))
    }

    return result
  }

  if (thousandsIndex === 0) {
    result += 1000
  } 

  if (hundredsIndex > 0 && thousandsIndex < 0) {
    result += parseInt(buildNumberStringFrom(hundredsIndex, words)) * 100
      
    if (words[ hundredsIndex + 1 ]) {
      result += parseInt(words[ hundredsIndex + 1 ])
    }

    return result
  }
  
  if (hundredsIndex === 0) {
    result += 100
  } 

  if (value.includes('-')) {
    const [root, integer] = value.split('-')

    result += CANONICAL_VALUES[ root ] + CANONICAL_VALUES[ integer ]
  }

  
  result += CANONICAL_VALUES[ value ] ? CANONICAL_VALUES[ value ] : 0

  return result
}

export default parseInt
