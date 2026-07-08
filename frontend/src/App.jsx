import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FoodDetails from "./pages/FoodDetails";

function AppContent() {
  const location = useLocation();

  // Hide Navbar on these pages
  const hideNavbar = ["/", "/login", "/register"];

  return (
    <>
      {!hideNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;