
import axios from "axios"
import { useState } from "react/cjs/react.development"
import Coursel from "./Coursel"
import Navbar from "./Navbar"
import { CustomerCreate } from "../redux/apiMiddleware"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import "./component.css"

let CustomerDetails = (props)=>{
    const [field , setField] = useState({
        firstName:"",
        lastName:"",
        contactNo:"",
        adhaarNo:"",
        address:"",
        email:"",
        formErrors:"",
        validForm:""
    })
    const onSubmitHandler=(e)=>{
      e.preventDefault();
      // props.click()
      let  data = {
        firstName:field.firstName,
        lastName:field.lastName,
        adhaarNo:field.adhaarNo,
        address:field.address,
        contactNo:field.contactNo,
        email:field.email
      }
      props.dispatch(CustomerCreate(data));
      props.click(true)
  }
    const onChangeInput = (e)=>{
            const name =e.target.name;
            const value=e.target.value;
            field[name] = value;
            setField({ ...field });
            validateField(e.target.name, e.target.value);
           
        }
        const validateField =(name,value)=>{
                
      let firstNameValid = field.firstName;
      let lastNameValid = field.lastName;
      let contactNoValid = field.contactNo;
      let adhaarNoValid = field.adhaarNo;
      let addressValid = field.address;
      let emailValid = field.email;
      let formErrors = field.FormErrors;
      let validForm = field.validForm;
      switch (name){
          case "firstName":
              firstNameValid = value.length>5;
              formErrors = firstNameValid?"":"invalid";

              break;
            
              case "lastName":
              lastNameValid = value.length>5;
              formErrors = lastNameValid?"":"invalid";

              break;
              case "email":
              emailValid = value.length>5;
              formErrors = emailValid?"":"invalid";

              break;
              case "contactNo":
              contactNoValid = value.length>5;
              formErrors = contactNoValid?"":"invalid";

              break;
              case "adhaarNo":
              adhaarNoValid = value.length>5;
              formErrors = adhaarNoValid?"":"invalid";

              break;
              case "adsress":
              addressValid = value.length>5;
              formErrors = addressValid?"":"invalid";
              break;
              default :
              break;
      }
      setField({...field,
        formErrors:formErrors,
        emailValid:emailValid,
        firstNameValid:firstNameValid,
        lastNameValid:lastNameValid,
        addressValid:addressValid,
        adhaarNoValid:adhaarNoValid,
        validForm:emailValid && firstNameValid && lastNameValid && addressValid})
    

    }
    return(
       <>
   
           <div className="row">
         
          <div className="card col-md-12 " height="100px"> 
            <div className="card-title ml-5 mr-5 mt-5">Customer Details</div>
                <div className="card-body mt-4">
                <form onSubmit={onSubmitHandler}  className="form-horizontal style-form">
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">FirstName</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" name="firstName" value ={field.firstName} onChange={onChangeInput} className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <label className="col-lg-2 control-label">Last Name</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" name="lastName"  value ={field.lastName} onChange={onChangeInput} className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">Email</label>
                  <div className="col-lg-10">
                    <input type="email" placeholder="" name="email"  value ={field.email} onChange={onChangeInput}  className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">Contact No</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder=""  name="contactNo"  value ={field.contactNo} onChange={onChangeInput} className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">Adhaar No</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" name="adhaarNo"  value ={field.adhaarNo} onChange={onChangeInput} className="form-control"/>
                  </div>
                </div>
                <div className="form-group col-lg-6 ">
                  <label className="col-lg-2 control-label">Address </label>
                  <div className="col-lg-10">
                    <textarea type="text"  rows="4" cols="50"  placeholder="" value={field.address} name="address" onChange={onChangeInput}  className="form-control"/>
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
        </>
    )
}

CustomerDetails =connect((state,props)=>{
  if(state.message==="Success"){
    props.history.push("/booking/room-details")
  }
})(CustomerDetails)
export default withRouter(CustomerDetails)