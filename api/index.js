const scrabble = require('@nosweat/scrabble')

module.exports = (req, res) => {
	const { query } = req

	if (!query.letters) {
		return res.status(400).send('You need to provide a letters query.')
	}

	try {
		const answers = scrabble.find(query.letters)
		return res.status(200).json(answers)
	} catch (err) {
		return res.status(400).send('Something went wrong. Try again.')
	}
}
