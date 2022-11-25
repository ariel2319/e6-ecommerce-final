
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './STYLES/styles.css'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'
import LoadingScreen from './components/LoadingScreen'

function App() {


  const isLoading = useSelector(state => state.isLoadingSlice)


  return (
    <HashRouter>
      <NavBar />

      {isLoading && <LoadingScreen/>} {/* si es true muestro la pantalla de carga, sino la saco */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>

    </HashRouter>

  )
}

export default App
