const feetInBlock=264
const hq = 42

// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock){
  if(currentBlock>hq){
    return currentBlock-hq 
  } else{
    return hq- currentBlock 
  }
  return currentBlock - hq 
}

function distanceFromHqInFeet (currentBlock){
  let numberOfBlocks
  if (currentBlock>hq){
    numberOfBlocks= currentBlock-hq
  } else{
    numberOfBlocks= hq-currentBlock
  }
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2){
 const numberOfBlocks= Math.abs(block1-block2)
 return numberOfBlocks * feetInBlock 
 
}

function calculatesFarePrice(startingBlock, destinationBlock){
  //how far//
  const numberOfBlocks = Math.abs(startingBlock- destinationBlock)
  const numberOfFeet= numberOfBlocks*feetInBlock
  
  if (numberOfFeet <= 400) {
    return 0
  }
else if(numberOfFeet > 400 && numberOfFeet <= 2000){
  return (numberOfFeet - 400)* 0.02
}

  else if (numberOfFeet > 2000 && numberOfFeet <2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}