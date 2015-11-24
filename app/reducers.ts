import {combineReducers} from 'redux';
import {ADD_NOTE, DELETE_NOTE} from './actions.ts';
import * as _ from 'lodash';

const INITIAL_STATE = {
    notes: [{
        title: 'Note 1',
        note: 'Note 1 note text'
    },{
        title: 'Note 2',
        note: 'Note 2 note text'
    },{
        title: 'Note 3',
        note: 'Note 3 note text'
    },{
        title: 'Note 4',
        note: 'Note 4 note text'
    },{
        title: 'Note 5',
        note: 'Note 5 note text'
    }]
};

// TODO: Move
interface IAction {
    type: string,
    payload: any
}

function notes(state = INITIAL_STATE, action?: IAction) {

    console.log('reducer', {state, action});

    switch(action.type) {
        case ADD_NOTE:
            //return state;
            //return _.extend({}, state, {notes: state.notes.concat([action.payload.note])});
            //return _.extend({}, state, {notes: [...state.notes, action.payload.note]});
            return {...state, notes: [...state.notes, action.payload.note]};
        default:
            return state;
    }

}

export default combineReducers({notes});