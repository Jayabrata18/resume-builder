import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import SignIn from "./auth/Sign-in"

function App() {
    const { user, isLoaded, isSignedIn } = useUser()
    if (!isSignedIn && isLoaded) {
        return <Navigate to={"/auth/signin"} />
    }
    return (
        <>
            <Outlet />
        </>
    )
}

export default App

