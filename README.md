# Lord Of The Ring SDK

A JavaScript SDK for accessing Lord Of The Ring API

<hr>

## Getting Started

This SDK is developed for the below API. All routes requests will be prefixed with

```sh
https://the-one-api.dev/v2
```

## Installing

Install this package into your project

```sh
npm install lotr-sdk
```

Import all necessary pre-defined SDK functions into your project. Refer to the [documentation](https://github.com/briannpham/Brian_Pham-SDK/blob/main/design.md) for all provided SDKs

```sh
const { getAllBooks, getAllChapters, lessThan } = require('lotr-sdk');
```

<hr>

## Example

All provides SDKs return a Promise. Promise chaining or ```async/await``` must be used to work with SDKs

```js
const allLOTRBooks = async () => {
	const books = await getAllBooks();

	return books
}
```

or 

```js
getAllBooks()
	.then(books => console.log(books))
```

<hr>

## Testing

Refer to `index.test.js` for all SDK testing implementation

### Example

```js
it('Get all book chapters', async () => {
    const chapters = await getAllChapters();

    expect(chapters.length).toBeGreaterThan(0)
    expect(chapters[0]).toHaveProperty('chapterName')
})
```

```js
it('Get a specific book chapter with id', async () => {
    const chapter = await getChapterById('6091b6d6d58360f988133bc4');
    const book = await getBookById(chapter.book)

    expect(chapter.chapterName).toEqual('The Steward and the King');
    expect(book.name).toEqual('The Return Of The King')

})
```