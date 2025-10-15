function smallestDivisor(nums: number[], threshold: number): number {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const total = nums.reduce((sum, num) => sum + Math.ceil(num / mid), 0);

    if (total <= threshold) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
