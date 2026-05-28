import { useState } from 'react'

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi'

import CartDrawer from '../cart/CartDrawer'

import { useCart } from '../../context/CartContext'

import styles from './Header.module.scss'

function Header() {
  const { cart } = useCart()

  const [isCartOpen, setIsCartOpen] =
    useState(false)

  return (
    <>
      <div className={styles.topBar}>
        Get FLAT 50% off + FREE shipping
        on your first purchase
      </div>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            NUA Outdoor
          </div>

          <nav className={styles.nav}>
            <a href="#">Shop All Products</a>

            <a href="#">
              Outdoor Gear
            </a>

            <a href="#">
              New Arrivals
            </a>

            <a href="#">
              Collections
            </a>

            <a href="#">About</a>
          </nav>

          <div className={styles.rightSection}>
            <FiSearch />

            <FiUser />

            <div
              className={styles.cart}
              onClick={() =>
                setIsCartOpen(true)
              }
            >
              <FiShoppingCart />

              <span className={styles.badge}>
                {cart.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
        cart={cart}
      />
    </>
  )
}

export default Header