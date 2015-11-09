import 'angular-material/angular-material.css';
import './styles.css';

import angular from 'angular';

import 'angular-material';
import 'angular-new-router';

// Routes (Smart components)
import mainRoute from './routes/main/main';

// Dumb components
import notes from './components/notes/notes.module';

let app = angular.module('ng1-todo', [

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
    $componentLoaderProvider.setCtrlNameMapping(name => './routes/' + name + '/' + name + '.js');
}]);

app.controller('AppController', ['$router', ($router) => {
    $router.config([
        {path: '/', component: 'main' }
    ])
}]);

angular.bootstrap(document, [app.name]);
