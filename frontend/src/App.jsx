import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import BookCard from "./components/BookCard";
import AddBook from "./components/booksCrud/AddBook";
import EditBook from "./components/booksCrud/EditBook";
import ProtectRoutes from "./components/ProtactedRoute";
import AdminLoginPage from "./Pages/adminLogin/AdminLoginPage";
import AdminDashBoard from "./Pages/adminDashBoard/AdminDashBoard";
import AdminDashboard from "./Pages/adminDashBoard/AdminDashBoard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route is login */}
          <Route path="/" element={<AdminLoginPage />} />

          {/* Other routes */}
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/user/dashboard" element={<BookCard />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/editbook/:id" element={<EditBook />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
