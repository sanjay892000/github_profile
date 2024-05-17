import './App.css';
import Home from './components/Home';
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
            </Routes>
          </div>
        </Router>
  );
}

export default App;
