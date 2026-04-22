// this file handles routing between pages

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all pages
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Admin from "./Admin.jsx";
import Police from "./Police.jsx";
import User from "./User.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* public routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* protected routes with role check */}
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        } />

        <Route path="/police" element={
          <ProtectedRoute role="police">
            <Police />
          </ProtectedRoute>
        } />

        <Route path="/user" element={
          <ProtectedRoute role="user">
            <User />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;