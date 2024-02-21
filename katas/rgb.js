/**
  * @param {number} r
  * @param {number} g
  * @param {number} b
  * @returns {string}
*/
export default function rgb(r,g,b) {
   function validateHexValue(hexValue) {
    if (hexValue.length < 2) {
      hexValue += hexValue
    }

    return hexValue
  }

  function numberToHex(number) {
    let result = number.toString(16)

    if (number > 255) result = 'FF'
    if (number < 0) result = '00'

    return validateHexValue(result)
   }

  return `${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`.toUpperCase()
}
