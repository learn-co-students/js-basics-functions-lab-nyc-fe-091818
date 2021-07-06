const feetInBlock = 264
const hq = 42

// Code your solution in this file!

// someValue = 43rd Street
// hq = 42nd Street
function distanceFromHqInBlocks(currentBlock) {
  // 43 42
  
  if (currentBlock > hq) {
    //  43   42
      return currentBlock - hq
  } else  {
    // current   hq
    // 34   42
      return hq - currentBlock
  }
  
  // 34 42
}
   
   
 function distanceFromHqInFeet(currentBlock)  {
  // figure out how many blocks away it is
  // convert that into feet
  
  let numberOfBlocks 
   if (currentBlock > hq) {
     numberOfBlocks = currentBlock - hq
  } else  {
    
      numberOfBlocks = hq - currentBlock
  }
  
  return numberOfBlocks * feetInBlock
 }
 
 
 function distanceTravelledInFeet(block1, block2) {
  // 43   48
  // 1. want to get the distance 
  
  const numberOfBlocks = Math.abs(block1 - block2)
  
  // 2. Convert to feet
  return numberOfBlocks * feetInBlock
 }
 
 
 function calculatesFarePrice(startingBlock, destinationBlock) {
  // How far are they going?
 
 const numberOfBlocks = Math.abs(startingBlock - destinationBlock)
  const numberOfFeet = numberOfBlocks * feetInBlock
 
  // first four hundred are free
  
  if (numberOfFeet <= 400) {
    return 0
  } 
  // if more than 400 and less than or equal to 2000
  else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
   return (numberOfFeet - 400) * 0.02
  } 
  else if (numberOfFeet > 2000 && numberOfFeet <= 2500) {
    return 25 
  } else {
    return 'cannot travel that far'
  }
 }