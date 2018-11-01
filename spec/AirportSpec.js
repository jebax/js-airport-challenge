describe("Airport", function() {
  var Airport = require('../lib/Airport');
  var airport;
  var bigAirport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    fullAirport = new Airport(1);
    bigAirport = new Airport(50);
    plane = jasmine.createSpy('plane')
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
      expect(fullAirport).toBeFull;
    });
  });

  describe('Landing a plane', function() {
    it("should show plane in airport's landed planes", function() {
      airport.land(plane)
      expect(airport.getLandedPlanes()).toContain(plane);
    })

    it('cannot happen if the airport is full', function() {
      fullAirport.land(plane)
      expect(function() { fullAirport.land(plane) }).toThrow('Cannot land, airport is full!')
    })
  })

  describe('Instructing a plane to take off', function() {
    it("should remove plane from its list of planes", function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.getLandedPlanes()).not.toContain(plane)
    })
  })
});
