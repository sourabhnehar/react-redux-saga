import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import productSaga from './productSaga';
import authSaga from './authSaga';

// create middleware saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
//   enhancers: [composeWithDevTools()],
});

sagaMiddleware.run(productSaga);
sagaMiddleware.run(authSaga);

export default store;
