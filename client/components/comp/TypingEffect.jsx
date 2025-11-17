import React, { useEffect, useState } from "react";

const TypingEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const word = words[wordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => { 
      if (!isDeleting) {
        if (text.length < word.length) {
          setText(word.slice(0, text.length + 1));
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1)); 
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length); 
        }
      }
    }, speed);
    
    return () => clearTimeout(timeout); 
  }, [
    text,
    wordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);
  
  return <div className="typing">{text}</div>;
};

export default TypingEffect;