
class Arena {
	constructor ({grid, robots}, parameters) {
		this.robots = robots
		this.grid = grid
		// the arena needs to take a grid..
	}

	executeRobotCommands (id, commands) {
		const robot = this.robots.find(robot => robot.id === id)
		commands.forEach(command => {
			this.executeRobotCommand(robot, command)
		})
	}

	executeRobotCommand (robot, command) {
		robot.doCommand(command, this.grid)
	}
	getRobotPositions () {
		// returns array of Coords
	}
}

module.exports = Arena
