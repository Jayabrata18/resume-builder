import { Notebook } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const ResumeCardItem = ({ resume }: { resume: any }) => {
    return (
        <Link to={'/dashboard/resume'+resume.resumeId+"/edit"} className="">
            <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border border-purple-600 rounded-lg hover:scale-105 transition-all hover:shadow-md">
                <Notebook />
            </div>
            <h2 className="text-2xl text-center font-bold">{resume.title}</h2>
        </Link>
    )
}

export default ResumeCardItem
