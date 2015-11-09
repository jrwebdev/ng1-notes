import angular from 'angular';

import noteListDirective from './note-list/note-list.directive';
import noteDirective from './note-list/note/note.directive';

let module = angular.module('notes', [])
                    .directive('noteList', noteListDirective)
                    .directive('note', noteDirective);

export default module;