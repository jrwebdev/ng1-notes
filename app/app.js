import 'angular-material/angular-material.css';
import './styles.css';

import angular from 'angular';

import 'angular-material';
import 'angular-new-router';

import main from './components/main/main.js';

let app = angular.module('ng1-todo', [

    'ngMaterial',
    'ngNewRouter',

    main.name

]);

app.controller('MainController', ['$router', ($router) => {
    $router.config([
        {path: '/', component: 'main' }
    ])
}]);

angular.bootstrap(document, [app.name]);
