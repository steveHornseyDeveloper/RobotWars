const Coordinates = require('../models/coordinates')
const Robot = require('../robot')

module.exports = (robotDetails) => {
	const {id, orientation, startNorth, startEast} = robotDetails
	var startCoordinates = new Coordinates(startNorth, startEast)
	return new Robot(null, {id, orientation, startCoordinates})
}
