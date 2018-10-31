describe("Airport", function() {
  var Airport = require('../lib/Airport');
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    fullAirport = new Airport();
    bigAirport = new Airport(50);
    var plane = jasmine.createSpy('plane')
  });

  describe("An airport", function() {

    it("can store planes", function() {
      expect(airport.getLandedPlanes()).toEqual([]);
    });

    it("has a default capacity of 20 planes", function() {
      expect(airport.DEFAULT_CAPACITY).toEqual(20);
    });

    it('can get its capacity', function() {
      expect(airport.getCapacity()).toEqual(20);
    });

    it('is full if number of landed planes equals capacity', function() {
      for(i = 0; i < 20; i++) {
        fullAirport._landedPlanes.push(plane)
      }
      expect(fullAirport).toBeFull;
    });
  });
});
