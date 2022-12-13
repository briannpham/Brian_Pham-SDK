# Lord Of The Ring SDK

A JavaScript SDK for accessing Lord Of The Ring API

<hr>

## Getting Started

This SDK is developed for the below API. All routes requests will be prefixed with

```sh
https://the-one-api.dev/v2
```

<hr>

## SDK Documentation

### getAllBooks()
Get all LOTR books

### getBookById(bookId)
Get one specific book

### getAllChaptersOfABook(bookId)
Get all chapters of a specific book

### getAllMovies()
Get all LOTR movies

### getMovieById(movieId)
Get a movie by id

### getCharacters(bookId)
Get all characters

### getCharacterById(characterId)
Get a character by id

### getAllQuotesOfACharacter(characterId)
Get all movie quotes of a specific character

### getAllQuotes()
Get all movie quotes

### getQuoteById(quoteId)
Get a specific movie quote

### getAllChapters()
Get all book chapters

### getChapterById(chapterId)
Get one specific book chapter

### getNumbersOfCharacter(limit)
Get a limited numbers of characters

### getCharactersOnPage(page)
Get a list of characters by page. Each page is limited to 10 characters by default

### match(category, key, value)
Filter a category by key/value (exact match)

### lessThan(category, key, value)
Filter a caterogy by key/value (less than)

