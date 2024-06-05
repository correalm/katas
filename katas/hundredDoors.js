export default function hundredDoors(doors) {
  const internal = [...doors]

  for (let i = 0; i < doors.length; i++) {
    doors.forEach((_, index) => {
      if ((index + 1)%(i + 1) === 0) internal[index] = changeDoorState(internal[index])
    })
  }

  return internal
}

function changeDoorState(door) {
  return door ? 0 : 1
}
