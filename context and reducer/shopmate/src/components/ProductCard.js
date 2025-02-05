import { useEffect, useState } from "react";
import { useCart } from "../context/CardContext";
import "./ProductCard.css";
export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const {addToCart,removeCart,cardList} = useCart()
  const [isInCart,setIsinCart] = useState(false);
  useEffect(()=>{
    const productIsInCart = cardList.find(checkitem=>checkitem.id === id)
    if(productIsInCart){
      setIsinCart(true)
    }else{
      setIsinCart(false)
    }
  },[cardList,id])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ?(<button style={{backgroundColor:'#ac0d14'}} onClick={()=>removeCart(product)}>Remove</button>): (<button onClick={()=>addToCart(product)}>Add To Cart</button>)}
      </div>
    </div>
  )
}
