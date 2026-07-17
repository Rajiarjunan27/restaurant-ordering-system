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
import ForgotPassword from "./pages/ForgotPassword";



import FoodDetails from "./pages/FoodDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderTracking from "./pages/OrderTracking";


import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Profile from "./pages/Profile";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Orders from "./admin/pages/Orders";
import OrderDetails from "./admin/pages/OrderDetails";
import Foods from "./admin/pages/Foods";
import Categories from "./admin/pages/Categories";
import Reports from "./admin/pages/Reports";
import Settings from "./admin/pages/Settings";

function AppContent() {
  const location = useLocation();

  // Hide Navbar on these pages
  const hideNavbar =
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname === "/register" ||
  location.pathname === "/forgot-password" ||
  location.pathname === "/home" ||
  location.pathname === "/menu" ||
  location.pathname === "/about" ||      // Add this
  location.pathname === "/contact" ||
   location.pathname === "/profile" ||    // Add this
   location.pathname === "/FoodDetails" ||
  location.pathname === "/cart" ||
  location.pathname === "/checkout" ||
  location.pathname === "/order-success" ||
  location.pathname === "/tracking" ||
  location.pathname === "/admin/login" ||
  location.pathname === "/admin/foods" ||
  location.pathname.startsWith("/admin")
  location.pathname.startsWith("/admin/orders") ||
  location.pathname.startsWith("/food");

  return (
    <>
     {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />      

        <Route path="/menu" element={<Menu />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/checkout" element={<Checkout />} /> 

        <Route path="/order-success" element={<OrderSuccess />}/>

        <Route path="/tracking" element={<OrderTracking />}/>
        
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/orders/:id" element={<OrderDetails />} />
        <Route path="/admin/foods" element={<Foods />}/>
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/reports" element={<Reports />} />

        <Route path="/admin/settings" element={<Settings />} /> 
     
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