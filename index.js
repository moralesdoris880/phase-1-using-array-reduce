const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (previousValue, currentValue) => previousValue +currentValue;
// Code your solution here
let totalBatteries = batteryBatches.reduce(reducer);