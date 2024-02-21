import rgb from '../katas/rgb'

describe('rgb function', () => {
  test('returns the correct values', () => {
    expect(rgb(255,255,255)).toBe('FFFFFF')
    expect(rgb(255,255,300)).toBe('FFFFFF')
    expect(rgb(148,0,211)).toBe('9400D3')
    expect(rgb(248, 214, 15)).toBe('F8D6FF')
    expect(rgb(10, 275, 268)).toBe('AAFFFF')
  })
})
