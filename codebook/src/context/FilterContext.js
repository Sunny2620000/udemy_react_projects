import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducers/ReducersIndex"
const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    rating: null,

}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState) //accepting a two parameters 1:filterReducer(which one have created for type or payload) 2:initialState we need to pass as second parameter

    const initialProductList = (products) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }
    const onlyInStock = (products) => {
        const getInStockProducts = state.onlyInStock ? products.filter(product => product.in_stock === true) : products
        return getInStockProducts
    }
    const bestSellerOnly = (products) => {
        const getBestSellerProducts = state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products
        return getBestSellerProducts
    }
    const sortBy = (products) => {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return products
    }

    const rating = (products) => {
        if (state.rating === "4STARABOVE") {
            return products.filter(product => product.rating >= 4)
        }
        if (state.rating === "3STARABOVE") {
            return products.filter(product => product.rating >= 3)
        }
        if (state.rating === "2STARABOVE") {
            return products.filter(product => product.rating >= 2)
        }
        if (state.rating === "1STARABOVE") {
            return products.filter(product => product.rating >= 1)
        }
        return products
    }

    const filterProductList = rating(sortBy(bestSellerOnly(onlyInStock(state.productList))))
    const value = {
        productList: filterProductList,
        initialProductList,
        state, dispatch

    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    return context
}