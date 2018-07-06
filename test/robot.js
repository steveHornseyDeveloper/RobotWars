const Robot = require('../src/robot')
const assert = require('assert')
const Coordinates = require('../src/models/coordinates')
const RobotDetails = require('../src/models/robotDetails')

describe('Robot tests', function () {
	describe('Robot constructor tests', function () {
		it('All fields valid', function () {
			var id = 34
			var startLocation = new Coordinates(4, 3)
			var orientation = 'E'
			var initialCommands = 'MMMMMRLM'

			var robotDetails = new RobotDetails(id, startLocation, orientation, initialCommands)

			var robot = new Robot(undefined, robotDetails)

			assert.equal(robot.id, id)
			assert.equal(robot.coordinates.east, startLocation.east)
			assert.equal(robot.coordinates.north, startLocation.north)
			assert.equal(robot.orientation, orientation)
		})
	})

	describe('Robot rotation tests', function () {
		var coordinates = new Coordinates(0, 0)
		it('rotate left', function () {
			var robotDetails = new RobotDetails(1, coordinates, 'N', [])
			var robot = new Robot(undefined, robotDetails)

			robot.doCommand('L')

			assert.equal('W', robot.orientation)
		})
		it('rotate right', function () {
			var robotDetails = new RobotDetails(1, coordinates, 'N', [])
			var robot = new Robot(undefined, robotDetails)

			robot.doCommand('R')

			assert.equal('E', robot.orientation)
		})
		it('rotate right (back to North)', function () {
			var robotDetails = new RobotDetails(1, coordinates, 'W', [])
			var robot = new Robot(undefined, robotDetails)

			robot.doCommand('R')

			assert.equal('N', robot.orientation)
		})
	})

	describe('Robot move tests', function () {
		const coordinates = new Coordinates(0, 0)
		it('calls the grid move function', function () {
			var wasCalled = false
			var robotDetails = new RobotDetails(1, coordinates, 'W', [])
			var robot = new Robot(undefined, robotDetails)
			const mockGrid = {
				move: () => {
					wasCalled = true
				}
			}

			robot.doCommand('M', mockGrid)

			assert.equal(wasCalled, true)
		})

		it('robot\'s new position is updated', function () {
			var robotDetails = new RobotDetails(1, coordinates, 'W', [])
			var robot = new Robot(undefined, robotDetails)
			const newCoordinates = new Coordinates(2, 6)
			const mockGrid = {
				move: function () { return newCoordinates }
			}

			robot.doCommand('M', mockGrid)

			assert.equal(robot.coordinates, newCoordinates)
		})
	})

	describe('Unknown command tests', function () {
		var coordinates = new Coordinates(0, 0)
		it('throws error', function () {
			var robot = new Robot(undefined, {coordinates, orientation: 'N'})
			var errorThrower = () => robot.doCommand('Z')
			assert.throws(errorThrower)
		})
	})
})
