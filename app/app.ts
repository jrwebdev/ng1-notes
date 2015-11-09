/// <reference path="../typings/angularjs/angular.d.ts" />

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

let app = angular.module('ng1-notes', [

    'ngMaterial',
    'ngNewRouter',

    // Routes
    mainRoute.name,

    // Components
    notes.name

]);

app.config(['$componentLoaderProvider', ($componentLoaderProvider) => {
    // Change router to use routes/ so components/ can be used for dumb components
    $componentLoaderProvider.setTemplateMapping(name => './routes/' + name + '/' + name + '.html');
    $componentLoaderProvider.setCtrlNameMapping(name => name + 'Controller');
}]);

app.controller('AppController', ['$router', ($router) => {
    $router.config([
        {path: '/', component: 'main' }
    ])
}]);

angular.bootstrap(document, [app.name]);