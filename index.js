const fs = require('fs')
const parseInput = require('./src/utils/parseInput')
const fileReader = require('./src/utils/fileReader')
const createArena = require('./src/factories/arenaFactory')

startApplication()

function startApplication () {
	try {
		runApplication()
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}

async function runApplication () {
	var initialisationData = await fileReader({fileReader: fs.readFile}, 'input.txt')

	var arenaDetail = parseInput(initialisationData.split('\r\n'))

	var arena = createArena(arenaDetail)
	arenaDetail.robotDetails.forEach(robot => {
		arena.executeRobotCommands(robot.id, robot.initialCommands)
	})
	const robotLocations = arena.getRobotPositions()

	robotLocations.forEach(location => {
		console.log(`${location.coordinates.east} ${location.coordinates.north} ${location.orientation}`)
	})
}
