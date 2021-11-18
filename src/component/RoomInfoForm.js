
import axios from "axios"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import { RoomInfoCreateMiddleWare } from "../redux/apiMiddleware"
import "./component.css"
let RoomInfoForm = (props)=>{


    const [room,setRooms] = useState([]);
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
      axios({
        method:"get",
        url:process.env.REACT_APP_BASE_API_URL+"/room/all",
      }).then((res)=>{
        console.log(res.data.data)
        setRooms(res.data.data)
        setLoading(false)
      },error=>{console.log("error");
          setLoading(false)})
          
    },[Loading])
    const [field , setField] = useState({
        roomType:"",
        roomSample:"",
        Description:"",
        formErrors:"",
        validForm:""
    })
    const onChangeInput = (e)=>{
        const name =e.target.name;
        const value=e.target.value;
        field[name] = value;
        setField({ ...field });
        // console.log({...field})
        validateField(e.target.name, e.target.value);
       
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        let  data = {
          roomType:field.roomType,
          roomSample:field.roomSample,
          description:field.Description
        }
        props.dispatch(RoomInfoCreateMiddleWare(data))
        
    }
    const validateField =(name,value)=>{
        let roomTypeValid = field.roomType;
        let roomSampleValid = field.roomSample;
        let DescriptionValid = field.Description;
        let formErrors = field.FormErrors;
        let validForm = field.validForm;
        switch (name){
            case "roomType":
                roomTypeValid = value.length>5;
                formErrors = roomTypeValid?"":"invalid";
                break;
                case "roomSample":
                roomSampleValid = value.length>5;
                formErrors = roomSampleValid?"":"invalid";
                break;
                case "Description":
                DescriptionValid = value.length>5;
                formErrors = DescriptionValid?"":"invalid";
                break;
                default :
                break;
        }
        setField({...field,
          formErrors:formErrors,
          DescriptionValid:DescriptionValid,
         roomTypeValid: roomTypeValid,
          roomSampleValid:roomSampleValid,
          validForm:DescriptionValid && roomTypeValid && roomSampleValid })
      
  
      }
    //   alert(JSON.stringify(room))
    return(
       <div className="row">
          <div className="col-md-2"> </div>
           <div className="col-md-8">
           <div className="mt-5 ">
            <div className="card " height="100px"> 
           <div className="card-title ml-5 mr-5 mt-5"> ROOM INFORMATIONS</div>
               <div className="card-body mt-4 row">
               <form onSubmit={onSubmitHandler}  className="form-horizontal style-form">
               <div class="form-group col-lg-6">
                                <label className="col-lg-2 control-label" for="exampleFormControlSelect2">roomType</label>
                                <select className="form-control col-lg-8 ml-3" id="exampleFormControlSelect2"  value={field.roomId} name="roomType" onChange={onChangeInput}>
                                  <option  >Please select the room</option>
                            {room.map((each,index)=>{
                                return( <option value={each._id}>{each.room} {each.roomSample}</option>)
                                    })}
                             </select>
                            </div>
                <div className="form-group col-lg-6">
                  <label className="col-lg-2 control-label">roomsample</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" name="roomSample"  value ={field.roomsample} onChange={onChangeInput} className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">Description</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" name="Description"  value ={field.description} onChange={onChangeInput}  className="form-control"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                  <button className="btn btn-primary" disabled={!field.validForm}>create</button>
                  </div>
                </div>
              </form>
    </div>
 </div>
</div> 
           </div>
       </div>
    )
}

RoomInfoForm = connect((state,props)=>{
    return{
      message : state.message
    }
  })(RoomInfoForm)
  export default withRouter(RoomInfoForm)