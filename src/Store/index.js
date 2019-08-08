import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../Reducer';
import state from './initialState';

export default createStore(
    reducer,
    state,
    composeWithDevTools (applyMiddleware(thunkMiddleware)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&   
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

// import { createStore, applyMiddleware,compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducerPrincipal from '../Reducer';

// const initialState={};
// const middleware=[thunk];
// const store=createStore(reducerPrincipal,initialState,compose(applyMiddleware(...middleware),
//    window.__REDUX_DEVTOOLS_EXTENSION__ &&   
//     window.__REDUX_DEVTOOLS_EXTENSION__()

// )) 

// export default store;