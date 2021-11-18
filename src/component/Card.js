
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { useParams } from "react-router";

let Card=(props)=>{
    var params = useParams(props)
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
        axios({
            method:"get",
            url:process.env.REACT_APP_BASE_API_URL+"/reservation/"+params,
        }).then((res)=>{
            console.log(params)
            // toast.warning(res.data.ResponseMessage)
            setLoading(false)
        },error=>{console.log(error);setLoading(false)})
    },Loading)
    return (
        
        <>
        <button>hi</button>
        </>
    )
}
export  default Card