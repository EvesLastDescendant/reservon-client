import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "@/routes/home.jsx";
import {CustomerLogin} from "@/auth/components/customer-login.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              {/* public routes */}
              <Route path={'/'} element={<Home />} />
              <Route path={'customer/login'} element={<CustomerLogin />} />
              <Route path={'customer/signup'} element={<div>Signup</div>} />
              <Route path={"*"} element={<div>Not found</div>} />

              {/* redirects for logged-in users trying to access login/signup pages */}

              {/* protected routes */}
          </Routes>
      </BrowserRouter>
  )
}

export default App
