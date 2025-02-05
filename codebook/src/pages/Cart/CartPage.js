import { useCart } from '../../context/ContextIndex'
import {CartEmpty, CartList} from '../index'
const CartPage=()=>{
   const {cartList} = useCart()
return(
    <main>
        {cartList.length ?  <CartList/> : <CartEmpty/>}
    </main>
)
}

export default CartPage