import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'



function App() {
  const routes =(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />     
      </Routes>
    </Router>
  )
  return (
    <>
      {routes}
    </>
  )
}

export default App