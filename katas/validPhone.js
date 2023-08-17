function validPhone (phone) {
  const pattern = /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/

  return pattern.test(phone)
}

export default validPhone