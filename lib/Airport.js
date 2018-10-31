function Airport() {
  this.DEFAULT_CAPACITY = 20;
  this._landedPlanes = [];
  this._capacity = this.DEFAULT_CAPACITY;
}

Airport.prototype.getLandedPlanes = function() {
  return this._landedPlanes;
}

Airport.prototype.getCapacity = function() {
  return this._capacity;
}

Airport.prototype.isFull = function () {
  return this._landedPlanes.length >= this.DEFAULT_CAPACITY;
}

module.exports = Airport;
