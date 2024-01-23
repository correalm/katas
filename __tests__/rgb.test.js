describe('rgb function', () => {
  test('returns the correct values', () => {
    expect(rgb(255,255,255)).toBe('FFFFFF')
    expect(rgb(255,255,300)).toBe('FFFFFF')
    expect(rgb(148,0,211)).toBe('9400D3')
  })
})
