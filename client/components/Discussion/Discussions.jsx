import React, { useState } from 'react';
import Cards from '../comp/Cards';
import Search from '../comp/Search';
import './discuss.css'
const Discussions = () => {
  const [searchTerm, setSearchTerm] = useState("");  // ✅ Add state
  const [sortBy, setSortBy] = useState("latest");    // ✅ Add state

  return (
    <div className='discuss'>
      <div className="discussions-header">
        <div>
          <p className='font-[italic]'>POSTS</p>
        <Search 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}  // ✅ Pass state
        />
        </div>
      </div>
      <section>
        <Cards 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}   // ✅ Pass state
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </section>
    </div>
  )
}

export default Discussions;