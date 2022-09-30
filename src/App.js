import { BrowserRouter, Routes, Route } from 'react-router-dom'
import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import Nav from './partials/Nav'
import gameOfThrones from './gameOfThrones'

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/houses' element={<Houses houses={gameOfThrones} />} />
      <Route path='/houses/:id' element={<House houses={gameOfThrones}/>} />
      <Route path='/houses/:houseId/members/:memberId' element={<Member houses={gameOfThrones} />} />      
    </Routes>
  </BrowserRouter>
  )
}