import { useState } from "react"
import SetNewUrl from "./server";
import { useDispatch } from "react-redux";
import { ChangeInput, ChangeOutput } from "@/features/url/urlSlice";
import { toast } from "@/hooks/use-toast";


export default function InputPart() {
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();
    return <div className="section-part">
        <input type="text" placeholder="enter url" value={url} onChange={e => {
            setUrl(e.target.value);
            dispatch(ChangeInput(url))
        }} />
        <button 
        className="bg-blue-400"
        onClick={() => {
            SetNewUrl(url).then(newPathUrl => {
                if(newPathUrl){
                    dispatch(ChangeOutput(newPathUrl))
                }else{
                    toast({
                        title:"url error",
                        description:"url is not valid",
                        variant:"destructive",
                        duration:1000
                    })
                }
            })
        }}> create url</button>
    </div>
}