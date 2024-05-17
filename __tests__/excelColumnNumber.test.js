import excelColumnNumber from "../katas/excelColumnNumber"

describe('excelColumnNumber', () => {
  test('returns the correct values', () => {
    expect(excelColumnNumber('AA')).toBe(27)
    expect(excelColumnNumber('AZ')).toBe(52)
    expect(excelColumnNumber('BA')).toBe(53)
    expect(excelColumnNumber('CODEWARS')).toBe(28779382963)
  })
})
