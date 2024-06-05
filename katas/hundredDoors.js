export default function hundredDoors(doors) {
  const internal = [...doors]

  for (let i = 0; i < doors.length; i++) {
    doors.forEach((door, index) => {
      if (i + 1 === 1) {
        internal[index] = changeDoorState(door)
        return
      }


      if ((index + 1)%(i + 1) === 0) {
        internal[index] = changeDoorState(internal[index])
      }
    })
  }

  return internal
}

function changeDoorState(door) {
  return door ? 0 : 1
}
