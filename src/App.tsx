import './App.css'
import Header from './components/Header/Header'
import { useAppSelector } from './redux/store'

function App() {
  const {theme} = useAppSelector((state) => state.slice) 
  
  return (
    <>
    <div className='body' data-theme={theme}> 
    <div className='main'> 
       <Header/>
    </div>
    </div> 
    </>
  )
}

export default App
