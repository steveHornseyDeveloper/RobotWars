const assert = require('assert')
const parseInput = require('../src/utils/parseInput')

describe('Parse input tests', function () {
	it('grid size correctly parsed', function () {
		const eastLimit = 4
		const northLimit = 9
		const input = [
			`${eastLimit} ${northLimit}`
		]
		const arenaDetails = parseInput(input)
		assert.equal(arenaDetails.gridDetails.eastLimit, eastLimit)
		assert.equal(arenaDetails.gridDetails.northLimit, northLimit)
	})

	it('parses a start position correctly to an int', function () {
		const east = 6
		const north = 8
		const input = [
			'5 5',
			`${east} ${north} N`,
			''
		]
		const arenaDetails = parseInput(input)
		assert.equal(typeof arenaDetails.robotDetails[0].startLocation.east, 'number')
		assert.equal(typeof arenaDetails.robotDetails[0].startLocation.north, 'number')
		assert.equal(arenaDetails.robotDetails[0].startLocation.east, east)
		assert.equal(arenaDetails.robotDetails[0].startLocation.north, north)
	})

	it('parses a start orientation correctly', function () {
		const orientation = 'E'
		const input = [
			'5 5',
			`3 3 ${orientation}`,
			''
		]
		const arenaDetails = parseInput(input)
		assert.equal(arenaDetails.robotDetails[0].orientation, orientation)
	})

	it('parses initial commands correctly', function () {
		const commands = 'LMLMLMLMM'
		const input = [
			'5 5',
			`3 3 N`,
			commands
		]
		const arenaDetails = parseInput(input)

		const commandsResult = arenaDetails.robotDetails[0].initialCommands
		assert.equal(commandsResult.length, commands.length)

		commands.split('').forEach((command, index) => {
			assert.equal(commandsResult[index], command)
		})
	})

	it('robots have correct index', function () {
		const commands = 'LMLMLMLMM'
		var input = [
			'5 5',
			'1 2 N',
			'LMLMLMLMM',
			'3 3 E',
			'MMRMMRMRRM'
		]
		const arenaDetails = parseInput(input)

		arenaDetails.robotDetails.map((detail, index) => {
			assert.equal(detail.id, index + 1)
		})
	})
})
// var input = [
// 	'5 5',
// 	'1 2 N',
// 	'LMLMLMLMM',
// 	'3 3 E',
// 	'MMRMMRMRRM'
// ]
