const Robot = require('../robot')

module.exports = (robotDetails) => {
	return new Robot(null, robotDetails)
}
