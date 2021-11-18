
import axios from "axios"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import { ReservationCreate } from "../redux/apiMiddleware"

let Payment = (props)=>{
    const [field , setField] = useState({
        roomId:"",
        customerId:"",
        checkInDate:"",
        checkOutDate:"",
        formErrors:"",
        validForm:""
    })
 
    const [reservationData,setReservationData] = useState([]);
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
     console.log(props)
     console.log("hiProps")
      axios({
        method:"get",
        url:process.env.REACT_APP_BASE_API_URL+"/reservation/view/"+props.reservation_Created?._id,
      }).then((res)=>{
        console.log("data",res.data.data)
        setReservationData(res.data.data)
        setLoading(false)
      },error=>{console.log("error");
          setLoading(false)})
          
    },[Loading])
  
    
    return(
       <>
     
         <div className="mt-5 content-panel ">
         <div className=" " height="100px"> 
            <div className=" ml-5 mr-5 mt-5"> Payment</div>
                <div className=" mt-4 row">
               {/* ----------- */}
               <div class="invoice-body">
               <div class="detailed mt">
                          <h4>Recent Activity</h4>
                      {  reservationData ?  <div class="recent-activity">
                           <div class="activity-panel">
                            <h4>{reservationData?.customerId?.firstName} {reservationData?.customerId?.lastName} </h4>
                           
                              <p>{reservationData?._id ? ("Reservation NO: "+reservationData?._id) :" OOps"}</p>
                            </div>
                          <div class="activity-panel">
                              <h5>5 HOURS AGO</h5>
                              <p>{"Reservation Date :  "+reservationData?.reservationDate}</p>
                            </div>
                           <div class="activity-panel">
                           <h4>{reservationData?.roomId?.roomSample?("Room Sample :  "+reservationData?.roomId?.roomSample):""}</h4>
                              <p> 
                                <strong>{reservationData?.checkIn?("Check In Date :  "+reservationData?.checkIn):""}</strong><br/>
                                <strong>{reservationData?.checkOut?("Check OUT Date :      "+reservationData?.checkOut):""}</strong><br/>
                              </p>
                            </div>
                          </div> :""}
                        
                        </div>
                <br/>
                <br/>
              </div>
           
            </div>
          </div>
         </div> 

        
      
       <script type="text/javascript" src="%PUBLIC_URL%/lib/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        </>
    )
}

Payment = connect((state,props)=>{
 
  return{
    message : state.message,
    reservation_Created:state?.reservation_Created
  }
})(Payment)
export default withRouter(Payment)