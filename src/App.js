import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Admin from "./pages/Admin";
import AdminCategory from "./pages/AdminCategory";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import PasswordRecovery from "./pages/PasswordRecovery";
import ProductDetail from "./pages/ProductDetail";
import BadRoute from "./pages/BadRoute";

// files
import { useAuthContext } from "./hooks/useAuthContext";
import "./styles/main.scss";

export default function App() {
  // properties
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {!user && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/category/:id" element={<Categories />} />
            {/* <Route path="menu/category/:title" element={<Categories />} /> */}
            <Route path="menu/category/:id/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="admin" />}
            />
            <Route
              path="login/admin"
              element={user ? <Admin /> : <Navigate to="/" />}
            />
            <Route
              // path="login/admin/category/:title"
              path="login/admin/category/:id"
              element={<AdminCategory />}
            />
            <Route
              path="login/password_recovery"
              element={<PasswordRecovery />}
            />
            <Route path="*" element={<BadRoute />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}