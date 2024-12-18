import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const fetchBooks = async ({ queryKey }) => {
  const [_key, { query, maxResults }] = queryKey;
  const response = await axios.get("http://127.0.0.1:8000/books", {
    params: { query, max_results: maxResults },
  });
  return response.data;
};

const Test = () => {
  const [searchTerm, setSearchTerm] = useState("harry potter");
  const [maxResults, setMaxResults] = useState(2);

  const { data, isLoading, error } = useQuery({
    queryKey: ["books", { query: searchTerm, maxResults }],
    queryFn: fetchBooks,
  });
  console.log('data', data)
  return (
    <div>
      hi there<p className="mb-2">{JSON.stringify(data)}</p>
    </div>
  );
};
export default Test;
