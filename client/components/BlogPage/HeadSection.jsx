import React, { useEffect, useState } from "react";
import "./blog.css";
import { BookOpen, Users } from "lucide-react";
import { getAllposts, getPostById } from '../../services/api';


const HeadSection = () => {
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
    const handelPostClick = async (id)=>{
      try{
        const responce =  await getPostById(id);
        console.log(responce);
      }
      catch(err){
        console.log("error while getting the post",err)
      }
    }
  
  const guidelines = [
    {
      number: "01",
      title: "Be Active",
      description:
        "Engage with the community and share your experiences. Stay active to make the most of it.",
    },
    {
      number: "02",
      title: "Network Efficiently",
      description:
        "Connect with fellow developers and collaborate on projects to enhance your skills.",
    },
    {
      number: "03",
      title: "Share Your Knowledge",
      description:
        "Contribute by writing tutorials and documenting solutions for others to learn from.",
    },
    {
      number: "04",
      title: "Stay Updated",
      description:
        "Keep up with updates in the tech world to stay relevant in your career.",
    },
    {
      number: "05",
      title: "Provide Feedback",
      description:
        "Engage with others' work and help improve your community feedback culture.",
    },
  ];

  const similarArticles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MDIwMTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "React",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzYwMjAxNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Building REST APIs",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMjAxNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Backend",
    },
   
  ];

  const latestCard = [...cardData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const twoCard = latestCard.slice(0, 2);

  return (
    <div className="blog">
      {/* Page Title */}
      <div className="blog-name">
        <h1>Blog</h1>
      </div>
      {/* head image Section */}
      <section className="blog-section">
        <div className="img-div">
          <div className="img-div-2">
            <img src="../../src/assets/Tips.jpeg" alt="blog" />
            <div className="img-overlay"></div>

            <div className="image-data">
              <div className="image-title">
                <span>Featured</span>
                <h2>
                  Top tips for improving
                  <br />
                  the developer community
                </h2>
                <p>
                  Discover the best practices and guidelines to make the most of
                  your experience in the DevConnect community.
                </p>

                <div className="flex  item-center">
                  <button>Read More</button>
                  <span> 5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Community Guidelines Section */}
      <section className="guideline">
        <div className="guideline-1">
          <div className="guideline-2">
            <div className="flex center item-center guideline-3">
              <Users className="users" />
            </div>
            <div className="flex-1">
              <h2>DevConnect Community</h2>
              <p>
                Connect with developers, Community is all about you and what
                value you bring into it. Following these simple tips will help
                you understand DevConnect more to make the most of it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  List */}
      <div className="list">
        {guidelines.map((guideline) => (
          <div key={guideline.number} className="list-1">
            <div className="number">
              <span>#{guideline.number}</span>
            </div>
            <div className="list-data flex-1">
              <h3>{guideline.title}</h3>
              <p>{guideline.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Similar Articles */}
      <section className="artical">
        <div className="artical-heading">
          <h2>Similar Articles</h2>
        </div>
        <div className="flex item-center between artical-1">
          {similarArticles.map((artical) => (
            <div key={artical.id} className="artical-2">
              <div className="artical-img">
                <img src={artical.image} alt={artical.title} />
                <div className="img-overlay"></div>
              </div>
              <div className="artical-data">
                <span>{artical.category}</span>
                <h3>{artical.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className="about-section">
        <div className="about-1">
          <div className="book-img">
            <BookOpen className="book" />
          </div>
          <div className="flex-1">
            <h2>About</h2>
            <h3>the community</h3>
            <p>
              DevConnect is a thriving community of developers from around the
              world. We believe in the power of collaboration, knowledge
              sharing, and continuous learning. Our platform provides a space
              where developers can connect, share their experiences, and grow
              together. Whether you're just starting your journey or you're a
              seasoned professional, there's always something new to learn and
              someone to learn from.
            </p>
           <a href="/about"> <button>Learn More</button></a>
          </div>
        </div>
      </section>
      {/* latest post */}
      <section className="latest-post">
        <div>
          <div className="flex between item-center">
            <h2>Latest Posts</h2>
           <a href="/home"> <button>View All</button></a>
          </div>
          <div className="latest-post-1">
            {twoCard.map((card) => (
              <div key={card._id} onClick={()=> handelPostClick(card._id)} className="latest-post-2">
                <div className="latest-post-img">
                  <img src={card.avatar} alt={card.title} />
                </div>
                <div className="latest-post-data flex-1">
                  <h2>{card.title}</h2>
                  <p>{card.excerpt}</p>
                  <div className="card-time">
                    <span>{new Date(card.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{card.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadSection;
