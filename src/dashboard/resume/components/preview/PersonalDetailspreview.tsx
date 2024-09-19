import React from "react"

const PersonalDetailspreview = ({ resumeinfo }: { resumeinfo: any }) => {
    return (
        <div>
            <h2>
                {resumeinfo?.firstname}
                {resumeinfo?.lastName}
            </h2>
        </div>
    )
}

export default PersonalDetailspreview
