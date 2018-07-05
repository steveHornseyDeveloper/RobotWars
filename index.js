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
		// should the arena take premade robots so we have the id rather than the matching array index?
		arena.executeRobotCommands(robot.id, robot.initialCommands)
	})
	// getRobotPositions then log to console.
}
