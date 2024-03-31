import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Details from './components/pages/Details'

function App () {
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
