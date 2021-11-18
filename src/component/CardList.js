import { useEffect, useState } from "react"
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import {allRoomsList} from "../redux/apiMiddleware"
let CardList = (props) =>{
  
  const [Loading,setLoading] = useState(true)
  useEffect(()=>{
   props.dispatch(allRoomsList())
    setLoading(false)
  },[Loading])
    return(
    
      <section class="wrapper site-min-height">
        <div class="row">
          <div class="col-lg-12">
      {props.room.map((each,value)=>{
         return(
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="custom-box">
            <div class="servicetitle">
              <h4>{each?.roomType?.room}</h4>
              <hr/>
              <p>{each?.roomSample}</p>
            </div>
            <div class="icn-main-container">
              <span class="icn-container">{each?.roomType?.price}</span>
            </div>
            <p>{each.description}</p>
            <a class="btn btn-theme" href="/booking/customer-details">Book Now</a>
          </div>
        </div>
         )
       })}
          </div>
        </div>
      </section>
    )
}
CardList = connect((state,props)=>{
  return {
    ...props,
      isloading:state.isloading,
      room:state?.room_data
    }
})(CardList)

export default withRouter(CardList)