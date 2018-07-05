module.exports = async function (dependencies, file) {
	const { fileReader } = dependencies

	return new Promise(function (resolve, reject) {
		fileReader(file, 'utf8', function (err, data) {
			if (err) {
				throw err
			}

			return resolve(data)
		})
	})
}
