import React from "react";

const Location = () => {
  return (
    <select className="form-select location">
      <option defaultValue={true}>Location</option>
      <option value="1">Riyadh</option>
      <option value="2">Jeddah</option>
      <option value="3">Dammam</option>
    </select>
  );
};

export default Location;
