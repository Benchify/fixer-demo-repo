import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Multi-page App</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
      
      <footer className="footer">
        <p>React Router Demo &copy; 2023</p>
      </footer>
    </div>
  )
}

export default App