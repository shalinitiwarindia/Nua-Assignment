import {
  createContext,
  useContext,
} from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

const CartContext = createContext()

export function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useLocalStorage('cart', [])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}