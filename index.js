// Code your solution in this file!
const feetInBlock = 264
const hq = 42
const flatFare = 25

// someValue = 43rd street
// hq = 42nd street
function distanceFromHqInBlocks(currentBlock) {
  if (currentBlock > hq) {
    return currentBlock - hq 
  }
  else {
    return hq - currentBlock
  }
}

function distanceFromHqInFeet(currentBlock) {
  let numberOfBlocs
  if (currentBlock > hq) {
    numberOfBlocks = currentBlock - hq 
  }
  else {
    numberOfBlocks = hq - currentBlock
  }
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2) {
  const numberOfBlocks = Math.abs(block1 - block2)
  return numberOfBlocks * feetInBlock
}

function calculatesFarePrice (startingBlock, destinationBlock) {
  const numberOfBlocks = Math.abs(startingBlock - destinationBlock)
  const numberOfFeet = numberOfBlocks * feetInBlock
  if (numberOfFeet <= 400) {
    return 0
  }
  else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
    return (numberOfFeet - 400) * 0.02
  }
  else if (numberOfFeet > 2000 && numberOfFeet <= 2500) {
    return flatFare
  }
  else {
    return 'cannot travel that far'
  }
}

