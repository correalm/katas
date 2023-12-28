/**
  * @param {number} amount
  * @param {number} beerPrice
  * @returns number
*/
function beeramid (amount, beerPrice) {
  let numberOfBeers = Math.floor(amount / beerPrice)
  let numberOfLevels = 0

  for (let level = 1; numberOfBeers > 0; level++, numberOfBeers -= Math.pow(level, 2)) {
    numberOfLevels = level
  }

  return numberOfLevels 
}

export default beeramid
