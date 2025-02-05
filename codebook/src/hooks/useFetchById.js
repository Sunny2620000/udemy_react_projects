import { useEffect,useState } from "react";
import {API_BASE_URL} from '../config'

const useFetchById =(id)=>{
    const [productDetails,setProductDetails] = useState([])
    useEffect(()=>{
        const fetchDataById = async()=>{
            const response = await fetch(`${API_BASE_URL}products/${id}`)
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setProductDetails(data || [])

        }
        fetchDataById()
    },[id])
return {productDetails}
}

export default useFetchById