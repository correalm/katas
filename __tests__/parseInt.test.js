import parseInt from '../katas/parseInt';

describe('parseInt function', () => {
  test('returns the correct value', () => {
    expect(parseInt('zero')).toBe(0)
    expect(parseInt('seven')).toBe(7)
    expect(parseInt('seventeen')).toBe(17)
    expect(parseInt('seven hundred eighty-three thousand nine hundred and nineteen')).toBe(783919)
    expect(parseInt('forty-six')).toBe(46)
    expect(parseInt('two hundred forty-six')).toBe(246)
    expect(parseInt('five hundred and twenty-four thousand two hundred and thirty-eight')).toBe(524238)
    expect(parseInt('nine hundred and ninety-seven thousand one hundred and forty-eight')).toBe(997148)
    expect(parseInt('million')).toBe(1000000)
    expect(parseInt('five hundred twenty-four')).toBe(524)
    expect(parseInt('two hundred and forty-six')).toBe(246)
    expect(parseInt('thousand')).toBe(1000)
    expect(parseInt('hundred')).toBe(100)
    expect(parseInt('two thousand')).toBe(2000)
  })
})
