import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignInn from "./SignInn"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/sign-in" element={<SignInn/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/profile" element={<Profile/>} />
  </Routes>

  </BrowserRouter>
}
