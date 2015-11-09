import angular from 'angular';

import noteFormDirective from './note-form/note-form.directive';
import noteListDirective from './note-list/note-list.directive';
import noteDirective from './note-list/note/note.directive';

let module = angular.module('notes', [])
                    .directive('noteForm', noteFormDirective)
                    .directive('noteList', noteListDirective)
                    .directive('note', noteDirective);

export default module;