import { useEffect, useState } from 'react'

import { fetchProduct } from '../api/products'

import ImageGallery from '../components/gallery/ImageGallery'
import ProductInfo from '../components/product/ProductInfo'
import ProductTabs from '../components/product/ProductTabs'

import variants from '../data/variants'

import styles from './ProductPage.module.scss'

function ProductPage() {
  const params = new URLSearchParams(
    window.location.search
  )

  const initialColor =
    params.get('color') || 'Black'

  const initialSize =
    params.get('size') || 'S'

  const [product, setProduct] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  const [selectedColor, setSelectedColor] =
    useState(initialColor)

  const [selectedSize, setSelectedSize] =
    useState(initialSize)

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProduct()

        const images = [
          data.image,
          data.image,
          data.image,
          data.image,
        ]

        setProduct({
          ...data,
          images,
        })
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [])

  useEffect(() => {
    const url = new URL(window.location)

    url.searchParams.set(
      'color',
      selectedColor
    )

    url.searchParams.set(
      'size',
      selectedSize
    )

    window.history.replaceState(
      {},
      '',
      url
    )
  }, [selectedColor, selectedSize])

  if (loading) {
    return <h2>Loading product...</h2>
  }

  if (error) {
    return <h2>Something went wrong</h2>
  }

  return (
    <>
      <div className={styles.container}>
        <ImageGallery
          images={product.images}
          title={product.title}
        />

        <ProductInfo
          product={product}
          variants={variants}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
        />
      </div>

      <div
        style={{
          padding: '40px',
        }}
      >
        <ProductTabs product={product} />
      </div>
    </>
  )
}

export default ProductPage