function Airport() {
  this._landedPlanes = [];
}

Airport.prototype.landedPlanes = function() {
  return this._landedPlanes;
}
