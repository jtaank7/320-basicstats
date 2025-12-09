class BasicStats {
    max(nums) {
      let maxValue = nums[0];
      for (let n of nums) {
        if (n > maxValue) {
          maxValue = n;
        }
      }
      return maxValue;
    }
  
    min(nums) {
      let minValue = nums[0];
      for (let n of nums) {
        if (n < minValue) {
          minValue = n;
        }
      }
      return minValue;
    }
  }
  