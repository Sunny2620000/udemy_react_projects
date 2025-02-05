import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const products = useSelector(state=>state.cartState.cartList)
  const total = useSelector(state=>state.cartState.total)
  // console.log("products",products,"typeof:",typeof(products))

  const productss = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  ]

  // console.log("typeof 22222:",typeof(productss))

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}/${total}</h1>
        { products.map((product,index) => (
          <CartCard key={index} product={product} />
        )) }        
      </section>
    </main>
  )
}
