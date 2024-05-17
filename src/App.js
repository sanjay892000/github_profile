import './App.css';
import Home from './components/Home';
import Repository from './components/Repository';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/repository' element={<Repository/>}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
