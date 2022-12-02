
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './STYLES/styles.css'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'
import LoadingScreen from './components/LoadingScreen'
import { Container } from 'react-bootstrap'
import ProtectedRoutes from './components/ProtectedRoutes'
import ByArry from './components/ByArry'

function App() {


  const isLoading = useSelector(state => state.isLoadingSlice)


  return (
    <HashRouter>
      <NavBar />

      {isLoading && <LoadingScreen />} {/* si es true muestro la pantalla de carga, sino la saco */}
      <Container className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productDetails/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/purchases' element={<Purchases />} />
          </Route>

        </Routes>
      </Container>
      <ByArry/>
    </HashRouter>

  )
}

export default App
