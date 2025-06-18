import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'

function App() {
  return (
      <Routes>
        <Route path='/registro' element={<Register />} />
      </Routes>
  )
}

export default App
