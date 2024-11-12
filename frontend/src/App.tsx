import { useEffect, useState } from 'react' 
import NotFound from './components/NotFound'
import Home from './Pages/Home'

function App() {
  const [page,setPage] = useState(window.location.hash.split("#")[1] || "/home")
  useEffect(()=>{
    window.addEventListener('hashchange', ()=>{
      setPage(window.location.hash.split("#")[1])
    })
  })
  switch (page){
    case "/home":
      return <Home />
    default:
      return <NotFound />
  }
}

export default App
