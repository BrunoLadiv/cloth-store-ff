import "./App.css";

function App() {
  const categories = [
    {
      title: 'hats',
      id: 'hats'
      
    }
  ]
  return (
    
      <div className="categories-container">
      {categories.map(({title}) => (
          <div className="category-container">
          <h2>hats</h2>
          <p>Shop Now</p>
        </div>
        ))}
        
      </div>
      
    
  );
}

export default App;
