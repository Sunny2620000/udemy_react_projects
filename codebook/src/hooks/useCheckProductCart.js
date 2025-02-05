import { useEffect,useState } from "react"
import {useCart} from '../context/ContextIndex'
export const useCheckProductCart = (item)=>{
    const [isInCart,setIsInCart] = useState(false)
    const {cartList} = useCart()
    useEffect(()=>{
        const checkProductInCart=  cartList.find(cartProduct => cartProduct.id === item.id)
        if(checkProductInCart){
             setIsInCart(true)
        }else{
         setIsInCart(false)
        }
    },[cartList,item.id])

    return {isInCart}

}
