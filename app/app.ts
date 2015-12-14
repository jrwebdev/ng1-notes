/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/ng-redux/index.d.ts" />

'use strict';

import 'angular-material/angular-material.css';
import './styles.css';

import * as angular from 'angular';

import 'angular-material';
import 'angular-new-router';

// Routes (Smart components)
import mainRoute from './routes/main/main.ts';

// Dumb components
import notes from './components/notes/notes.module.ts';

// Redux
import 'ng-redux';
import * as reduxLogger from 'redux-logger';
import reducers from './reducers.ts';

let app = angular.module('ng1-notes', [

    'ngMaterial',
    'ngNewRouter',
    'ngRedux',

    // Routes
    mainRoute.name,

    // Components
    notes.name

]);

app.config([
    '$componentLoaderProvider', '$ngReduxProvider',
    ($componentLoaderProvider, $ngReduxProvider) => {

        // Change router to use routes/ so components/ can be used for dumb components
        $componentLoaderProvider.setTemplateMapping(name => './routes/' + name + '/' + name + '.html');
        $componentLoaderProvider.setCtrlNameMapping(name => name + 'Controller');

        let logger = reduxLogger({
            collapsed: true,
            timestamp: true,
            duration: true
        });

        $ngReduxProvider.createStoreWith(reducers, [logger]);

}]);

app.controller('AppController', ['$router', function ($router) {
    $router.config([
        {path: '/', component: 'main' }
    ]);
}]);

angular.bootstrap(document, [app.name]);