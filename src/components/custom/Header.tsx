import React from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { UserButton, useUser } from "@clerk/clerk-react"
import { Divide } from "lucide-react"

const Header = () => {
    const { user, isSignedIn } = useUser()
    return (
        <div className="p-3 px-5 flex justify-between shadow-md ">
            <img
                src="/logo.svg"
                width={55}
                height={55}
                alt="logo"
            />
            {isSignedIn ? (
                <div className="flex gap-2 items-center">
                    <Link to={"/dashboard"}>
                        <Button className="bg-blue-600 hover:bg-blue-400">Dasboard</Button>
                    </Link>
                    <UserButton />
                </div>
            ) : (
                <Link to={"/auth/signin"}>
                    <Button className="bg-blue-600 hover:bg-blue-400">Get started</Button>
                </Link>
            )}
        </div>
    )
}

export default Header

