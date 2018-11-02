describe("WeatherReporter", function() {
  var WeatherReporter = require('../lib/WeatherReporter');
  var weatherReporter;
  var stormChance;

  beforeEach(function() {
    weatherReporter = new WeatherReporter();
    stormChance = weatherReporter.STORM_CHANCE;
  });
})
