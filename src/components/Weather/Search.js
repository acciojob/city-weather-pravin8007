import React from "react";

const Search = ({ query, setQuery, fetchWeather }) => {
    return (
      <input
        type="text"
        className="search"
        placeholder="Enter a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={fetchWeather}
      />
    );
  };
  
  export default Search;
  