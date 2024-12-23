import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import Book from "./Book";

const fetchBooks = async ({ queryKey }) => {
  const [_key, { query, maxResults }] = queryKey;
  const response = await axios.get("http://127.0.0.1:8000/books", {
    params: { query, max_results: maxResults },
  });
  return response.data;
};

const Bookstore = () => {
  const [searchTerm, setSearchTerm] = useState("harry potter");
  const [maxResults, setMaxResults] = useState(10);
  const [queryTerm, setQueryTerm] = useState(2);
  const inputRef = useRef(null);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["books", { query: queryTerm, maxResults }],
    queryFn: fetchBooks,
  });

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      makeQuery();
    }
  };

  const makeQuery = () => {
    setQueryTerm(searchTerm);
    refetch();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        placeholder="Search for books"
      />
      <button onClick={makeQuery}>Search</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Books:</h2>

          {data.results.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookstore;
