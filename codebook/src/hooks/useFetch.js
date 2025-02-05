import { useEffect } from "react";
import {API_BASE_URL} from '../config'
import { useFilter } from '../context/FilterContext'
const useFetch = (endpoint,searchParam)=>{
const {productList,initialProductList} = useFilter()
 useEffect(()=>{
    const fetchData = async()=>{
        try{
            const response = await fetch(`${API_BASE_URL}${endpoint}?q=${searchParam || ""}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json()
            initialProductList(result)
            
        }catch(error){
            console.log("error",error)
        }
    }
    fetchData()

 },[searchParam])
 return {productList}
}

export default useFetch