import { toast } from "react-toastify"
export const login = async(authDetail)=>{
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authDetail)
    }
    const response = await fetch("http://localhost:8080/api/auth/login",requestOptions)
    if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "SomeThing Went Wrong")
    }
    const data = await response.json();
    return data
}

export const register =async(authDetail)=>{
    const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authDetail)
    });
    
    if (!response.ok) {
        const errorData = await response.clone().json();
        toast.error(errorData.message || "SomeThing Went Wrong")
    }
    const data = await response.clone().json();

    return data

}

export const logout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("name")
}

export const LoginAsGuest= async(authDetail)=>{
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authDetail)
    }
    const response = await fetch("http://localhost:8080/api/auth/login",requestOptions)
    if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "SomeThing Went Wrong")
    }
    const data = await response.json();
    return data
}