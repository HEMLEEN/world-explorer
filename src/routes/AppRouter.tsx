import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import '../App.css'
import ReactTypescript from '../pages/frontend/ReactTypescript'
import Frontend from '../pages/Services/Frontend'
import Backend from '../pages/Services/Backend'
import ReactjsConcepts from '../pages/frontend/ReactjsConcepts'
import NextjsConcepts from '../pages/frontend/NextjsConcepts'
import JavascriptConcepts from '../pages/frontend/JavascriptConcepts'
import CoreConcepts from '../pages/frontend/CoreConcepts'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/frontend' element={<Frontend/>} ></Route>
        <Route path='/backend' element={<Backend/>} ></Route>
        <Route path='/reactjs' element={<ReactjsConcepts/>} ></Route>
        <Route path='/typescript' element={<ReactTypescript/>} ></Route>
        <Route path='/nextjs' element={<NextjsConcepts/>} ></Route>
        <Route path='/javascript' element={<JavascriptConcepts/>} ></Route>
        <Route path='/core-concepts' element={<CoreConcepts/>} ></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
