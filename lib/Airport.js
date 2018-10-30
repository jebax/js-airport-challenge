function Airport() {
  this._landedPlanes = [];
  this.DEFAULT_CAPACITY = 20;
}

Airport.prototype.landedPlanes = function() {
  return this._landedPlanes;
}

module.exports = Airport;
