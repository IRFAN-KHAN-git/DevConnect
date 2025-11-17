import Search from "./Search";
import TypingEffect from "./TypingEffect";
import "./comp.css";

const Hero = ({ searchTerm, setSearchTerm }) => {
  const words = ["developer", "creator", "designer"];

  return (
    <section>
      <div className="hero">
        <h1>
          Join the <br className=" lg:hidden" />
          <span className="hi">&#123;</span>
          <TypingEffect words={words} />
          <span className="hi">&#125;</span>
          <br className=" lg:hidden" /> community.
          <br />
          <span className="collab">Share. Learn. Collaborate.</span>
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </section>
  );
};

export default Hero;
