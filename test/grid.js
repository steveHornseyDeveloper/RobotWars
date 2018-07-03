const Coordinates = require('../src/models/coordinates')
const Grid = require('../src/grid')
const assert = require('assert')
const GridDetails = require('../src/models/gridDetails')

describe('Robot movement tests in large space', function () {
	var gridDetails, startCoordinates, startNorth, startEast
	beforeEach(function () {
		startNorth = 1
		startEast = 1
		startCoordinates = new Coordinates(startEast, startNorth)
		gridDetails = new GridDetails(99, 99)
	})

	it('move north', function () {
		var grid = new Grid(null, gridDetails)

		const newPosition = grid.move(startCoordinates, 1, 'N')

		assert.equal(startNorth + 1, newPosition.north)
		assert.equal(startEast, newPosition.east)
	})

	it('move east', function () {
		var grid = new Grid(null, gridDetails)

		const newPosition = grid.move(startCoordinates, 1, 'E')

		assert.equal(startNorth, newPosition.north)
		assert.equal(startEast + 1, newPosition.east)
	})

	it('move west', function () {
		var grid = new Grid(null, gridDetails)

		const newPosition = grid.move(startCoordinates, 1, 'W')

		assert.equal(startNorth, newPosition.north)
		assert.equal(startEast - 1, newPosition.east)
	})

	it('move south', function () {
		var grid = new Grid(null, gridDetails)

		const newPosition = grid.move(startCoordinates, 1, 'S')

		assert.equal(startNorth - 1, newPosition.north)
		assert.equal(startEast, newPosition.east)
	})
})
