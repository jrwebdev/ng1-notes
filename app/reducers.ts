import {combineReducers} from 'redux';
import {ADD_NOTE, DELETE_NOTE} from './actions.ts';
import * as _ from 'lodash';

const INITIAL_STATE = {
    notes: []
};

function notes(state = INITIAL_STATE, action = {type: '', note: {}}) {

    console.log('reducer', {state, action});

    switch(action.type) {
        case ADD_NOTE:
            //return state;
            return _.extend({}, state, {notes: state.notes.concat([action.note])});
        default:
            return state;
    }

}

const notesApp = combineReducers({notes});

export default notesApp;