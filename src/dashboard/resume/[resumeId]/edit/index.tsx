import  { useEffect, useState } from "react"
import React, { createContext, Dispatch, SetStateAction } from "react"
import { useParams } from "react-router-dom"
import FormSection from "../../components/FormSection"
import ResumePreview from "../../components/ResumePreview"
import { ResumeContextInfo } from "../../context/ResumeContextInfo"
import dummy from "../../../../data/dummy"



const ResumeEdit = () => {
    const params = useParams()
    const [resumeinfo, setResumeinfo] = useState(dummy as any)
    useEffect(() => {
        console.log(params.resumeId)
    }, [])
    return (
        <ResumeContextInfo.Provider value={{ resumeinfo, setResumeinfo }}>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                <FormSection />
                <ResumePreview />
            </div>
        </ResumeContextInfo.Provider>
    )
}
export default ResumeEdit



