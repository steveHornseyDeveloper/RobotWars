const Arena = require('../src/arena')
const Coordinates = require('../src/models/coordinates')
const assert = require('assert')

describe('Arena tests', function () {
	describe('executeCommands', function () {
		it('executeCommands runs correct number of commands', function () {
			var callCount = 0
			var commands = ['', '', '', '']
			const mockRobot = {
				id: 1,
				doCommand: () => (callCount++)
			}

			var arena = new Arena({ robots: [mockRobot] })
			arena.executeRobotCommands(1, commands)

			assert.equal(commands.length, callCount)
		})
	})

	describe('getRobotPositions', function () {
		it('returns correct single item response', function () {
			const coordinates = new Coordinates(1, 2)
			const orientation = 'N'
			const mockRobot = {
				id: 1,
				coordinates: coordinates,
				orientation: orientation
			}

			const newArena = new Arena({ robots: [mockRobot] })

			var positions = newArena.getRobotPositions()

			assert.equal(positions[0].coordinates, coordinates)
			assert.equal(positions[0].orientation, orientation)
		})

		it('returns correct single item response', function () {
			const mockRobot = {
				id: 1,
				coordinates: new Coordinates(1, 2),
				orientation: 'N'
			}
			const mockRobot2 = {
				id: 2,
				coordinates: new Coordinates(7, 8),
				orientation: 'S'
			}
			const mockRobot3 = {
				id: 3,
				coordinates: new Coordinates(5, 9),
				orientation: 'E'
			}
			const robotsArray = [mockRobot, mockRobot2, mockRobot3]

			const newArena = new Arena({ robots: robotsArray })

			var positions = newArena.getRobotPositions()

			assert.equal(positions.length, robotsArray.length)
		})
	})
})
