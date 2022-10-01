import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import FoodIndex from '../pages/FoodIndex';
import FoodShow from '../pages/FoodShow';
import CleanIndex from '../pages/CleanIndex';
import CleanShow from '../pages/CleanShow';
import OtherIndex from '../pages/OtherIndex';
import OtherShow from '../pages/OtherShow';


const Main = () => {
  return (
    <main>
        <Switch>
            ///// HOME ROUTE /////
            <Route exact path="/">
                <Home />
            </Route>
 
            ///// FOOD INDEX ROUTE ////
            <Route path="/food">
                <FoodIndex />
            </Route>
            ///// FOOD SHOW ROUTE ////
            <Route 
                path="/food/:id"
                render={(rp) => (
                    <FoodShow 
                        {...rp}
                    />
                )}
            />
            ///// CLEAN INDEX ROUTE //////
            <Route path="/clean">
                <CleanIndex />
            </Route>
            ////// CLEAN SHOW ROUTE /////
            <Route 
                path="/food/:id"
                render={(rp) => (
                    <CleanShow 
                        {...rp}
                    />
                )}
            />
            ////// OTHER INDEX ROUTE /////
            <Route path="/other">
                <OtherIndex />
            </Route>
            ////// OTHER SHOW ROUTE /////
            <Route 
                path="/food/:id"
                render={(rp) => (
                    <OtherShow 
                        {...rp}
                    />
                )}
            />

            

        </Switch>
    </main>
  )
}

export default Main;