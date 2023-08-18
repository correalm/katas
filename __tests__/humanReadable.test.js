import humanReadable from '../katas/humanReadble'

describe('humanReadable function', () => {
  test('return the correct formatted time', () => {
    expect(humanReadable(0)).toBe('00:00:00')
    expect(humanReadable(59)).toBe('00:00:59')
    expect(humanReadable(60)).toBe('00:01:00')
    expect(humanReadable(90)).toBe('00:01:30')
    expect(humanReadable(3599)).toBe('00:59:59')
    expect(humanReadable(3600)).toBe('01:00:00')
    expect(humanReadable(45296)).toBe('12:34:56')
    expect(humanReadable(86399)).toBe('23:59:59')
    expect(humanReadable(86400)).toBe('24:00:00')
    expect(humanReadable(359999)).toBe('99:59:59')
  })
})