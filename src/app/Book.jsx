import React from 'react';

const Book = ({ book }) => {
    console.log('book', book)
  return (
    <div className="p-4 border border-gray-300 rounded shadow flex flex-col sm:flex-row bg-white dark:bg-gray-800">
      {book.volumeInfo.imageLinks.thumbnail && <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={`${book.volumeInfo.title} cover`}
        className="w-full h-auto sm:w-24 sm:h-32 object-cover mb-4 sm:mb-0 sm:mr-4"
      />}
      <div className="text-gray-900 dark:text-gray-100">
        <h3 className="text-lg font-bold mb-2">{book.volumeInfo.title || ""}</h3>
        <p className="text-sm mb-1">Author: {book.volumeInfo.authors.join(', ') || ""}</p>
        <p className="text-sm mb-1">Publisher: {book.volumeInfo.publisher || ""}</p>
        <p className="text-sm mb-1">Published Date: {book.volumeInfo.publishedDate || ""}</p>
        <p className="text-sm">{book.volumeInfo.description || ""}</p>
      </div>
    </div>
  );
};

export default Book;