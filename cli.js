#!/usr/bin/env node
'use strict';
const meow = require('meow');
const createDiary = require('./');

meow(`
	Usage
	  $ create-diary [input]

	Examples
	  $ create-diary
`);

createDiary();
