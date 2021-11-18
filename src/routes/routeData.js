import loadable from "@loadable/component"
import routeRules from "./routesRules"
const RouteData = [
    {
        path:routeRules.landingPage,
        exact:true,
        auth : false,
        component : loadable(()=> import ('../component/Home') )
    },
    {
        path:routeRules.CreateRoomInformation,
        exact:true,
        component: loadable(()=> import ('../component/RoomInfoForm'))
    },
    {
        path:routeRules.reservationDetails,
        exact:true,
        component: loadable(()=> import ('../component/ReservationDetail'))
    },
    {
        path:routeRules.BookingPage,
        // exact:true,
        component: loadable(()=> import ('../component/Booking'))
    },
    {
        path:routeRules.singleReservationDetails,
        exact:true,
        component: loadable(()=> import ('../component/Card'))
    },
    {
        path:routeRules.reservation,
        exact:true,
        component: loadable(()=> import ('../component/Reservation'))
    },
    {
        path:routeRules.NotfoundPage,
        exact:false,
        component: loadable(()=> import ('../component/NotFoundPage'))
    }
]
export default RouteData;