import noteFormDirective from './note-form/note-form.directive.ts';
import noteListDirective from './note-list/note-list.directive.ts';
import noteDirective from './note-list/note/note.directive.ts';

let module = angular.module('notes', [])
                    .directive('noteForm', noteFormDirective)
                    .directive('noteList', noteListDirective)
                    .directive('note', noteDirective);

export default module;