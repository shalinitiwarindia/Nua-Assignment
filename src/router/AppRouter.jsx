import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter