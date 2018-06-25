const fs = require('fs')
const parseInput = require('./src/utils/parseInput')
const createArena = require('./src/factories/arenaFactory')

startApplication()

function startApplication () {
	try {
		processInput()
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}

function runApplication (arenaDetail) {
	var arena = createArena(arenaDetail)

	arenaDetail.robotDetails.forEach((robot, i) => {
		// should the arena take premade robots so we have the id rather than the matching array index?
		arena.executeRobotCommands(i, robot.initialCommands)
	})
	// getRobotPositions then log to console.
}

function processInput () {
	fs.readFile('input.txt', 'utf8', function (err, data) {
		if (err) {
			throw err
		}

		const initialisationData = data.split('\r\n')
		var arenaDetails = parseInput(initialisationData)

		runApplication(arenaDetails)
	})
}
