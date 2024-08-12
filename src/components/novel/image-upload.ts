import { createImageUpload } from "novel/plugins";
import { toast } from "sonner";

const onUpload = async (file: File) => {
    
    const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
            "content-type": file.type || "application/octet-stream",
            "x-vercel-filename": file.name || "image.png",
        },
        body: file,
    });

    if (!response.ok) {
        return toast.error("Image could not be uploaded, please try again.")
    }

    const data = await response.json()
    
    return data?.url 
};
  

export const uploadFn = createImageUpload({
    onUpload,
    validateFn: (file) => {
        if (!file.type.includes("image/")) {
            toast.error("File type not supported.");
            return false;
        } else if (file.size / 1024 / 1024 > 20) {
            toast.error("File size too big (max 20MB).");
            return false;
        }
        return true;
    },
});

