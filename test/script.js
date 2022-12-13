// Test NPM package
const { getAllBooks, getAllChapters, getQuoteById, lessThan } = require('lotr-sdk');

getAllBooks()
	.then(books => console.log(books));


getAllChapters()
	.then(chapters => console.log(chapters));

getQuoteById('5cd96e05de30eff6ebcce848')
	.then(quote => console.log(quote));

lessThan('movie', 'rottenTomatoesScore', 70)
	.then(movies => console.log(movies));