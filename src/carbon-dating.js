const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let number = +sampleActivity;
  if (!sampleActivity || number >= 9000 || number <= 0 || typeof sampleActivity === 'object' || parseInt(sampleActivity) != sampleActivity ||
    typeof sampleActivity === 'number' || number >= 15) {
    return false;
  }
  let result = Math.log(MODERN_ACTIVITY / number) * HALF_LIFE_PERIOD / 0.693;

  return Math.ceil(result);
};
