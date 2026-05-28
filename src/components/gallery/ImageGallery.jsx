import { useState } from 'react'

import styles from './ImageGallery.module.scss'

function ImageGallery({ images, title }) {
  const [activeImage, setActiveImage] =
    useState(images[0])

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <img
          src={activeImage}
          alt={title}
          className={styles.mainImage}
        />
      </div>

      <div className={styles.thumbnailRow}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='thumbnail'
            className={`${styles.thumbnail} ${
              activeImage === image
                ? styles.activeThumbnail
                : ''
            }`}
            onClick={() =>
              setActiveImage(image)
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery