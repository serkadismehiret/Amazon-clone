import React, { createContext, useContext, useReducer } from "react";
// Prepares the dataLayer
export let StateContext = createContext();
// Wrap our app and provide the Data layer
export let StateProvider = ({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
);
// push and pull information from the data layer
export let useStateValue = ()=> useContext(StateContext);