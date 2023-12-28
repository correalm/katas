import beeramid from '../katas/beeramid'

describe('beeramid function', () => {
  test('returns the correct values', () => {
    expect(beeramid(1500, 2)).toBe(12)
    expect(beeramid(5000,3)).toBe(16)
    expect(beeramid(9,2)).toBe(1)
    expect(beeramid(10,2)).toBe(2)
    expect(beeramid(11,2)).toBe(2)
    expect(beeramid(0,2)).toBe(0)
    expect(beeramid(-10,2)).toBe(0)
  })
})
