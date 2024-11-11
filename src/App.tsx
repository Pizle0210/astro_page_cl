import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/sign-up"
import SignIn from "./pages/sign-in"
import Topbar from "./components/shared/top-bar"
import Footer from "./components/shared/footer"
import Faq from "./pages/faq"

function App() {

  return (
    <div className="max-w-7xl min-h-svh flex justify-between flex-col mx-auto !scroll-smooth">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
