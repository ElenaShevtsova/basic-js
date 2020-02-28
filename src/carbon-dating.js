const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);
    if (!sampleActivity || number >= 9000 || number <= 0 || typeof sampleActivity === 'object'
    || number >= 15 || typeof sampleActivity === 'number' || Number.isNaN(number) === true) {
      return false;
    }
    let result = Math.log(MODERN_ACTIVITY/number)*HALF_LIFE_PERIOD/0.693;
    
    return Math.ceil(result);
};
