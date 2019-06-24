import { combineReducers } from 'redux';

import choiceSection from './choiceSection'
import loginToggle from './loginToggle'

const reducers = combineReducers({
    choiceSection, loginToggle
})

export default reducers;