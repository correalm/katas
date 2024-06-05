import { changeDoorState } from "./changeDoorState"

export default function hundredDoorsLowPerf(doors) {
  const result = [...doors]

  for (let i = 0; i < doors.length; i++) {
    doors.forEach((_, index) => {
      const isPerfectSquare = ((index + 1)%(i + 1)) === 0
      if (isPerfectSquare) result[index] = changeDoorState(result[index])
    })
  }

  return result
}
