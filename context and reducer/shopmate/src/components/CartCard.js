import { useCart } from "../context/CardContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {name, price, image} = product;
  const {removeCart} = useCart()
  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>removeCart(product)}>Remove</button>
      </div>
  )
}
