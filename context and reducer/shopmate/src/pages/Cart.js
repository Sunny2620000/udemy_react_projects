import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CardContext";
export const Cart = () => {
  useTitle("Cart");
  const {cardList,total} = useCart()
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cardList.length}/${total}</h1>
        { cardList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
