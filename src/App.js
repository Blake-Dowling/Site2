import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>

        <div className="main-div">
          <div className="header">
            <div className="nav">
  
            </div>
  
          </div>
          <div className="squares-container">
            
          </div>
        </div>
      </div>
  );
}

export default App;
