import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import SigninPage from './pages/SigninPage';
import AddProudact from './pages/AddProudact';
import PrivateRoute from './components/PrivetRoute';

import DetailsPage from './pages/DetailsPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from './JS/actions/authActions';

function App() {
// const dispatch = useDispatch()
// const isLoading  = useSelector((state) => state.authReducer.isLoading )
// useEffect(() => {
// 	dispatch(getAuthUser())
// }, [dispatch])

// 	if (isLoading){
// 		return <h1> Loading ...</h1>
// 	}

	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/login" exact component={SigninPage} />
				<Route path="/addproduct" exact component={AddProudact} />
				<Route path="/details" exact component={DetailsPage} />
				<PrivateRoute path="/profil" component={Pricing}  />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
