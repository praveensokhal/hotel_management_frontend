import {Link, Redirect, Route, useRouteMatch, withRouter} from "react-router-dom";
import {useState} from "react"
import CustomerDetails from "./CustomerDetails";
import ReservationDetail from "./ReservationDetail";
import "./component.css"
import Reservation from "./Reservation";
import MessageBox from "./MessageBox";
import Card from "./Card";
import Payment from "./Payment";

let Booking = (props)=>{
    var {path} =  useRouteMatch()
    let [data,setData] = useState()
    const [tab1,setTab1]=useState(true)
    const [tab2,setTab2]=useState(false)
    const[tab3,setTab3] = useState(false)

    var CustomerTabChange =()=>{
        setTab2(true)
    }
    var OrderTabChange = (data)=>{
        setData(data)
        setTab3(true)
    }
    return (
        
        <>
        <div className="container-full ml-5  row card-groups  mt-5">
            <div className="col-lg-2">
               <div className="mt-5">
                <ul className="booking-side-bar">
                    
                        <li>
                            <Link className={`${tab1===true?'nav-link active ':'nav-link disabled'}`}  to={path+'/customer-details'}>
                            <button type="button " className="btn btn-outline-primary rounded-pill checkout-button" ><strong>Customer Details</strong></button>
                            </Link>
                        </li>
                        <li>
                            <Link   className={`${tab2===true?'nav-link active ':'nav-link disabled'}`}   to={path+'/room-details'}>
                            <button type="button " className="btn btn-outline-primary rounded-pill checkout-button" ><strong>Reserve Room</strong></button>
                            </Link>
                        </li>
                        <li>
                            <Link   className={`${tab3===true?'nav-link active ':'nav-link disabled'}`} to={path+'/confirmation'}>
                            <button type="button " className="btn btn-outline-primary rounded-pill checkout-button" ><strong> Confirm Details</strong></button>
                            </Link>
                        </li>
                    </ul>
               </div>
               
            </div>
           
            <div className=" col-lg-10">
                <div className="row">
                   <Route exact path={path+"/customer-details"} ><CustomerDetails click={CustomerTabChange}></CustomerDetails></Route>
                   <Route exact path={path+"/room-details"}><Reservation click={OrderTabChange}></Reservation></Route>
                   <Route exact path={path+"/confirmation"}><MessageBox component={Payment} data={data} ></MessageBox></Route>
                </div>
            </div>
      </div>
        </>
    )
}
export default withRouter(Booking)