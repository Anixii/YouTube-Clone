import './App.css'
import Header from './components/Header/Header'
import TopLayot from './components/Layouts/TopLayot'
import Video from './components/Video/Video'
import { useAppSelector } from './redux/store'

function App() {
  const {theme} = useAppSelector((state) => state.slice) 
  
  return (
    <>
    <div className='body' data-theme={theme}> 
    <div className='main'> 
       <TopLayot/> 
       <Video/>
    </div>
    </div> 
    </>
  )
}

export default App
