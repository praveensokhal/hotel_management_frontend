
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import PrivateRoute from './routes/privateRoutes';
import "./assets/css/style.css";
import PublicRoute from './routes/publicRoutes';
import routesData from './routes/routeData';
import NotFoundPage from './component/NotFoundPage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
<>
<div>
    
        <ToastContainer />
      
     <Router>
       
       <Switch>
       {routesData.map((route, index) => {
							if (route.auth) {
								return <PrivateRoute {...route} key={index} />;
							} else {
              
								return <PublicRoute {...route} key={index} />;
							}
						})}
       </Switch>
     </Router>
   </div>
</>
  );
}

export default App;
