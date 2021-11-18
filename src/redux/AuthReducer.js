function AuthReducers(
    state={
        room_data:[],
        isloading:true,
        message:"",
        reservation_Created:[]
    },action
){
    switch(action.type){
        case "ROOM_LIST":{
            state={...state};
            state.room_data=action?.payload?.data;
            state.isloading=false;
         return state;
        }   
        case "CustomerCreateData" :{
            state={...state};
            state.isloading=false;
            state.message= action?.payload?.ResponseMessage
            return state
        }
        case "ReservationCreate" :{
            state={...state};
            state.reservation_Created={...action?.payload?.data};
            state.message = action?.payload?.ResponseMessage
            return state;
        }
        case "roomInfoCreate" :{
            state={...state};
            state.message = action?.payload?.ResponseMessage
            return state;
        }
        default: return state;
      
    }
  

}

export default AuthReducers