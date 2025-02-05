import { Routes, Route } from "react-router-dom";
import { Home, ProductDetails, Products,Login,Register,CartPage,OrderSummary, Dashboard, PageNotFound } from "../pages/index";
import { ProtectedRoutes } from "./ProtectedRoutes";
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products/>} />
                <Route path="products/:id" element={<ProductDetails/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>}/>
                <Route path="cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes>} />
                <Route path="order-summary" element={<ProtectedRoutes><OrderSummary /></ProtectedRoutes>} />
                <Route path="dashboard" element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
                <Route path="*" element={<PageNotFound/>}/>


            </Routes>
        </>
    )
}

export default AllRoutes