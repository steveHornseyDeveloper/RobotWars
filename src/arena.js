
class Arena {
	constructor (dependencies, parameters) {
		const {grid, robots} = dependencies
		this.robots = robots
		this.grid = grid
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
		return this.robots.map(robot => ({
			coordinates: robot.coordinates,
			orientation: robot.orientation
		}))
	}
}

module.exports = Arena
