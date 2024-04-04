function convertAndValidateNumsArray(numsAsStrings){
    let result = [];
    
    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);
        if(Number.isNaN(valToNumber)){
            return new Error(
                `The Value '${numsAsStrings[i]} at index ${i} is not a valid number.`
            )
        }
        result.push(valToNumber)
    }
    return result;
}

function findMean(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
    }
    return (sum/nums.length)
}



  function createFrequencyCounter(arr){
    return arr.reduce(function(acc,next){
        acc[next] = (acc[next] || 0 ) + 1;
        return acc;
    }, {});
  }

  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
    
    let count = 0;
    let mostFrequent;

    for (let key in freqCounter){
        if (freqCounter[key] > count ){
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return mostFrequent
  }

  function findMedian(nums){
    nums.sort((a,b) => a - b);

    let midIdx = Math.floor(nums.length/2);
    let median

    if(nums.length %2 === 0) {
        median = (nums[midIdx] + nums[midIdx - 1])/2
    }else{
        median = nums[midIdx]
    }

    return median
  }

  module.exports = {
    convertAndValidateNumsArray,
    findMean,
    findMode,
    findMedian
  };