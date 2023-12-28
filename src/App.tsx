import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopLayot from './components/Layouts/TopLayot'
import { useAppSelector } from './redux/store'
import MainPage from './pages/MainPage'
import SearchingPage from './pages/SearchingPage'

function App() {
  const {theme} = useAppSelector((state) => state.slice) 
  
  return (
    <>
    <div className='body' data-theme={theme}> 
    <div className='main'>   
    <TopLayot/>  
    <div className='main__wapper'> 
    <Routes> 
        <Route path='/' element={<MainPage/>}/> 
        <Route path='/search/:params' element={<SearchingPage/>}/>
    </Routes>
    </div>
    </div>
    </div> 
    </>
  )
}

export default App
