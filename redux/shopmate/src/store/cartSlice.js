import { createSlice } from "@reduxjs/toolkit"

//initally we need to create a cartSlice step 1
export const cartSlice = createSlice({
    name:"cart",   //step2  we need to initalise cartslice name inside the slice 
    initialState:{  // step3 we need to define the initial state of cartSlice
        cartList:[],
        total:0,
    },
    reducers:{  // step4 and also we need to define the reducer for performing the actions and the logics of particular events 
        add(state,action){
            const updatedCartList = state.cartList.concat(action.payload)
            const total= state.total+action.payload.price
            return {...state,cartList:updatedCartList,total:total}

        },
        remove(state,action){
             const removeCartList = state.cartList.filter(cartitem=>cartitem.id !== action.payload.id)
             const total = state.total-action.payload.price
             return{...state,cartList:removeCartList,total:total}
        }
    }
})

export const {add,remove}=cartSlice.actions  // and here i have export the reducer methods which we need to use
export const cartReducer = cartSlice.reducer  // here i have also define cartReducer 