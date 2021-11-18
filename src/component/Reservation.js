
import axios from "axios"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import { ReservationCreate } from "../redux/apiMiddleware"
import Navbar from "./Navbar"

let Reservation = (props)=>{

    const [field , setField] = useState({
        roomId:"",
        customerId:"",
        checkInDate:"",
        checkOutDate:"",
        formErrors:"",
        validForm:""
    })
    const [customer,setCustomers] = useState([]);
    const [room,setRooms] = useState([]);
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
      axios({
        method:"get",
        url:process.env.REACT_APP_BASE_API_URL+"/user/reservation-details",
      }).then((res)=>{
        console.log(res.data.data)
        setRooms(res.data.data.room)
        setCustomers(res.data.data.user)
        setLoading(false)
      },error=>{console.log("error");
          setLoading(false)})
          
    },[Loading])
  
    const onSubmitHandler=(e)=>{
      e.preventDefault();
       let data={
        customerId:field.customerId,
        roomId:field.roomId,
        checkIn:field.checkInDate,
        checkOut:field.checkOutDate
      }
     
      props.dispatch(ReservationCreate(data))
    
     if(props.message=='Success'){
      props.click(props.reservation_Created)
      props.history.push("/booking/confirmation")
     }
  }
    const onChangeInput = (e)=>{
            const name =e.target.name;
            const value=e.target.value;
            field[name] = value;
            setField({ ...field });
            validateField(e.target.name, e.target.value);
           console.log(field)
        }
        const validateField =(name,value)=>{

      let checkInDateValid = field.checkInDate;
      let checkOutDateValid = field.checkOutDate;
      let formErrors = field.FormErrors;
      let validForm = field.validForm;
      switch (name){
         
              case "checkInDate":
              checkInDateValid = value.length>5;
              formErrors = checkInDateValid?"":"invalid";

              break;
              case "checkOutDate":
                checkOutDateValid = value.length>5;
              formErrors = checkOutDateValid?"":"invalid";

              break;
              default :
              break;
      }
      setField({...field,
        formErrors:formErrors,
       
        validForm:checkInDateValid  && checkOutDateValid})
    

    }
    return(
       <>
     
         <div className="mt-5 ">
         <div className="card " height="100px"> 
            <div className="card-title ml-5 mr-5 mt-5"> Reservation</div>
                <div className="card-body mt-4 row">
                <form onSubmit={onSubmitHandler}  className="form-horizontal style-form">
               
                <div className="form-group col-lg-6">
                                <label for="exampleFormControlSelect2" className="control-label col-lg-2">customer</label>
                                <select  className="form-control col-lg-6" id="exampleFormControlSelect2" value={field.firstName} name="customerId" onChange={onChangeInput}>
                                <option  >Please select the user</option>
                      {customer.map((each,index)=>{
                                return( <option value={each._id}>{each.firstName} {each.lastName}</option>)
                                    })}
                             </select>
                            </div>
                            <div className="form-group col-lg-6">
                                <label for="exampleFormControlSelect2" className=" control-label col-lg-2">room</label>
                                <select  className="form-control col-lg-6" id="exampleFormControlSelect2"  value={field.roomId} name="roomId" onChange={onChangeInput}>
                                  <option  >Please select the room</option>
                            {room.map((each,index)=>{
                                return( <option value={each._id}>{each.roomType.room} {each.roomSample}</option>)
                                    })}
                             </select>
                            </div>
                     
                            <div className="form-group col-lg-6 ">
                              <label className="control-label col-md-3">check in</label>
                              <div className="col-md-3 col-xs-11">
                              <input type="date" name="checkInDate" value={field.checkInDate} onChange={onChangeInput} className="form-control"/>
                                <span className="help-block small-text">Select date</span>
                              </div>
                            </div>

                            <div className="form-group col-lg-6 ">
                              <label className="control-label col-md-3">check Out</label>
                              <div className="col-md-3 col-xs-11">
                              <input type="date" name="checkOutDate" value={field.checkOutDate} onChange={onChangeInput} className="form-control"/>
                                <span className="help-block small-text ">Select date</span>
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
      
       <script type="text/javascript" src="%PUBLIC_URL%/lib/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        </>
    )
}

Reservation = connect((state,props)=>{
  return{
    message : state.message,
   
  }
})(Reservation)
export default withRouter(Reservation)