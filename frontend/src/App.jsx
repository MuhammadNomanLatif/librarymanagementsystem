import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BookManager from "./components/BookManager";
import BookCard from "./components/BookCard";
import AddBook from "./components/booksCrud/AddBook";
import EditBook from "./components/booksCrud/EditBook";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route is login */}
        <Route path="/" element={<Login />} />

        {/* Other routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<BookManager />} />
        <Route path="/user/dashboard" element={<BookCard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
