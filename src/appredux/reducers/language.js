// reducers/people.js
import { CHANGE_LANGUAGE } from 'appredux/constant';

const initialState = { language: 'en' }

export default function languageReducer(state = initialState, action) {
  console.log(action)
  console.log(state)
  switch (action.type) {
    
    case CHANGE_LANGUAGE:
      return action.lang;
    default:
      return state;
  }
}