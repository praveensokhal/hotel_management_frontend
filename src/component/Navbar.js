import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <header className="header black-bg">
        <div className="sidebar-toggle-box">
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
        </div>
     
        <a href="/" className="logo"><b>Aroma<span>plaza</span></b></a>
     
        <div className="mt-4 navbar-right mr-5">
      
   <Link to="/room/info"> <button  className=" btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-hotel"></i></button>
 </Link>
        </div>
      </header>
    )
}
export default Navbar