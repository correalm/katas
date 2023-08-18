function format(number) {
  if (number > 9) return number

  return `0${number}`
}

function humanReadable (seconds) {
  const restSeconds = seconds % 60
  let minutes = Math.trunc(seconds / 60)
  let hours = 0

  while (minutes >= 60) {
    minutes -= 60
    hours += 1
  }

  if (hours) return `${format(hours)}:${format(minutes)}:${format(restSeconds)}`
  if (minutes && minutes < 60) return `00:${format(minutes)}:${format(restSeconds)}`
  
  return `00:00:${format(restSeconds)}`
}

export default humanReadable