function Airport() {
  this._landedPlanes = [];
  this.DEFAULT_CAPACITY = 20;
}

Airport.prototype.getLandedPlanes = function() {
  return this._landedPlanes;
}

Airport.prototype.isFull = function () {
  return this._landedPlanes.length >= this.DEFAULT_CAPACITY;
}

module.exports = Airport;
