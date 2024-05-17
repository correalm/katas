export default function excelColumnNumber(title) {
  let result = 0

  for (let i = title.length - 1; i >= 0; i--) {
    const value = title.charCodeAt(i) - 64
    const exponencial = title.length - 1 - i

    result += Math.pow(26, exponencial) * value
  }

  return result
}
