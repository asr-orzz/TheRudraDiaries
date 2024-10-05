import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import articles from "./data/articles.json";
import poetry from "./data/poetry.json";
import stories from "./data/stories.json";
import "./App.css"; // Global styles

function App() {
  const [array, setArray] = useState(poetry);
  const [currentCategory, setCurrentCategory] = useState('Poetry'); // Track current category
  const [darkMode, setDarkMode] = useState(false); // Theme state

  const handlePoetry = () => {
    setArray(poetry);
    setCurrentCategory('Poetry');
  };

  const handleStory = () => {
    setArray(stories);
    setCurrentCategory('Stories');
  };

  const handleArticles = () => {
    setArray(articles);
    setCurrentCategory('कविता');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <Navbar 
        Poetry={handlePoetry} 
        Story={handleStory} 
        Articles={handleArticles} 
        currentCategory={currentCategory} // Pass the current category
        toggleTheme={toggleTheme} // Pass theme toggle function
        darkMode={darkMode} // Pass current theme state
      />
      <h5>~ Weaving the darkness into words</h5>
      <Routes>
        <Route path="/" element={<Product product={array} />} />
        <Route path="/product/:id" element={<ProductDetails productList={array} />} />
      </Routes>
    </Router>
  );
}

export default App;
