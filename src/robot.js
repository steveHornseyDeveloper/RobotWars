
class Robot {
	constructor (dependencies, robotDetails) {
		const {id, startLocation, orientation} = robotDetails
		this.id = id
		this.coordinates = startLocation
		this.orientation = orientation
	}

	doCommand (command, grid) {
		if (command === 'M') {
			move.call(this, grid)
		} else if (command === 'L' || command === 'R') {
			rotate.call(this, command)
		} else {
			throw new Error(`Unknown command: ${command}`)
		}
	}
}

module.exports = Robot

function move (grid) {
	grid.move(this.coordinates, 1, this.orientation)
}

function rotate (direction) {
	var orientationList = ['N', 'E', 'S', 'W']
	var currentIndex = orientationList.indexOf(this.orientation)

	if (direction === 'R') {
		this.orientation = orientationList[currentIndex + 1] || orientationList[0]
	} else {
		this.orientation = orientationList[currentIndex - 1] || orientationList[orientationList.length - 1]
	}
}
