// SDK for Lord of The Ring API
const fetch = require("node-fetch");

const baseURL = "https://the-one-api.dev/v2";
const ACCESS_KEY = '8-0OVb4azr85RKHwQwvG';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_KEY}`
  }
}

/**
 * Get all "The Lord of The Rings" books
 * @returns {Array} List of all books
 */
const getAllBooks = async () => {
  const response = await fetch(`${baseURL}/book`);
  const data = await response.json();

  return data.docs;
};


/**
 * Get one specific book
 * @param {string} bookId - Book id
 * @returns {Object} A book with id equals param id
 */
const getBookById = async (bookId) => {
  const response = await fetch(`${baseURL}/book/${bookId}`);
  const data = await response.json();

  return data.docs[0];
};


/**
 * Get all chapters of a specific book
 * @param {string} bookId - Book id
 * @returns {Array} An array of all chapters 
 */
const getAllChaptersOfABook = async (bookId) => {
  const response = await fetch(`${baseURL}/book/${bookId}/chapter`)
  const data = await response.json()

  return data.docs
}


/**
 * Get all LOTR movies
 * @returns {Array} List of all movies
 */
const getAllMovies = async () => {
  const response = await fetch(`${baseURL}/movie`, config)
  const data = await response.json()

  return data.docs
}


/**
 * Get a movie by id
 * @param {string} movieId - Movie id
 * @return {Object} A movie with id equals param id
 */
const getMovieById = async (movieId) => {
  const response = await fetch(`${baseURL}/movie/${movieId}`, config);
  const data  = await response.json();

  return data.docs[0]
}


/**
 * Get all characters
 * @return {Array} List of all characters
 */
const getCharacters = async () => {
  const response = await fetch(`${baseURL}/character`, config)
  const data = await response.json()

  return data.docs
}


/**
 * Get a character by id
 * @param {string} characterId - Character id
 * @return {Object} A character with id equals param id
 */
const getCharacterById = async (characterId) => {
  const response = await fetch(`${baseURL}/character/${characterId}`, config)
  const data = await response.json()

  return data.docs[0]
}


/**
 * Get all movie quotes of a specific character
 * @param {string} characterId - Character id
 * @return {Array} List of all quotes of a character
 */
const getAllQuotesOfACharacter = async (characterId) => {
  const response = await fetch(`${baseURL}/character/${characterId}/quote`, config)
  const data = await response.json()

  return data.docs
}


/**
 * Get all movie quotes
 * @return {Array} List of all movie quotes
 */
const getAllQuotes = async () => {
  const response = await fetch(`${baseURL}/quote`, config)
  const data = await response.json()

  return data.docs
}


/**
 * Get a specific movie quote
 * @param {string} quoteId - Quote id
 * @return {Object} A quote with a given id
 */
const getQuoteById = async (quoteId) => {
  const response = await fetch(`${baseURL}/quote/${quoteId}`, config)
  const data = await response.json()

  return data.docs[0]
}


/**
 * Get all book chapters
 * @return {Array} List of all book chapters
 */
const getAllChapters = async () => {
  const response = await fetch(`${baseURL}/chapter`, config)
  const data = await response.json()

  return data.docs
}


/**
 * Get one specific book chapter
 * @param {string} chapterId - Chapter id
 * @return {Object} A book chapter with a given id
 */
const getChapterById = async (chapterId) => {
  const response = await fetch(`${baseURL}/chapter/${chapterId}`, config)
  const data = await response.json()

  return data.docs[0]
}

module.exports = {
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
  getChapterById
}