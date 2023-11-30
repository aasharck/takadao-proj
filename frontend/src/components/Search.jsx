import React, { useState } from "react";
import searchIcon from "../assets/icons/search.png";
import axios from "axios";
import Location from "./Location";
import Venue from "./Venue";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [toggle, setToggle] = useState(false);

  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/suggestVenues?query=${value}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (event) => {
    setToggle(false);
    const inputValue = event.target.value;
    setQuery(inputValue);
    fetchSuggestions(inputValue);
  };

  const handleClick = (venue) => {
    setQuery(venue.type);
    setToggle(true);
  };

  return (
    <div className="search-container">
      <h2>Book Your Dream Venue Today: Find, Reserve, and Play with Ease!</h2>
      <div className="search-with-button">
        <div className="search-box input-group">
          <span className="input-group-text">
            <img src={searchIcon} width="18" />
          </span>
          <Venue
            handleClick={handleClick}
            handleInputChange={handleInputChange}
            suggestions={suggestions}
            toggle={toggle}
            query={query}
          />
          <input type="date" placeholder="Date" className="form-control" />
          <Location />
        </div>
        <button className="btn-custom">Search</button>
      </div>
    </div>
  );
};

export default Search;
