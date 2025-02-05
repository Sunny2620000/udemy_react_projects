export const CartReducer = (state,action)=>{
    const {type,payload} = action

    switch(type){
        case"ADD_TO_CART":
        return {...state,cartList:payload.products,total:payload.total}
        case"REMOVE_TO_CART":
        return {...state,cartList:payload.products,total:payload.total}
        case"UPDATE_PRICE":
        return
        case"CLEAR_CART":
        return {...state,cartList:payload.products,total:payload.total}
        default:
            throw new Error("no case found")


    }

}