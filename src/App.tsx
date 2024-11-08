import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/sign-up"
import SignIn from "./pages/sign-in"
import Topbar from "./components/shared/top-bar"
import Footer from "./components/shared/footer"

function App() {

  return (
    <div className="w-screen min-h-svh flex justify-between flex-col max-w-7xl mx-auto">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
