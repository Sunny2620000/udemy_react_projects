import {DashboardCard, DashboardEmpty} from "../index"
import { useCart } from "../../context/ContextIndex"
const Dashboard = ()=>{
const {cartList} = useCart() 
return(
    <main>
    <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
    </section>
    <section>
        {cartList.length > 0 && cartList.map((order)=>{
            return(
            <DashboardCard key={order.id} order={order}/>
        )})}
    </section>
    <section>
    { !cartList.length && <DashboardEmpty/>}
    </section>
  </main>
  )
}

export default Dashboard