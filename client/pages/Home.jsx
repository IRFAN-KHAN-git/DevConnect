import Catogeries from "../components/Catogeries/Catogeries";
import Cards from "../components/comp/Cards";
import Hero from "../components/comp/Hero";

import React, { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCatogery, setSelectCatogery] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Catogeries
        selectCatogery={selectCatogery}
        setSelectCatogery={setSelectCatogery}
      />
      <Cards
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default Home;
