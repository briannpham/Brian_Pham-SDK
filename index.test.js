const { 
    getAllBooks, 
    getBookById,
    getAllChapters,
    getAllMovies
} = require('./index')

it('Get all books', async () => {
    const firstBook = {
        _id: '5cf5805fb53e011a64671582',
        name: 'The Fellowship Of The Ring'
    }

    const books = await getAllBooks();

    expect(books).toHaveLength(3);
    expect(books[0]).toMatchObject(firstBook)
})

it('Get a book with id', async () => {
    const firstBook = {
        _id: '5cf5805fb53e011a64671582',
        name: 'The Fellowship Of The Ring'
    }

    const secondBook = {
        _id: '5cf58077b53e011a64671583',
        name: 'The Two Towers'
    }
    
    const book = await getBookById('5cf5805fb53e011a64671582')

    expect(book).toEqual(firstBook);
    expect(book).not.toEqual(secondBook);
})

it('Get all chapters of a book', async () => {
    const chapters = await getAllChapters('5cf5805fb53e011a64671582')

    expect(chapters[0]).toHaveProperty('chapterName')
    expect(chapters.length).toBeGreaterThan(3)
})

it('Get all LOTR movies', async () => {
    const movies = await getAllMovies();
    
    expect(movies.length).toBeGreaterThan(3)
    expect(movies[0]).toHaveProperty('boxOfficeRevenueInMillions')
    expect(movies[0]).toHaveProperty('rottenTomatoesScore')
    expect(movies[0]['_id']).toEqual('5cd95395de30eff6ebccde56')
})