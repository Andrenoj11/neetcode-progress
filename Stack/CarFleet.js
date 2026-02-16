class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         const n = position.length;

    // 1) Pair (pos, timeToTarget)
    const cars = [];
    for (let i = 0; i < n; i++) {
      const time = (target - position[i]) / speed[i];
      cars.push([position[i], time]);
    }

    // 2) Sort by position descending (closest to target first)
    cars.sort((a, b) => b[0] - a[0]);

    // 3) Scan from front to back, using a "stack" of fleet times
    //    stack holds increasing fleet times (front fleets first)
    const stack = [];
    for (const [, time] of cars) {
      // if this car needs MORE time than the fleet in front,
      // it cannot catch up -> new fleet
      if (stack.length === 0 || time > stack[stack.length - 1]) {
        stack.push(time);
      }
      // else: time <= lastFleetTime, it catches up -> merge, do nothing
    }

    return stack.length;
    }
}
