

import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react/cjs/react.development";
import Navbar from "../component/Navbar";

import Coursel from "./Coursel"
let ReservationDetails = ()=>{
    const [reservation,setReservation] =useState([])
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
        axios({
            method:"get",
            url:process.env.REACT_APP_BASE_API_URL+"/reservation/all",
        }).then((res)=>{
            setReservation(res.data.data)
            // toast.warning(res.data.ResponseMessage)
            setLoading(false)
        },error=>{console.log(error);setLoading(false)})
    },Loading)
    return(
        <>
     <div className="container row ">
       <div className="col-lg-offset-2">
          
         <div class="row mt-5">
          <div class="col-md-12">
            <div class="content-panel">
              <table class="table table-striped table-advance table-hover">
                <h4><i class="fa fa-angle-right"></i> Reservations</h4>
                <hr/>
                <thead>
                  <tr>
                    <th><i class="fa fa-bullhorn"></i> Name</th>
                    <th class="hidden-phone"><i class="fa fa-question-circle"></i> Room Sample</th>
                    <th><i class="fa fa-bookmark"></i> CheckIn Date</th>
                    <th><i class=" fa fa-edit"></i> Reservation Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                 {reservation.map((each,value)=>{
                     return(
                        <tr>
                        <td>
                          <a href="basic_table.html#">{each.customerId?.firstName} {each.customerId?.lastName} </a>
                        </td>
                        <td class="hidden-phone">{each.roomId?.roomSample}</td>
                        <td>{each.checkIn} </td>
                        <td><span class="label label-info label-mini">{each.reservationDate}</span></td>
                        <td>
                          <a href={"/reservation/"+each._id}><button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button></a>
                          <button class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button>
                          <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                        </td>
                      </tr>
                     )
                 })}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
       </div>
     </div>
       
        </>
    )
}
ReservationDetails = connect()(ReservationDetails)
export default withRouter(ReservationDetails)