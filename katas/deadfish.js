function deadfish(data) {
  const values = []
  let value = 0

  Array.from(data).forEach(letter => {
    switch (letter) {
      case 'i':
        value += 1
        break;
      case 'd':
        value -= 1
        break;
      case 's':
        value = Math.pow(value, 2)
        break;
      case 'o':
        values.push(value)
    }
  })

  return values
}

export default deadfish
