import { applyMiddleware } from 'redux';
import facebookMiddleware from './facebook';

const middleware = [facebookMiddleware];

export default applyMiddleware(...middleware);
