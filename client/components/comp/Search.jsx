import React, { useState } from "react";

const Search = ({searchTerm,setSearchTerm}) => {
 

  return (
    <div className="flex search ">
      <div className="inputDiv">
        <input 
          type="text"
          placeholder="Search by title or tag..." 
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          />
      </div>
      <button onClick={()=>setSearchTerm("")}>
        Clear
      </button>
    </div>
  );
};

export default Search;
