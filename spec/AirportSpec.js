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

    it("has a default capacity of 20 planes", function() {
      expect(airport.DEFAULT_CAPACITY).toEqual(20)
    })
  });
});
