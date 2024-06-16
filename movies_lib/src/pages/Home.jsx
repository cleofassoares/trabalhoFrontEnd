import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
  useEffect(() => {
    console.log("moviesURL:", moviesURL);
    console.log("apiKey:", apiKey);
  }, []);

  return <div>Home</div>  
};

export default Home;