import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import './stylesheets/alignments.css'
import './stylesheets/custom.css'
import './stylesheets/formelements.css'
import './stylesheets/sizes.css'
import './stylesheets/theme.css'

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
