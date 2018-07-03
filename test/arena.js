const Arena = require('../src/arena')
const assert = require('assert')

describe('Arena tests', function () {
	it('executeCommands', function () {
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
