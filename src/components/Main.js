import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import FoodIndex from '../pages/FoodIndex';
import FoodShow from '../pages/FoodShow';
import CleanIndex from '../pages/CleanIndex';
import CleanShow from '../pages/CleanShow';
import OtherIndex from '../pages/OtherIndex';
import OtherShow from '../pages/OtherShow';

function Main(props) {

    //////// SET STATE /////////////////////////////////////    
    const [food, setFood] = useState(null);
    const [clean, setClean] = useState(null);
    const [other, setOther] = useState(null);


    /////////// Needs API URLs below //////////////////////
    const foodURL = "https://dtox-backend.herokuapp.com/food";
    const cleanURL = "https://dtox-backend.herokuapp.com/clean";
    const otherURL = "https://dtox-backend.herokuapp.com/other";

    ////////// FUNCTIONS TO FETCH THE DATA FROM THE API /////////    
    const getFood = async () => {
        const response = await fetch(foodURL);
        const data = await response.json();
        setFood(data);
    }

    const getClean = async () => {
        const response = await fetch(cleanURL);
        const data = await response.json();
        setClean(data);
    }

    const getOther = async () => {
        const response = await fetch(otherURL);
        const data = await response.json();
        setOther(data);
    }

    ////////// CALL THE GETTERS BELOW WITH USEEFFECT /////////
    useEffect(() => {
        getFood();
        getClean();
        getOther();
    }, [])



    return (
        <main>
            <Switch>
            ///// HOME ROUTE /////
                <Route exact path="/">
                    <Home />
                </Route>

            ///// FOOD INDEX ROUTE ////
                <Route exact path="/food">
                    <FoodIndex user={props.user} food={food} />
                </Route>
            ///// FOOD SHOW ROUTE ////
                <Route path="/food/:id" render={(rp) => {
                    if (!props.user) {
                        //show a modal or some alert
                        alert('You Must Be Logged in For That');
                        return <Redirect to="/"/>
                    } else {
                        return (
                            <FoodShow
                                food={food}
                                {...rp}
                            />
                        );
                    }

                }} />
            ///// CLEAN INDEX ROUTE //////
                <Route exact path="/clean">
                    <CleanIndex user={props.user} clean={clean} />
                </Route>
            ////// CLEAN SHOW ROUTE /////
                <Route path="/clean/:id" render={(rp) => {
                    if (!props.user) {
                        //show modal or some alert
                        alert('You Must Be Logged In For That');
                        return <Redirect to="/"/>
                    } else {
                        return (
                            <CleanShow
                            clean={clean}
                               {...rp}
                           />     
                        );
                    }
                 
                }}
                />
            ////// OTHER INDEX ROUTE /////
                <Route exact path="/other">
                    <OtherIndex user={props.user} other={other} />
                </Route>
            ////// OTHER SHOW ROUTE /////
                <Route path="/other/:id" render={(rp) => {
                    if (!props.user ) {
                        //show modal or some alert
                        alert('You Must Be Logged In For That');
                        return <Redirect to="/"/>
                    } else {
                        return (
                        <OtherShow
                            other={other}
                            {...rp}
                        />
                    );
                }
            }}
                />

            </Switch>
        </main>
    )
}

export default Main;