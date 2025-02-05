import { useLocation } from 'react-router-dom'
import {OrderSuccess,OrderFails} from '../index'

const OrderSummary = ()=>{
    //here i am retrieving the navigator data by using useLocation method
const location = useLocation()
 // Access the passed data via location.state
 const { status,data } = location.state || false;

// console.log("status",status)

return(
    <main>
        {status ? <OrderSuccess data={data}/>:<OrderFails/>}
    </main>
)
}

export default OrderSummary