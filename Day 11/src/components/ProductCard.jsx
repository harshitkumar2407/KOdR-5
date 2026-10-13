import React from 'react'

const ProductCard = ({ product }) => {
  const { category, description, image, price, rating, title } = product

  return (
    <article className="product-card">
      {/* IMAGE */}
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={title} />
      </div>
      {/* CONTANT */}
      <div className="product-card__content">
        <span className="product-card__category">{category}</span>
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__description">{description}</p>
      {/* PRICE & REVIEW */}
        <div className="product-card__footer">
          <span className="product-card__price">${price.toFixed(2)}</span>
          <span className="product-card__rating" aria-label={`${rating.rate} out of 5 stars`}>
            <span aria-hidden="true">★</span> {rating.rate}
            <span className="product-card__rating-count">({rating.count})</span>
          </span>
        </div>
        <button>Add to cart</button>
      </div>
    </article>
  )
}

export default ProductCard
