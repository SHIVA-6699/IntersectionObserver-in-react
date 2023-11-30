import React, { useEffect } from "react";
import CardComponent from "./componets/comp"; // Adjust the path if needed
import "./App.css";
import './style.css'

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         
            entry.target.classList.add("show");
 
          
        });
      },
      {
        threshold: 0.4,
      }
    );

    document.querySelectorAll(".animated-element").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="card-container">
      {[...Array(10)].map((_, index) => (
        <CardComponent key={index} />
      ))}
      <h1 className="animated-element">SHIVA KRISHNA</h1>
      <h1 className="animated-element">SHIVA KRISHNA</h1>
      <h1 className="animated-element">SHIVA KRISHNA</h1>
      <h1 className="animated-element">SHIVA KRISHNA</h1>
      <h1 className="animated-element">SHIVA KRISHNA</h1>
    </div>
  );
};

export default App;
