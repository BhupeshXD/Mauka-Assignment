import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import GetAccess from './components/GetAccess/GetAccess'
function App() {
  

  return (
    <>
 <Routes> 
  <Route path='/' element={<Home/>} />
  <Route path ='/getaccess' element={<GetAccess/>}/>
 </Routes>
    </>
  )
}

export default App
