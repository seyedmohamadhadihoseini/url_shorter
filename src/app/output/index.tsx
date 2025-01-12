import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { toast } from "@/hooks/use-toast"

export default function OutputPart() {
    const outputPath = useSelector((rootState: RootState) => rootState.url.output);
    const inputUrl = useSelector((rootState: RootState) => rootState.url.input);
    const [display, setDisplay] = useState("");
    useEffect(() => {
        if (outputPath) {
            setDisplay(`${window.location.origin}/${outputPath}`);
        }
    }, [outputPath])
    useEffect(()=>{
        setDisplay("");
    },[inputUrl])
    return <div className="section-part">
        <input type="text" disabled value={display} className="bg-gray-200"/>
        <button 
        className="bg-green-600"
        onClick={() => {
            navigator.clipboard.writeText(display);
            toast({
                title: "successfull",
                description: "successfully copied to your clipboard",
                duration: 1000,
                className: "bg-red",
                color: "white"
            })
        }}>copy</button>
    </div>
}