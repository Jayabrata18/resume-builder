import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./home/Home.tsx"
import Dashboard from "./dashboard/Dashboard.tsx"
import { ClerkProvider } from "@clerk/clerk-react"
import Signin from "./auth/Sign-in.tsx"
import ResumeEdit from "./dashboard/resume/[resumeId]/edit/index.tsx"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const route = createBrowserRouter([
    { path: "/auth/signin", element: <Signin /> },
    {
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                // path: '/dashboard/resume/:resumeId/edit',
                path:"/resume23",
                element: <ResumeEdit />
            }
        ]
    },
    {
        path: "/",
        element: <Home />
    }
])
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/">
            <RouterProvider router={route} />
        </ClerkProvider>
    </StrictMode>
)

