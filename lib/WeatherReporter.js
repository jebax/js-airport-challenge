function WeatherReporter() {
  this.STORM_CHANCE = 0.1
}

WeatherReporter.prototype.isStormy = function() {
  return Math.random() < this.STORM_CHANCE;
};

module.exports = WeatherReporter;
