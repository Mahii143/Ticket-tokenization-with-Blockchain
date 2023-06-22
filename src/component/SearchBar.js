import React from "react";

import { ReactComponent as Icon } from "../assets/icons8-search-30.svg";

const SearchBar = () => {
  return (
    <div className="searchbar-container flex-c-c">
      <div className="searchbar-wrap flex-c-c">
        <div className="searchbar-box flex-c-c">
          <div className="searchbar-border flex-c-c">
            <input
              type="text"
              name="search"
              placeholder="search movie or events"
            />
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
