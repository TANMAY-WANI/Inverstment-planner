import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PgOne from './Pages/PgOne'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PgOne />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App