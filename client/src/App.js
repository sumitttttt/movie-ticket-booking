import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>

     {/* <h1>MT-BW</h1> */}

    <BrowserRouter>
    <Routes>  
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
