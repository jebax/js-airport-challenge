describe("Airport", function() {
  var Airport = require('../lib/Airport');
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("An airport", function() {

    it("can store planes", function() {
      expect(airport.landedPlanes()).toEqual([])
    });
  });
});
