// SDK for Lord of The Ring API
const fetch = require("node-fetch");

const baseURL = "https://the-one-api.dev/v2";
const ACCESS_KEY = '8-0OVb4azr85RKHwQwvG';

/**
 * Get all "The Lord of The Rings" books
 * @returns {Array} list of all books
 */
const getAllBooks = async () => {
  const response = await fetch(`${baseURL}/book`);
  const data = await response.json();

  return data.docs;
};


/**
 * Get one specific book
 * @param {string} id - Book id
 * @returns {Object} A book with id equals params id
 */
const getBookById = async (id) => {
  const response = await fetch(`${baseURL}/book/${id}`);
  const data = await response.json();

  return data.docs[0];
};


/**
 * Get all chapters of a specific book
 * @param {string} - id - Book id
 * @returns {Array} - An array of all chapters 
 */
const getAllChapters = async (id) => {
  const response = await fetch(`${baseURL}/book/${id}/chapter`)
  const data = await response.json()

  return data.docs
}


module.exports = {
  getAllBooks,
  getBookById,
  getAllChapters
}