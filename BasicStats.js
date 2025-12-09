class BasicStats {
    max(nums) { //returns the max of an array of numbers
      let maxValue = nums[0];
      for (let n of nums) {
        if (n > maxValue) {
          maxValue = n;
        }
      }
      return maxValue;
    }
  
    min(nums) { //returns the min of an array of numbers
      let minValue = nums[0];
      for (let n of nums) {
        if (n < minValue) {
          minValue = n;
        }
      }
      return minValue;
    }
  }
  