const ASCII_UPPERCASE_LETTERS_START_VALUE = 64

export default function excelColumnNumber(title) {
  let result = 0

  for (let i = title.length; i > 0; i--) {
    result += Math.pow(26, title.length - i) * (title.charCodeAt(i - 1) - ASCII_UPPERCASE_LETTERS_START_VALUE)
  }

  return result
}
