const { 
    getAllBooks, 
    getBookById,
    getAllChaptersOfABook,
    getAllMovies,
    getMovieById,
    getCharacters,
    getCharacterById,
    getAllQuotesOfACharacter,
    getAllQuotes,
    getQuoteById,
    getAllChapters,
    getChapterById,
    getNumbersOfCharacter,
    getCharactersOnPage,
    match,
    lessThan
} = require('./index');


it('Get all books', async () => {
    const firstBook = {
        _id: '5cf5805fb53e011a64671582',
        name: 'The Fellowship Of The Ring'
    };

    const books = await getAllBooks();

    expect(books).toHaveLength(3);
    expect(books[0]).toMatchObject(firstBook);
});

it('Get a book with id', async () => {
    const firstBook = {
        _id: '5cf5805fb53e011a64671582',
        name: 'The Fellowship Of The Ring'
    };

    const secondBook = {
        _id: '5cf58077b53e011a64671583',
        name: 'The Two Towers'
    };
    
    const book = await getBookById('5cf5805fb53e011a64671582');

    expect(book).toEqual(firstBook);
    expect(book).not.toEqual(secondBook);
});

it('Get all chapters of a book', async () => {
    const chapters = await getAllChaptersOfABook('5cf5805fb53e011a64671582');

    expect(chapters[0]).toHaveProperty('chapterName');
    expect(chapters.length).toBeGreaterThan(3);
});

it('Get all LOTR movies', async () => {
    const movies = await getAllMovies();
    
    expect(movies.length).toBeGreaterThan(3);
    expect(movies[0]).toHaveProperty('boxOfficeRevenueInMillions');
    expect(movies[0]).toHaveProperty('rottenTomatoesScore');
    expect(movies[0]['_id']).toEqual('5cd95395de30eff6ebccde56');
});

it('Get a movie with id', async () => {
    const movie = await getMovieById('5cd95395de30eff6ebccde56');

    expect(movie).toHaveProperty('boxOfficeRevenueInMillions');
    expect(movie.boxOfficeRevenueInMillions).toEqual(2917);
    expect(movie.rottenTomatoesScore).toEqual(94);
});

it('Get all characters', async () => {
    const characters = await getCharacters();
    
    expect(characters.length).toBeGreaterThan(0);
    expect(characters[0]).toHaveProperty('race');
    expect(characters[0]).toHaveProperty('realm');
    expect(characters[0].race).toEqual('Human');
    expect(characters[0].gender).toEqual('Female');
    expect(characters[0].realm).toEqual('');
});

it('Get a character with id', async () => {
    const character = await getCharacterById('5cd99d4bde30eff6ebccfc1f');

    expect(character.race).toEqual('Human');
    expect(character.name).toEqual('Bain');
    expect(character.death).toEqual('TA 3007');
});

it('Get all movie quotes of a character', async () => {
    const allQuotes = await getAllQuotesOfACharacter('5cd99d4bde30eff6ebccfc1f');

    expect(allQuotes.length).toEqual(0);
});

it('Get all movie quotes', async () => {
    const allQuotes = await getAllQuotes();

    expect(allQuotes.length).toBeGreaterThan(0);
    expect(allQuotes[0].dialog).toEqual('Deagol!');
    expect(allQuotes[3].dialog).toEqual('Give us that! Deagol my love');
});

it('Get a specific movie quote with id', async () => {
    const quote = await getQuoteById('5cd96e05de30eff6ebcce848');

    expect(quote.dialog).toEqual('Free? He will never be free!');
    expect(quote.movie).toEqual('5cd95395de30eff6ebccde5d');
});

it('Get all book chapters', async () => {
    const chapters = await getAllChapters();

    expect(chapters.length).toBeGreaterThan(0);
    expect(chapters[0]).toHaveProperty('chapterName');
});

it('Get a specific book chapter with id', async () => {
    const chapter = await getChapterById('6091b6d6d58360f988133bc4');
    const book = await getBookById(chapter.book);

    expect(chapter.chapterName).toEqual('The Steward and the King');
    expect(book.name).toEqual('The Return Of The King');

});

it('Return a correct character name from a quote id', async () => {
    const quote = await getQuoteById('5cd96e05de30eff6ebcce849');
    const character = await getCharacterById(quote.character);

    expect(quote.dialog).toEqual('No!');
    expect(character.name).toEqual('Gríma Wormtongue');

});

it('Return a correct number of characters set by limit', async () => {
    const characters = await getNumbersOfCharacter(20);

    expect(characters.length).toBe(20);
});

xit('Return a list of 10 characters on a given page', async () => {
    const characters = await getCharactersOnPage(1);

    expect(characters.length).toBe(10);
});

it('Return a list of objects within a category that match a given value', async () => {
    const characterList = await match('character', 'name', 'Baran');
    const characterList1 = await match('character', 'gender', 'Male');

    expect(characterList[0].name).toEqual('Baran');
    expect(characterList[0].gender).toEqual('Male');
    expect(characterList[0].realm).toEqual('Estolad');
    
    expect(characterList1[10].gender).toEqual('Male');
    expect(characterList1[40].gender).toEqual('Male');
});

it('Return a list of movies that have budgest less than 100 millions', async () => {
    const movies = await lessThan('movie', 'budgetInMillions', 100);

    expect(movies.length).toBe(3);
    expect(movies[0].budgetInMillions).toBe(94);
});

it('Return a list of movies that have RottenTomato score less than 70', async () => {
    const movies = await lessThan('movie', 'rottenTomatoesScore', 70);

    expect(movies.length).toBe(3);
    expect(movies[1].rottenTomatoesScore).toBe(64);
});