import styles from './CartDrawer.module.scss'

function CartDrawer({
  isOpen,
  onClose,
  cart = [],
}) {
  const safeCart = Array.isArray(cart)
    ? cart
    : []

  const total = safeCart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  )

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${
        isOpen ? styles.show : ''
      }`}
    >
      <div
        className={styles.drawer}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className={styles.header}>
          <h2>Your Cart</h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {safeCart.length === 0 ? (
          <p className={styles.empty}>
            Your cart is empty
          </p>
        ) : (
          <>
            <div className={styles.items}>
              {safeCart.map(
                (item, index) => (
                  <div
                    key={index}
                    className={styles.item}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div>
                      <h4>{item.title}</h4>

                      <p>
                        {item.color} /{' '}
                        {item.size}
                      </p>

                      <p>
                        Qty:{' '}
                        {item.quantity}
                      </p>

                      <strong>
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className={styles.footer}>
              <h3>
                Total: $
                {total.toFixed(2)}
              </h3>

              <button>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDrawer