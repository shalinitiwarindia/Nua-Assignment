import { useState } from 'react'

import styles from './ProductTabs.module.scss'

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] =
    useState('description')

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabButtons}>
        <button
          onClick={() =>
            setActiveTab('description')
          }
          className={
            activeTab === 'description'
              ? styles.active
              : ''
          }
        >
          Description
        </button>

        <button
          onClick={() =>
            setActiveTab('specifications')
          }
          className={
            activeTab === 'specifications'
              ? styles.active
              : ''
          }
        >
          Specifications
        </button>

        <button
          onClick={() =>
            setActiveTab('reviews')
          }
          className={
            activeTab === 'reviews'
              ? styles.active
              : ''
          }
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'description' && (
          <div>
            <p>{product.description}</p>
          </div>
        )}

        {activeTab ===
          'specifications' && (
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>Outdoor Pro</td>
              </tr>

              <tr>
                <td>Category</td>
                <td>{product.category}</td>
              </tr>

              <tr>
                <td>Material</td>
                <td>Premium Fabric</td>
              </tr>

              <tr>
                <td>Shipping</td>
                <td>Free Worldwide</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === 'reviews' && (
          <div className={styles.reviews}>
            <div className={styles.reviewCard}>
              <h4>Rahul</h4>

              <p>
                Excellent quality and very
                comfortable.
              </p>
            </div>

            <div className={styles.reviewCard}>
              <h4>Aman</h4>

              <p>
                Delivery was fast and product
                feels premium.
              </p>
            </div>

            <div className={styles.reviewCard}>
              <h4>Priya</h4>

              <p>
                Great fit and amazing overall
                experience.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductTabs