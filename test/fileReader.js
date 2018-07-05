const fileReader = require('../src/utils/fileReader')
const assert = require('assert')

describe('File Reader tests', function () {
	it('isCalled', function () {
		var called = false
		const fakeFileReader = function () {
			called = true
		}

		fileReader({fileReader: fakeFileReader}, 'file')
		assert.equal(called, true)
	})

	it('called with correct params', function () {
		var actualFileName = 'file.txt'
		var actualEncoding = 'utf8'

		var fakeFileReader = function (fileName, encoding, callBack) {
			assert.equal(fileName, actualFileName)
			assert.equal(encoding, actualEncoding)

			callBack(undefined, true).then((data) => {
				assert.equal(data, true)
			})
		}

		fileReader({fileReader: fakeFileReader}, actualFileName)
	})

	it('awaited result is callback "data"', async function () {
		var callbackData = true
		var fakeFileReader = function (fileName, encoding, callBack) {
			callBack(undefined, callbackData)
		}

		var promiseResult = await fileReader({fileReader: fakeFileReader}, 'file.txt')

		assert.equal(promiseResult, callbackData)
	})

	it('handles errors', async function () {
		const error = Error('Booom!')
		let errorWasThrown = false
		try {
			var fakeFileReader = function (fileName, encoding, callBack) {
				callBack(error, undefined)
			}
			await fileReader({fileReader: fakeFileReader}, 'file.txt')
		} catch (err) {
			errorWasThrown = true
		}
		assert.equal(errorWasThrown, true)
	})
})
