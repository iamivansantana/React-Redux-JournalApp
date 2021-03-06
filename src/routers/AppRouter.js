import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch]);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path='/auth'
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={isLoggedIn}
						exact
						path='/'
						component={JournalScreen}
					/>

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
