import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
// import FoodIndex from '../pages/FoodIndex';
// import FoodShow from '../pages/FoodShow';
// import CleanIndex from '../pages/CleanIndex';
// import CleanShow from '../pages/CleanShow';
// import OtherIndex from '../pages/OtherIndex';
// import OtherShow from '../pages/OtherShow';


const Main = () => {
  return (
    <main>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            
        </Switch>
    </main>
  )
}

export default Main;