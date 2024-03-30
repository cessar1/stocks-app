import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Details from "./components/pages/Details"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:symbol" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App

//95480d2d4b0e4956b897e27e0cb3d0be key
