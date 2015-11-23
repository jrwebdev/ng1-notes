/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/ng-redux/index.d.ts" />

'use strict';

import 'angular-material/angular-material.css';
import './styles.css';

import * as angular from 'angular';

import 'angular-material';
import 'angular-new-router';
import 'ng-redux';

// Routes (Smart components)
import mainRoute from './routes/main/main.ts';

// Dumb components
import notes from './components/notes/notes.module.ts';

// Redux
import {combineReducers} from 'redux';
import reducers from './reducers.ts';
import store from './store.ts';
import {addNote} from './actions.ts';

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addNote({title: 'Test', note: 'Test note'}));
store.dispatch(addNote({title: 'Test 2', note: 'Test note 2'}));

unsubscribe();

let app = angular.module('ng1-notes', [

    'ngMaterial',
    'ngNewRouter',
    'ngRedux',

    // Routes
    mainRoute.name,

    // Components
    notes.name

]);

app.config(($ngReduxProvider) => {
    //let reducer = combineReducers(reducers);
    //$ngReduxProvider.createStoreWith(reducer, ['promiseMiddleware']);
    $ngReduxProvider.createStoreWith(reducers, []);
});

app.config(['$componentLoaderProvider', ($componentLoaderProvider) => {
    // Change router to use routes/ so components/ can be used for dumb components
    $componentLoaderProvider.setTemplateMapping(name => './routes/' + name + '/' + name + '.html');
    $componentLoaderProvider.setCtrlNameMapping(name => name + 'Controller');
}]);

app.controller('AppController', ['$router', '$ngRedux', function ($router, $ngRedux) {

    $router.config([
        {path: '/', component: 'main' }
    ]);

    this.mapStateTothis = function (state) {
        console.log('mapStateTothis', {state});
        return {
            notes: state.notes.notes
        }
    };

    //let unsubscribe = $ngRedux.connect(this.mapStateTothis, CounterActions)(this);
    $ngRedux.connect(this.mapStateTothis, {addNote})(this);

    //window.setInterval(() => console.log(this), 10000);

}]);

angular.bootstrap(document, [app.name]);