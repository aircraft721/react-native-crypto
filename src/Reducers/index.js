import CryptoReducer from './CryptoReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    crypto: CryptoReducer
})