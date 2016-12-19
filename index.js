'use strict';
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const moment = require('moment');

module.exports = () => {
	const file = path.resolve(__dirname, 'fixture/temp.ejs');
	const date = moment().format('YYYY-MM-DD');

	ejs.renderFile(file, {date}, (err, output) => {
		if (err) {
			console.error(err);
			return;
		}

		fs.writeFileSync(path.resolve(`${date}-report.md`), output);
	});
};
