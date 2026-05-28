import { useMemo, useState } from 'react'

import { addToCartApi } from '../../api/cart'

import { useCart } from '../../context/CartContext'

import styles from './ProductInfo.module.scss'

function ProductInfo({
  product,
  variants,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
}) {
  const [quantity, setQuantity] =
    useState(1)

  const [cartLoading, setCartLoading] =
    useState(false)

  const [cartError, setCartError] =
    useState('')

  const { cart, setCart } = useCart()

  const colors = ['Black', 'Green']

  const sizes = ['S', 'M', 'L']

  const selectedVariant = useMemo(() => {
    return variants.find(
      (variant) =>
        variant.color === selectedColor &&
        variant.size === selectedSize
    )
  }, [variants, selectedColor, selectedSize])

  function getVariant(size) {
    return variants.find(
      (variant) =>
        variant.color === selectedColor &&
        variant.size === size
    )
  }

  function increaseQuantity() {
    if (quantity < selectedVariant.stock) {
      setQuantity(quantity + 1)
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  async function handleAddToCart() {
    setCartError('')

    setCartLoading(true)

    const cartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
    }

    try {
      await addToCartApi(cartItem)

      setCart([...cart, cartItem])

      alert('Added to cart')
    } catch (error) {
      setCartError(
        'Failed to add item. Please try again.'
      )
    } finally {
      setCartLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.category}>
        {product.category}
      </p>

      <h1 className={styles.title}>
        {product.title}
      </h1>

      <h2 className={styles.price}>
        ${product.price}
      </h2>

      <p className={styles.description}>
        {product.description}
      </p>

      <hr />

      <h3
        className={styles.sectionTitle}
        style={{ marginTop: '28px' }}
      >
        Colors
      </h3>

      <div className={styles.colorRow}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() =>
              setSelectedColor(color)
            }
            className={`${styles.colorButton} ${
              selectedColor === color
                ? styles.active
                : ''
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>
        Sizes
      </h3>

      <div className={styles.sizeRow}>
        {sizes.map((size) => {
          const variant = getVariant(size)

          const stock = variant?.stock || 0

          return (
            <button
              key={size}
              disabled={stock === 0}
            onClick={() => {
  setSelectedSize(size)
  setQuantity(1)
}}
              className={`${styles.sizeButton} ${
                selectedSize === size
                  ? styles.active
                  : ''
              } ${
                stock === 0
                  ? styles.disabled
                  : ''
              }`}
            >
              <div>{size}</div>

              {stock > 0 && stock <= 2 && (
                <div
                  className={styles.stockText}
                >
                  Only {stock} left
                </div>
              )}

              {stock === 0 && (
                <div
                  className={styles.stockText}
                >
                  Sold Out
                </div>
              )}
            </button>
          )
        })}
      </div>

      <h3 className={styles.sectionTitle}>
        Quantity
      </h3>

      <div className={styles.quantityRow}>
        <button
          onClick={decreaseQuantity}
          className={styles.quantityButton}
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={increaseQuantity}
          className={styles.quantityButton}
        >
          +
        </button>
      </div>

      <button
        disabled={
          selectedVariant.stock === 0 ||
          cartLoading
        }
        onClick={handleAddToCart}
        className={`${styles.cartButton} ${
          selectedVariant.stock === 0
            ? styles.cartButtonDisabled
            : ''
        }`}
      >
        {cartLoading
          ? 'Adding...'
          : selectedVariant.stock === 0
          ? 'Sold Out'
          : 'Add To Cart'}
      </button>

      {cartError && (
        <p className={styles.error}>
          {cartError}
        </p>
      )}

      {selectedVariant.stock > 0 && (
        <p className={styles.delivery}>
          Delivery in 3-5 business days
        </p>
      )}
    </div>
  )
}

export default ProductInfo