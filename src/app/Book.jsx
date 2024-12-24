import React from "react";

const Book = ({ book }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow flex flex-col sm:flex-row bg-white dark:bg-gray-800">
      <div className="BookContainer w-[200px] h-[260px] m-[30px] flex items-center justify-center perspective-900">
        {book.volumeInfo.imageLinks.thumbnail && (
          <div
            className="Book w-[200px] h-[260px] relative preserve-3d rotate-y-30 transition-transform-075s"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(-30deg)")
            }
          >
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="Book Cover"
              className="FrontCover w-full h-full absolute rounded-r rounded-l-[3px] shadow-image-shadow"
            />
            <div className="Pages bg-[#fff] h-[calc(260px-2*6px)] w-[50px] top-[3px] absolute page-transform" />
            <div className="BackCover rounded-r bg-[#01060f] h-[260px] w-[200px] left-0 absolute back-cover-transform back-cover-shadow" />
          </div>
        )}
      </div>
      <div className="text-gray-900 dark:text-gray-100">
        <h3 className="text-lg font-bold mb-2">
          {book.volumeInfo.title || ""}
        </h3>
        <p className="text-sm mb-1">
          Author: {book.volumeInfo.authors.join(", ") || ""}
        </p>
        <p className="text-sm mb-1">
          Publisher: {book.volumeInfo.publisher || ""}
        </p>
        <p className="text-sm mb-1">
          Published Date: {book.volumeInfo.publishedDate || ""}
        </p>
        <p className="text-sm">{book.volumeInfo.description || ""}</p>
      </div>
    </div>
  );
};

export default Book;
