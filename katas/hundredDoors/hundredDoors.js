import { changeDoorState } from "./changeDoorState"

export default function hundredDoors(doors) {
  const result = [...doors]

  const values = []
  for (let i = 1, j = 0; j <= doors.length; i++) {
    j = i*i

    if (j > doors.length) break
    values.push(j)
  }


  values.forEach(value => result[value - 1] = changeDoorState(result[value - 1]))

  return result
}
