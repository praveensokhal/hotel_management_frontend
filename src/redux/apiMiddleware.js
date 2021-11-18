import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function allRoomsList(){
    return function (dispatch){
        axios({
            method:"get",
            url:process.env.REACT_APP_BASE_API_URL+"/room-info/all",
          }).then((res)=>{
                dispatch({
                    type:"ROOM_LIST",
                    payload:{
                        data:res.data.data
                    }
                })
          },error=>{
             toast.warning(error)
           } )
    }
}
export function CustomerCreate(data){
    return function(dispatch){
        axios({
            method:"post",
            url:process.env.REACT_APP_BASE_API_URL+"/user/create",
           data:data
          }).then((res)=>{
              dispatch({
                  type:"CustomerCreateData",
                  payload:{
                      data:res.data.data,
                      ResponseMessage:res.data?.ResponseMessage
                  }
              })
            toast.warning(res.data.ResponseMessage)
          },error=>{console.error();})
    }
}
export function ReservationCreate(data){
    return function(dispatch){
        console.log(data)
        axios({
            method:"post",
            url:process.env.REACT_APP_BASE_API_URL+"/reservation/create",
           data:data
          }).then((res)=>{
              console.log(res.data.data)
            dispatch({
                type:"ReservationCreate",
                payload:{
                    data:res.data.data,
                    ResponseMessage:res.data?.ResponseMessage
                }
            })
            toast.warning(res.data.ResponseMessage)
            
          },error=>{console.error();})
    }
}
export function RoomInfoCreateMiddleWare(data){
    return function(dispatch){
        axios({
            method:"post",
            url:process.env.REACT_APP_BASE_API_URL+"/room-info/create",
           data:data
          }).then((res)=>{
              dispatch({
                  type:"roomInfoCreate",
                  payload:{
                      data:res.data.data,
                      ResponseMessage:res.data?.ResponseMessage
                  }
              })
            toast.warning(res.data.ResponseMessage)
            if(res.data?.ResponseMessage=="Success"){
                window.location.reload(); 
            }
          },error=>{console.error();})
    }
}