import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import routeRules from './routesRules';

const PrivateRoute = ({ component: Component, ...rest }) => {

	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('token') ? (
						<Component {...props} props={rest} />
				) : (
					<Redirect
						to={{
							pathname: routeRules.roomBooking,
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
