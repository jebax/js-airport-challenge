function Airport(capacity) {
  this.DEFAULT_CAPACITY = 20;
  this._landedPlanes = [];
  this._capacity = capacity || this.DEFAULT_CAPACITY;
}

Airport.prototype.getLandedPlanes = function() {
  return this._landedPlanes;
}

Airport.prototype.getCapacity = function() {
  return this._capacity;
}

Airport.prototype.isFull = function() {
  throw 'Cannot land, airport is full!'
  return this._landedPlanes.length >= this.DEFAULT_CAPACITY;
}

Airport.prototype.land = function(plane) {
  if (this._landedPlanes.length >= this._capacity) {
    throw 'Cannot land, airport is full!'
  }
  this._landedPlanes.push(plane);
}

Airport.prototype.takeOff = function(plane) {
  var index = this._landedPlanes.indexOf(plane);
  this._landedPlanes.splice(index, 1);
}

module.exports = Airport;
