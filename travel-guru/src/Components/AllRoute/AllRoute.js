
import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import BookingDetails from '../BookingDetails/BookingDetails';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Hotel from '../Hotel/Hotel';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './AllRoute.css'


export const UserContext = createContext();

const AllRoute = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
 

    return (
        
           <UserContext.Provider value={[loggedInUser, setLoggedInUser] }>
             <div  className="bg">
             <Router>
             <Header></Header>
                <Switch>
                    <Route path="/home">
                      <Home></Home>
                    </Route>
                    
                    <Route path="/login">
                        <Login></Login>
                     </Route>

                    <Route exact path="/bookingdetail/:id">
                      <BookingDetails></BookingDetails>
                    </Route>

                    <Route path="/contact">
                            <Login></Login>
                        </Route>
                        
                        <Route exact path="/">
                            <Home></Home>
                        </Route>

                        <PrivateRoute path="/book/:id">
                          <Hotel></Hotel>
                        </PrivateRoute>
                        
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                </Switch>
            </Router>
             </div>
     
            </UserContext.Provider>
    );
};

export default AllRoute;