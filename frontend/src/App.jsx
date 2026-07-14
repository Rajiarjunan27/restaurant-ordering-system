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
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderTracking from "./pages/OrderTracking";


function AppContent() {
  const location = useLocation();

  // Hide Navbar on these pages
  const hideNavbar =
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname === "/register" ||
  location.pathname === "/menu" ||
   location.pathname === "/FoodDetails" ||
  location.pathname === "/cart" ||
  location.pathname === "/checkout" ||
  location.pathname === "/order-success" ||
  location.pathname === "/tracking" ||
  location.pathname.startsWith("/food");

  return (
    <>
     {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/Cart" element={<Cart />} />
        
        <Route path="/checkout" element={<Checkout />} /> 

        <Route path="/order-success" element={<OrderSuccess />}/>

        <Route path="/tracking" element={<OrderTracking />}/>
        
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