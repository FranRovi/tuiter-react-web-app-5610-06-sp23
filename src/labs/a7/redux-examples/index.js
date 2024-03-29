import React from 'react';
import HelloReduxExampleComponent from './reducers/hello-redux-example-component';
import hello from './reducers/hello';
import todos from './reducers/todos-reducers'
import Todos from './todos-component';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 

const store = configureStore(
    {reducer: {hello, todos}}
);


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Example</h2>
                <Todos/>
                <HelloReduxExampleComponent/>  
            </div> 
        </Provider>  
    );
};

export default ReduxExamples;