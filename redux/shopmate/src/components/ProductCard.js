import { useDispatch,useSelector } from "react-redux";
import { add,remove} from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect,useState } from "react";
export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const dispatch = useDispatch()
  const [isInCart,setIsInCart] = useState(true)
  const carListProduct = useSelector(state=>state.cartState.cartList)
  useEffect(()=>{
      const productIsInCart = carListProduct.find(item=>item.id === id)
      if(productIsInCart){
        setIsInCart(true)
      }else{
        setIsInCart(false)
      }
  },[carListProduct,id]) 

  console.log("isincart",isInCart)
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {/* {isInCart ? (<button onClick={()=>dispatch(add(product))}>Add To Cart</button>) : (<button style={{backgroundColor:"#8e090f"}} onClick={()=>dispatch(remove(product))}>remove</button>)} */}
        {isInCart === true ? (<button onClick={()=>dispatch(add(product))}>Add To Cart</button>):(<button>remove</button>)}
      </div>
    </div>
  )
}

// why we use dispatch method here ? because without using dispatch method its does not getting trigger so that i have use useDispatch hook
