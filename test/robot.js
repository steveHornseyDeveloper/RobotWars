const Robot = require('../src/robot')
const assert = require('assert')
const Coordinates = require('../src/models/coordinates')

describe('Robot tests', function () {
	//previously movement was the responsibility of the robot rather than the grid.
	describe('Robot movement tests', function () {
		var coordinates, startNorth, startEast
		beforeEach(function () {
			startNorth = 1
			startEast = 1
			coordinates = new Coordinates(startEast, startNorth)
		})

		it('move north', function () {
			var robot = new Robot(null, {coordinates, orientation: 'N'})

			robot.doCommand('M')

			assert.equal(startNorth + 1, robot.coordinates.north)
			assert.equal(startEast, robot.coordinates.east)
		})

		it('move east', function () {
			var robot = new Robot(null, {coordinates, orientation: 'E'})

			robot.doCommand('M')

			assert.equal(startNorth, robot.coordinates.north)
			assert.equal(startEast + 1, robot.coordinates.east)
		})

		it('move west', function () {
			var robot = new Robot(null, {coordinates, orientation: 'W'})

			robot.doCommand('M')

			assert.equal(startNorth, robot.coordinates.north)
			assert.equal(startEast - 1, robot.coordinates.east)
		})

		it('move south', function () {
			var robot = new Robot(null, {coordinates, orientation: 'S'})

			robot.doCommand('M')

			assert.equal(startNorth - 1, robot.coordinates.north)
			assert.equal(startEast, robot.coordinates.east)
		})
	})

	describe('Robot rotation tests', function () {
		var coordinates = new Coordinates(0, 0)
		it('rotate left', function () {
			var robot = new Robot(null, {coordinates, orientation: 'N'})

			robot.doCommand('L')

			assert.equal('W', robot.orientation)
		})
		it('rotate right', function () {
			var robot = new Robot(null, {coordinates, orientation: 'N'})

			robot.doCommand('R')

			assert.equal('E', robot.orientation)
		})
		it('rotate right (back to North)', function () {
			var robot = new Robot(null, {coordinates, orientation: 'W'})

			robot.doCommand('R')

			assert.equal('N', robot.orientation)
		})
	})

	describe('Unknown command tests', function () {
		var coordinates = new Coordinates(0, 0)
		it('throws error', function () {
			var robot = new Robot(null, {coordinates, orientation: 'N'})
			var errorThrower = () => robot.doCommand('Z')
			assert.throws(errorThrower)
		})
	})
})