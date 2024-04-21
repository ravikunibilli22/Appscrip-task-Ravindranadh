import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, imageUrl} = productData

  return (
    <li className="product-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
    </li>
  )
}
export default ProductCard