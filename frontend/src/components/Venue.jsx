import React from "react";

const Venue = ({toggle, handleInputChange, handleClick, suggestions, query}) => {
  return (
    <div className="d-block position-relative w-50 venue-box">
      <input
        type="text"
        placeholder="Venue type"
        className="form-control w-100 rounded-0"
        value={query}
        onChange={handleInputChange}
      />
      {!toggle && (
        <div className="auto-suggestion-box">
          {suggestions &&
            suggestions.map((venue, index) => (
              <div key={index} onClick={() => handleClick(venue)}>
                {venue.type}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Venue;
