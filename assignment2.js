const valueArr=[3,2,7,4,5,2]

function sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    return arr.reduce((sum, num) => {
      if (typeof num !== 'number') {
        throw new Error('Array must contain only integers.');
      }
      return sum + num;
    }, 0);
  }

console.log(sumArray(valueArr))