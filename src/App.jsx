import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import UserInfo from './pages/UserInfo';
import Restaurants from './pages/Restaurants';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <h1>FAST FOOD REACT</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espace-administration" element={<Admin />}>
        </Route>
        <Route path="/mes-informations-personnelles" element={<UserInfo />} />
        <Route path="/nos-restaurants" element={<Restaurants />}>
          <Route path=":id" element={<RestaurantDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
