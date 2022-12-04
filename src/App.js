import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";

 
const Shop = () => {
  return ( 
      <h1>I am the shop</h1>
   
    )};

 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
            <Route index={true} element={<Home />} />
            <Route path='shop' element={<Shop />} />
      
      </Route>
       
     
    </Routes>
  );
};

export default App;
