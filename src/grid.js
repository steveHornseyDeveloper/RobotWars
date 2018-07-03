const Coordinates = require('./models/coordinates')

module.exports = class {
	constructor (dependencies, gridDetails) {
		const {eastLimit, northLimit} = gridDetails
		this.northLimit = northLimit
		this.eastLimit = eastLimit
	}

	move (initialCoordinates, distance, direction) {
		var newCoordinates = new Coordinates(initialCoordinates.east, initialCoordinates.north)
		if (direction === 'N') {
			newCoordinates.north = initialCoordinates.north + 1
		} else if (direction === 'E') {
			newCoordinates.east = initialCoordinates.east + 1
		} else if (direction === 'S') {
			newCoordinates.north = initialCoordinates.north - 1
		} else if (direction === 'W') {
			newCoordinates.east = initialCoordinates.east - 1
		}

		return this.checkIsInBounds(newCoordinates) ? newCoordinates : initialCoordinates
	}
	checkIsInBounds (coordinates) {
		if (coordinates.east > this.eastLimit || coordinates.north > this.northLimit) {
			return false
		} else if (coordinates.east < 0 || coordinates.north < 0) {
			return false
		} else {
			return true
		}
	}
}
