import React, { useEffect, useState } from "react";
import CardsComp from "./CardsComp";
import { getAllposts } from "../../services/api";

const Cards = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  
  const [postCount ,setPostCount] = useState(8);
  const [cardData,setCardData]=useState([]);
useEffect(() => {
  const fetchPosts = async () => {
    try {
      const data = await getAllposts();
      console.log(data.post)
      setCardData(data.post); 
    } catch (err) {
      console.log("error while reading", err);
    }
  };
  fetchPosts();
}, []);

  const filterPost = cardData.filter((cardData) => {
    if (searchTerm === "") return true;

    const search = searchTerm.toLowerCase();

    const titleMatch = cardData.title.toLowerCase().includes(search);

    const tagMatch = cardData.tags.some((tag) =>
      tag.toLowerCase().includes(search)
    );

    const authorMatch = cardData.author.toLowerCase().includes(search);

    return authorMatch || titleMatch || tagMatch;
  });
  
  const sortedPost = [...filterPost].sort((a,b)=>{
    if(sortBy === "latest"){
      return new Date(b.date) - new Date(a.date);
    }
    if(sortBy === "popular"){
      return b.views - a.views;
    }
    if(sortBy === "most-popular"){
      return b.stars - a.stars;
    }
    return 0;
  });

   const visiblePost = sortedPost.slice(0, postCount);
  const hasMore = postCount < sortedPost.length;



  return (
    <section className="catogeryDiv">
      <div className="flex between catogeryDiv-1">
        <h2>{sortBy.toUpperCase()}</h2>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select 
          name="sort"
           id="sort"
           value={sortBy}
           onChange={(e)=> setSortBy(e.target.value)}
           >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
            <option value="most-popular">Most Popular</option>
          </select>
        </div>
      </div>

      <CardsComp posts={visiblePost} />
    {hasMore && (
        <div className="load-more">
          <button
            className="load-more-button"
            onClick={() => setPostCount(postCount + 8)}
          >
            Load More Posts
          </button>
        </div>
      )}
    </section>
  );
};

export default Cards;
