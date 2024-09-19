


//create resume
export async function createResume(data: any){
    try {
        const response = await fetch('http://localhost:3000/api/resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        console.log("resume created:", result);
    } catch (error) {
        console.error("Failed to create resume:", error);
        return { success: false, message: (error as Error).message };
    }
}

//get resume
// need to add user id to get only his 
export async function getResume(email: string){
    try {
        const response = await fetch(`http://localhost:3000/api/resume/`);
        //need to add 
        // /user-resume?filters[userEmail][$eq]='+userEmail'
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        console.log("resume fetched:", result);
    } catch (error) {
        console.error("Failed to fetch resume:", error);
        return { success: false, message: (error as Error).message };
    }
}

