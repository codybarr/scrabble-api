const scrabble = require('scrabble')

module.exports = (req, res) => {
	const { body, query } = req

	if (!query.letters) {
		return res.status(400).send('You need to provide a letters query.')
	}

	try {
		let answers = scrabble(query.letters)
		return res.status(200).json(answers)
	} catch (err) {
		return res.status(400).send('Something went wrong. Try again.')
	}
}
