const Coordinates = require('../models/coordinates')
const Robot = require('../robot')

module.exports = ({id, orientation, startNorth, startEast}) => {
	var startCoordinates = new Coordinates(startNorth, startEast)
	return new Robot(null, {id, orientation, startCoordinates})
}
