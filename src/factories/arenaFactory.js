const Arena = require('../arena')
const createRobot = require('./robotFactory')
const Grid = require('../grid')

module.exports = (arenaDetails) => {
	var robots = arenaDetails.robotDetails.map(robot => createRobot(robot))
	var grid = new Grid(undefined, arenaDetails.gridDetails)
	return new Arena({grid, robots}, undefined)
}
