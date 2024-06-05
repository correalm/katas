import hundredDoors from "../katas/hundredDoors/hundredDoors"
import hundredDoorsLowPerf from "../katas/hundredDoors/hundredDoorsLowPerf"

describe('hundredDoors function', () => {
  test('returns the correct values', () => {

    expect(hundredDoors(buildDoors(100))).toEqual(ANSWER)
    expect(hundredDoorsLowPerf(buildDoors(100))).toEqual(ANSWER)
  })
})

const ANSWER = [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

function buildDoors(length) {
  return Array.from({ length }, () => 0)
}
