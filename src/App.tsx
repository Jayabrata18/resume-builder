import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import SignIn from "./auth/Sign-in"
import Header from "./components/custom/Header"

function App() {
    const { user, isLoaded, isSignedIn } = useUser()
    if (!isSignedIn && isLoaded) {
        return <Navigate to={"/auth/signin"} />
    }
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App

