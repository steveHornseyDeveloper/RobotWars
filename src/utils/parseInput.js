const {isEven} = require('./utils')
const Coordinates = require('../models/coordinates')
const RobotDetails = require('../models/robotDetails')
const ArenaDetails = require('../models/arenaDetails')
const GridDetails = require('../models/gridDetails')

module.exports = (initialisationData) => {
	var gridDetails
	var robotDetails = []

	initialisationData.forEach((row, i) => {
		if (i === 0) {
			var gridSize = row.split(' ')
			gridDetails = new GridDetails(gridSize[0], gridSize[1])
		} else if (!isEven(i)) {
			var startInfo = row.split(' ')
			let coordinates = new Coordinates(parseInt(startInfo[0]), parseInt(startInfo[1]))
			let robotDetail = new RobotDetails(robotDetails.length + 1, coordinates, startInfo[2], (initialisationData[i + 1]).split(''))
			robotDetails.push(robotDetail)
		}
	})

	return new ArenaDetails(gridDetails, robotDetails)
}
