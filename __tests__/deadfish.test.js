import deadfish from '../katas/deadfish'

describe('deadfish', () => {
  test('return he correct results', () => {
    expect(deadfish("iiisdoso")).toEqual([8, 64])
    expect(deadfish('iiisxxxdoso')).toEqual([8, 64])
    expect(deadfish('sioidsoo')).toEqual([1,1,1])
  })

  test('return an empty array when a empty string is passed', () => {
    expect(deadfish('')).toEqual([])
  })
})