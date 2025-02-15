import { createContext,useContext, useReducer } from "react"
import { CartReducer } from "../reducers/ReducersIndex"
const cartInitialState = {
    cartList:[],
    total:0,
}

export const CartContext = createContext(cartInitialState) 



export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(CartReducer,cartInitialState)

    const addToCart = (product)=>{
       const  updatedCartList = state.cartList.concat(product)
       const updatedTotal = state.total+product.price
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatedCartList,
                total:updatedTotal
            },
        })
    }

    const removeToCart=(product)=>{
        const removefromCartList = state.cartList.filter(item=>item.id !== product.id)
        const updatedTotal = state.total-product.price
        dispatch({
            type:"REMOVE_TO_CART",
            payload:{
                products:removefromCartList,
                total: updatedTotal
            }
        })
    }
    const clearCart=()=>{
        dispatch({
            type:"CLEAR_CART",
            payload:{
                products:[],
                total:0
            }
        })
    }
    const value={
        cartList:state.cartList,
        total:state.total,
        addToCart,
        removeToCart,
        clearCart
    }
        return(
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        )
} 

export const useCart =()=>{
    const context = useContext(CartContext)
    return context
}
