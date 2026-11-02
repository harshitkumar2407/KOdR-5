import React, { useContext } from 'react'
import { MyStore } from '../context/ProductContext'

const ProductCard = ({ product,quantity }) => {
  const { category, description, image, price, rating, title } = product
  const {cart,setCart}=useContext(MyStore)

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--bg-card)] shadow-[0_8px_24px_rgb(var(--shadow)_/_5%)] [transition:background-color_0.5s_ease,color_0.5s_ease,border-color_0.5s_ease,box-shadow_0.5s_ease,transform_0.5s_ease] hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgb(var(--shadow)_/_11%)]">
      {/* IMAGE */}
      <div className="grid h-[230px] place-items-center bg-[var(--bg-muted)] p-6 transition-colors duration-500 max-[520px]:h-[210px]">
        <img className="h-[180px] w-[180px] max-h-full max-w-full object-contain" src={image} alt={title} />
      </div>
      {/* CONTANT */}
      <div className="flex flex-1 flex-col p-5">
        <span className="self-start rounded-full bg-[var(--bg-tag)] px-[10px] py-[6px] text-[0.7rem] font-bold capitalize text-[var(--text-pri)] transition-colors duration-500">
          {category}
        </span>
        <h2 className="mt-[14px] mb-2 line-clamp-2 overflow-hidden text-[1.05rem] leading-[1.4] font-bold text-[var(--text-sec)] transition-colors duration-500">
          {title}
        </h2>
        <p className="m-0 line-clamp-3 overflow-hidden text-[0.875rem] leading-[1.6] text-[var(--text-pri)] transition-colors duration-500">
          {description}
        </p>
        {/* PRICE & REVIEW */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xl font-[750] text-[var(--text-sec)] transition-colors duration-500">
            ${price.toFixed(2)}
          </span>
          <span className="whitespace-nowrap text-[0.875rem] font-bold text-[#76591c]" aria-label={`${rating.rate} out of 5 stars`}>
            <span className="text-[#e8a928]" aria-hidden="true">★</span> {rating.rate}
            <span className="ml-1 font-normal text-[var(--text-pri)] transition-colors duration-500">({rating.count})</span>
          </span>
        </div>
        <div >


          {
            quantity ? <div>
              <p>hello</p>
            </div>:
            <button 
            onClick={()=> {
              setCart((prev) => [...prev,{...product,quantity:1}])
              console.log(cart)
            } }
            className="rounded border-[1.5px] border-[var(--border)] bg-[var(--bg-pri)] px-[6px] py-[2px] font-[Arial,sans-serif] text-[13.3333px] text-[var(--text-pri)] transition-colors duration-500">
            Add to cart
          </button>
          }
        </div>
      </div>
    </article>
  )
}

export default ProductCard
