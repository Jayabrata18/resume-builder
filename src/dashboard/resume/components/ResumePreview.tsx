import React, { useContext } from 'react'
import { ResumeContextInfo } from '../context/ResumeContextInfo'
import PersonalDetailspreview from './preview/PersonalDetailspreview'

const ResumePreview = () => {
    const resumeinfo = useContext(ResumeContextInfo)
  return (
    <div>
        <PersonalDetailspreview resumeinfo={resumeinfo} />
    

        
    </div>
  )
}

export default ResumePreview