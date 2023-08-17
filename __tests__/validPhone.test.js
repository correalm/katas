import validPhone from '../katas/validPhone'

describe('validPhone function', () => {
  test('identifies the correct and wrong phones', () => {
    expect(validPhone('(123) 456-7890')).toBe(true)
    expect(validPhone('(000) 456-7890')).toBe(true)
    expect(validPhone('(000) 000-0000')).toBe(true)

    expect(validPhone('(1111)555 2345')).toBe(false)
    expect(validPhone('(098) 123 4567')).toBe(false)
    expect(validPhone('(98) 123-4567')).toBe(false)
  })
})