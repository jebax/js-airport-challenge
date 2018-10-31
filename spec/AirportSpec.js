describe("Airport", function() {
  var Airport = require('../lib/Airport');
  var airport;
  var bigAirport;
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

    it('can get its capacity which is set to the default', function() {
      expect(airport.getCapacity()).toEqual(20);
    })

    it('can override its default capacity', function () {
      expect(bigAirport.getCapacity()).toEqual(50);
    });

    it('is full if number of landed planes equals capacity', function() {
      for(i = 0; i < 20; i++) {
        fullAirport._landedPlanes.push(plane)
      }
      expect(fullAirport).toBeFull;
    });
  });
});
