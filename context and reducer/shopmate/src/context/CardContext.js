import { createContext, useContext, useReducer } from "react"
import cartReducer from '../reducer/cartReducer'
// initially i have define a state and their value before creating context step1
const initialState={
    cardList:[],
    total:0,
}
// after initally state then we can create a context step 2
export const CardContext = createContext(initialState);

// wrapping a cartcontext into the provider
export const CardProvider = ({children})=>{
    //step 4 initallily the reducer in defening 

    const [state,dispatch] = useReducer(cartReducer,initialState)
    // after defining in cardRedducer payaload and type then we can defining the what we need to dispatch the inside the reducer  
    // here state managing a multiple states similarily dispatch method holdes and managing multiple methods
    const addToCart =(product)=>{
        const updateCart = state.cardList.concat(product)
        updateTotal(updateCart)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products :updateCart
            }
        })
    }

    const removeCart=(product)=>{
        const removeUpdateCart = state.cardList.filter(current=>current.id !==product.id)
        updateTotal(removeUpdateCart)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:removeUpdateCart
            }
        })
    }

    const updateTotal =(product)=>{
        let total=0;
        product.forEach(pro => {
            total = total+pro.price
        });
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total:total
            }
        })
    }
    const value = {
        total:state.total,
        cardList:state.cardList,
        addToCart,
        removeCart,
        updateTotal
    }
    return (
        <CardContext.Provider value={value}>
          {children}
        </CardContext.Provider>
    )
}

// here using the cardContext by using a useContext step 3
export const useCart =()=>{
    const context = useContext(CardContext)
    return context
}

