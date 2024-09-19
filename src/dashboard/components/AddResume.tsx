import { Loader, Loader2, PlusSquareIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUser } from "@clerk/clerk-react"
import { createResume } from "@/service/Api"
import { useNavigate } from "react-router-dom"
const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState("")
    const { user } = useUser()
    const uuid = uuidv4()
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()

    const handleCreate = async () => {
        setLoading(true)
        const data = {
            title: resumeTitle,
            resumeId: uuid,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            username: user?.fullName
        }
        console.log(data)
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay
        setLoading(false)
    }
    //     await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay
    //     const result = await createResume(data).then((res) => {
    //         console.log(res)
    //         if (res) {
    //             setLoading(false);
    //           navigation('/dashboard/resume/'+uuid+'/edit');
    //         }
    //     })
    // }

    return (
        <div>
            <div
                className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md hover:bg-blue-100 cursor-pointer border-dashed"
                onClick={() => setOpenDialog(true)}>
                <PlusSquareIcon />
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <p className="text-sm">Add a title for your resume</p>
                        <Input
                            className="my-5"
                            placeholder="Ex.Full Stack Developer"
                            onChange={(e) => setResumeTitle(e.target.value)}
                        />
                        <div className="flex justify-end gap-5">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setOpenDialog(false)
                                }}>
                                close
                            </Button>
                            <Button
                                disabled={!resumeTitle || loading}
                                onClick={() => handleCreate()}
                                className="bg-blue-700">
                                {loading ? (
                                    <Loader
                                        className="animate-spin"
                                        size={20}
                                    />
                                ) : (
                                    "Create"
                                )}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )

  
}

export default AddResume

